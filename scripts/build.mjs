import { readFile, writeFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { build } from "esbuild"

const projectDir = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const indexPath = resolve(projectDir, "public/index.html")
const startMarker = "<!-- portfolio-app:start -->"
const endMarker = "<!-- portfolio-app:end -->"
const html = await readFile(indexPath, "utf8")
const newline = html.includes("\r\n") ? "\r\n" : "\n"
let start
let end

if (html.includes(startMarker) || html.includes(endMarker)) {
  if (html.split(startMarker).length !== 2 || html.split(endMarker).length !== 2) {
    throw new Error("Expected exactly one pair of portfolio app markers in public/index.html.")
  }
  start = html.indexOf(startMarker)
  const endStart = html.indexOf(endMarker)
  const markedContent = html.slice(start + startMarker.length, endStart)
  if (endStart < start || !/^\s*<script>[\s\S]*<\/script>\s*$/.test(markedContent) ||
      (markedContent.match(/<\/script\s*>/gi) ?? []).length !== 1) {
    throw new Error("Portfolio app markers must surround only the inline application script.")
  }
  end = endStart + endMarker.length
} else {
  // Migrate the existing standalone page once, leaving its theme script intact.
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)]
  const candidates = scripts.filter((script) =>
    script[1].trim() === "" &&
    /^\s*\(\(\)\s*=>\s*\{/.test(script[2]) &&
    /document\.getElementById\(["']root["']\)/.test(script[2])
  )
  if (scripts.length < 2 || candidates.length !== 1 || candidates[0] !== scripts.at(-1)) {
    throw new Error("Could not identify the final inline portfolio app script unambiguously.")
  }
  start = candidates[0].index
  end = start + candidates[0][0].length
}

const result = await build({
  absWorkingDir: projectDir,
  entryPoints: ["src/main.tsx"],
  bundle: true,
  minify: true,
  platform: "browser",
  format: "iife",
  define: { "process.env.NODE_ENV": '"production"' },
  write: false,
})
if (result.outputFiles.length !== 1) {
  throw new Error("Expected a single JavaScript bundle for the standalone portfolio.")
}
const bundle = result.outputFiles[0].text.trimEnd()
if (/<\/script\b/i.test(bundle)) {
  throw new Error("The generated bundle contains an unsafe inline script closing tag.")
}
const app = [startMarker, `<script>${bundle}</script>`, endMarker].join(newline)
await writeFile(indexPath, html.slice(0, start) + app + html.slice(end), "utf8")
console.log("Built src/main.tsx into public/index.html.")
