import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { TIMELINE } from "./data";

const iconFor = (type: string) =>
  type === "Internship" ? Briefcase : type === "Education" ? GraduationCap : type === "Achievement" ? Award : Sparkles;

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Journey"
        title={<>Experience & <span className="text-gradient">milestones</span></>}
        description="A timeline of internships, achievements and education."
      />

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:left-1/2" />

        <div className="space-y-10">
          {TIMELINE.map((item, i) => {
            const Icon = iconFor(item.type);
            const left = i % 2 === 0;
            return (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative grid md:grid-cols-2 md:gap-12 ${left ? "" : "md:[&>*:first-child]:col-start-2"}`}
              >
                <div className="absolute left-4 top-4 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-primary text-primary-foreground glow md:left-1/2">
                  <Icon size={14} />
                </div>

                <div className={`ml-12 md:ml-0 ${left ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                  <div className="rounded-2xl glass p-5 glow-hover">
                    <div className="flex items-center gap-2 text-xs font-mono text-primary">
                      <span className="rounded-full bg-primary/15 px-2 py-0.5">{item.type}</span>
                      <span className="text-muted-foreground">{item.period}</span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold">{item.role}</h3>
                    <p className="text-sm text-muted-foreground">{item.org}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
