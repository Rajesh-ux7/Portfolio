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
  "Full Stack Developer",
  "Web Developer",
];

export const SKILLS = {
  Frontend: [
    { name: "React", level: 92 },
    { name: "JavaScript", level: 95 },
    { name: "HTML & CSS", level: 96 },
    { name: "Tailwind CSS", level: 94 },
  ],
  Backend: [
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 85 },
    { name: "REST APIs", level: 90 },
  ],
  Database: [
    { name: "MongoDB", level: 86 },
    { name: "MySQL", level: 80 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 94 },
    { name: "VS Code", level: 96 },
    { name: "Figma", level: 82 },
    { name: "Postman", level: 88 },
    { name: "Linux", level: 88 },
  ],
} as const;

export const PROJECTS = [
  {
    title: "Flood Detection System Using IoT Sensors",
    description: "Real-time Flood Alerts with IoT: Sensor-based system for monitoring water levels, providing early warnings to communities and authorities.",
    image: project1,
    tags: ["React", "JavaScript", "Node.js", "Arduino"],
    category: "Full Stack",
    github: "https://github.com/Rajesh-ux7/floodwatch",
    demo: "#",
  },
];

export const PROJECT_CATEGORIES = ["All", "Frontend", "Full Stack"] as const;

export const TIMELINE = [
  {
    type: "Internship",
    role: "Front end Web Development Virtual Intern",
    org: "IBM SkillsBuild",
    period: "6 Weeks",
    description: "Completed a 6-week internship under IBM SkillsBuild. Gained hands-on experience in frontend technologies through project-based learning, mentor-guided sessions and real-world problem solving.",
  },
  {
    type: "Internship",
    role: "Full Stack Developer Intern",
    org: "Future Interns",
    period: "Jul 2025 — August 2025",
    description: "Built responsive web interfaces using HTML, CSS, and JavaScript, integrated REST APIs for frontend-backend communication, and assisted in database integration and debugging. Collaborated in a team environment to improve performance and followed Git-based version control best practices.",
  },
  {
    type: "Education",
    role: "B.Tech in Computer Science",
    org: "ANITS COLLEGE",
    period: "2023 — 2027",
    description: "Coursework in algorithms, distributed systems, web engineering & databases.",
  },
];

export const CERTIFICATIONS = [
  { title: "Web Development Fundamentals", issuer: "IBM", url: "#" },
  { title: "JAVA Certification", issuer: "PW Skills", url: "#" },
  { title: "AI Internship Certificate", issuer: "CodeTech",  url: "#" },
  
];
