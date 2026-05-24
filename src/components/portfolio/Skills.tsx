import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";
import { SKILLS } from "./data";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title={<>Tools I <span className="text-gradient">build with</span></>}
        description="A snapshot of the technologies I use to ship modern, scalable web apps."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(SKILLS).map(([cat, items], gi) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: gi * 0.07 }}
            className="rounded-2xl glass p-6 glow-hover"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">{cat}</h3>
              <span className="font-mono text-xs text-muted-foreground">{items.length} skills</span>
            </div>
            <ul className="space-y-4">
              {items.map((s, i) => (
                <li key={s.name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span>{s.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-primary"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
