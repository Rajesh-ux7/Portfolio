import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export const TYPING_ROLES = [
  "Front-End Developer",
  "Full Stack Engineer",
  "React Specialist",
  "UI/UX Enthusiast",
];

export const SKILLS = {
  Frontend: [
    { name: "React", level: 92 },
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 88 },
    { name: "HTML & CSS", level: 96 },
    { name: "Tailwind CSS", level: 94 },
  ],
  Backend: [
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 85 },
    { name: "REST APIs", level: 90 },
    { name: "GraphQL", level: 75 },
  ],
  Database: [
    { name: "MongoDB", level: 86 },
    { name: "PostgreSQL", level: 82 },
    { name: "MySQL", level: 80 },
    { name: "Redis", level: 70 },
  ],
  "Cloud / DevOps": [
    { name: "AWS", level: 78 },
    { name: "Docker", level: 80 },
    { name: "CI/CD", level: 75 },
    { name: "Linux", level: 85 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 94 },
    { name: "VS Code", level: 96 },
    { name: "Figma", level: 82 },
    { name: "Postman", level: 88 },
  ],
} as const;

export const PROJECTS = [
  {
    title: "Nebula Analytics",
    description: "Real-time SaaS analytics dashboard with custom charts, role-based auth, and dark mode.",
    image: project1,
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    category: "Full Stack",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Aurora Commerce",
    description: "Modern e-commerce storefront with Stripe checkout, cart persistence, and product search.",
    image: project2,
    tags: ["Next.js", "Tailwind", "Stripe", "MongoDB"],
    category: "Frontend",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Prism AI Chat",
    description: "AI-powered chat app with streaming responses, conversation memory, and prompt presets.",
    image: project3,
    tags: ["React", "Node.js", "OpenAI", "WebSockets"],
    category: "Full Stack",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Tasker Pro",
    description: "Kanban-style task manager with drag & drop, team workspaces, and offline sync.",
    image: project4,
    tags: ["React", "Express", "MongoDB", "Docker"],
    category: "Full Stack",
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export const PROJECT_CATEGORIES = ["All", "Frontend", "Full Stack"] as const;

export const TIMELINE = [
  {
    type: "Internship",
    role: "Full Stack Developer Intern",
    org: "Northwind Technologies",
    period: "Jun 2024 — Dec 2024",
    description: "Built internal dashboards in React + Node.js, integrated AWS S3 uploads, and reduced page load times by 38%.",
  },
  {
    type: "Internship",
    role: "Front-End Developer Intern",
    org: "Lumen Studio",
    period: "Jan 2024 — May 2024",
    description: "Shipped 12+ marketing pages with Next.js & Tailwind, collaborated with design on a new component library.",
  },
  {
    type: "Achievement",
    role: "Hackathon Winner — Best UI",
    org: "DevFest 2023",
    period: "Oct 2023",
    description: "Built a real-time collaborative whiteboard in 36 hours and won the Best UI/UX award among 80+ teams.",
  },
  {
    type: "Education",
    role: "B.Tech in Computer Science",
    org: "State University",
    period: "2021 — 2025",
    description: "Coursework in algorithms, distributed systems, web engineering & databases. CGPA 8.9 / 10.",
  },
];

export const CERTIFICATIONS = [
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024", url: "#" },
  { title: "Meta Front-End Developer", issuer: "Coursera × Meta", year: "2024", url: "#" },
  { title: "MongoDB Developer Associate", issuer: "MongoDB University", year: "2023", url: "#" },
  { title: "Docker Foundations", issuer: "Docker Inc.", year: "2024", url: "#" },
  { title: "Google UX Design", issuer: "Coursera × Google", year: "2023", url: "#" },
  { title: "Full Stack Open", issuer: "University of Helsinki", year: "2023", url: "#" },
];
