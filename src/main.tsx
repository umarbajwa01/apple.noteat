import * as React from "react"
import { createRoot } from "react-dom/client"
import Portfolio from "./component"

const gh = "https://github.com/sundasfatima476"

function App() {
  return (
    <Portfolio
      height="calc(100svh - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px))"
      name="Sundas Fatima"
      eyebrow="welcome to my"
      headline="portfolio"
      email="sundasfatima476@gmail.com"
      availability="Open to Full-Stack (MERN) & Data Analytics roles"
      links={[
        { label: "GitHub", url: gh },
        { label: "LinkedIn", url: "https://linkedin.com/in/sundas-fatima-86472b407" },
      ]}
      about={{
        title: "hi, I'm sundas",
        paragraphs: [
          "I'm a Full-Stack Developer (MERN) with a Data Analytics background. I'm a fresh BSCS graduate of the University of the Punjab (A+ grade) and a NAVTTC-certified MERN Stack Developer.",
          "I've interned at Corvit Systems and Systems Limited. I build and deploy production-ready apps with React, Node.js, Express and MongoDB/MySQL, and I use Python to turn raw data into business insights.",
          "Based in Lahore, Pakistan.",
        ],
      }}
      folders={[
        {
          id: "fullstack", label: "full-stack", title: "Full-Stack", style: "blush", x: 17, y: 62,
          projects: [
            {
              name: "Bricks & Keys", role: "Real estate platform", tags: ["React", "Node.js", "Express.js", "MySQL", "Vercel", "Railway"],
              url: "https://bricks-keys-a73k.vercel.app",
              description: "An end-to-end real estate marketplace with property listings, advanced filters and JWT authentication. Includes a separate secure Admin Dashboard on Vercel, REST APIs deployed on Railway with full error handling, and an optimized MySQL schema for property data, user roles and client inquiries. GitHub: sundasfatima476/brickskeys",
            },
            {
              name: "TripPilot", year: "FYP", role: "Smart travel planning platform", tags: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Supabase"],
              url: gh + "/TripPilot",
              description: "A full-stack travel platform with itinerary generation, hotel booking and flight management. Integrates Firebase/Supabase authentication with CAPTCHA, plus weather-based analytics recommendations.",
            },
            {
              name: "Exactitude", role: "Business estimating website", tags: ["HTML", "CSS", "JavaScript", "Vercel"],
              url: "https://exactitude-vesv.vercel.app/",
              description: "A responsive estimating page for a business website, built with HTML, CSS and JavaScript and deployed live on Vercel. GitHub: sundasfatima476/exactitude",
            },
          ],
        },
        {
          id: "data", label: "data analytics", title: "Data Analytics", style: "noir", x: 81, y: 12,
          projects: [{
            name: "AutoInsight", role: "Sales analytics dashboard", tags: ["Python", "Flask", "Pandas", "statsmodels", "Chart.js", "ReportLab"],
            url: gh + "/Autoinsight",
            description: "A web app that turns an uploaded sales CSV into a cleaned dataset, KPIs, interactive charts and insights. Uses Pandas cleaning, a Holt-Winters 3-month forecast, z-score anomaly detection and RFM segmentation, with a downloadable PDF report (ReportLab) and a drag-and-drop Chart.js dashboard.",
          }],
        },
        {
          id: "more", label: "more projects", title: "More Projects", style: "ribbon", x: 61, y: 27,
          projects: [
            {
              name: "Tele-medicine Platform", role: "Full-stack", tags: ["React", "Node.js", "Express.js", "MongoDB"],
              url: gh + "/Tele-medicine",
              description: "A full-stack app connecting patients with doctors online.",
            },
            {
              name: "Real-Time Task Board", role: "Full-stack", tags: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"],
              url: gh + "/Real-Time-Task-Board",
              description: "A collaborative task board with live updates using Socket.io.",
            },
            {
              name: "E-commerce Website", role: "Full-stack", tags: ["React", "Node.js", "Express.js", "MongoDB"],
              url: gh + "/E-commerce",
              description: "A full-stack online store with backend APIs.",
            },
          ],
        },
        {
          id: "experience", label: "experience", title: "Experience", style: "bows", x: 83, y: 58,
          projects: [
            {
              name: "Corvit Systems", year: "Feb 2026 – Present", role: "Full Stack Web Developer Intern", tags: ["MERN", "REST APIs", "NAVTTC"],
              description: "Developing MERN stack apps covering frontend UI, REST APIs and database integration. Building and deploying full-stack projects as part of the NAVTTC Full Stack Web Development program, and working on real-world client projects with a focus on clean code and performance optimization.",
            },
            {
              name: "Systems Limited (VSI)", year: "Aug – Nov 2025", role: "Data Analytics Intern", tags: ["Python", "Pandas", "EDA", "Visualization"],
              url: "https://www.linkedin.com/in/sundas-fatima-86472b407/details/recommendations/",
              description: "Cleaned and preprocessed raw datasets in Python (missing values, duplicates, inconsistent formats), performed exploratory data analysis to uncover trends, and presented findings through visualizations and analytical reports. Recommended on LinkedIn by Zeeshan Ahmad, VP at Systems Limited (link opens the recommendation).",
            },
          ],
        },
      ]}
      skills={["React.js", "HTML5", "CSS3", "Bootstrap", "JavaScript (ES6+)", "Node.js", "Express.js", "Flask", "REST APIs", "MongoDB", "MySQL", "Firebase", "Supabase", "Python", "Pandas", "Data Visualization", "Git & GitHub", "Vercel", "Railway", "OpenAI & Gemini API"]}
      now={[
        "Full Stack Web Developer Intern at Corvit Systems",
        "BS Computer Science, University of the Punjab, A+ grade",
        "Certified: NAVTTC Full Stack, IT Specialist JavaScript",
      ]}
      faq={[
        { q: "What do you build with?", a: "MERN: React, Node.js, Express and MongoDB or MySQL, plus Python (Pandas, Flask) for data analytics." },
        { q: "What certifications do you have?", a: "Full Stack Web Development (NAVTTC, Corvit Systems, May 2026), IT Specialist JavaScript (Certiport, May 2026), Data Analytics (DigiSkills.pk, Mar 2026) and Python Programming (eSkills.pk, Oct 2025)." },
        { q: "Where are you based?", a: "Lahore, Pakistan." },
        { q: "How can I reach you?", a: "Send me an email from the Mail app, or find me on GitHub and LinkedIn." },
      ]}
    />
  )
}

createRoot(document.getElementById("root")!).render(<App />)
