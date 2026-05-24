import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Rocket, Target } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const cards = [
  {
    icon: Briefcase,
    title: "Professional Summary",
    body: "Computer Science undergraduate specializing in Machine Learning with strong skills in Java, Data Structures, and Software Development principles. Experienced in building responsive applications, REST APIs, and user-centric solutions through projects and internships. Solid understanding of OOP, DBMS, Operating Systems, and problem-solving. Passionate about developing scalable applications that solve real-world problems.",
  },
  {
    icon: Target,
    title: "Career Goals",
    body: "Joining a product team where craft, performance and design culture matter — shipping software that genuinely improves people's day.",
  },
  {
    icon: Rocket,
    title: "Skills Overview",
    body: "React, Node.js, Tailwind, PostgreSQL, MongoDB, AWS, . Equally comfortable in design tools, infra and DX work.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    body: "B.Tech in Computer Science (2023–2027). Coursework in algorithms, distributed systems, databases & web engineering. ",
  },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title={<>A bit <span className="text-gradient">about me</span></>}
        description="Engineer at heart, designer in spirit. I care deeply about the details that make products feel alive."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 glow-hover"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-3xl transition group-hover:opacity-40" />
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
              <c.icon size={20} />
            </div>
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
