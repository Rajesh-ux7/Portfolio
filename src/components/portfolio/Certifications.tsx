import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { CERTIFICATIONS } from "./data";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Credentials"
        title={<>Certifications & <span className="text-gradient">badges</span></>}
        description="Continuous learning is part of the job — here are a few credentials I've earned."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative block overflow-hidden rounded-2xl glass p-5 glow-hover"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-primary opacity-60" />
            <div className="flex items-start justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <BadgeCheck size={20} />
              </div>
              <span className="font-mono text-xs text-muted-foreground">{c.year}</span>
            </div>
            <h3 className="mt-4 font-display text-base font-semibold leading-snug">{c.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary opacity-0 transition group-hover:opacity-100">
              Verify <ExternalLink size={12} />
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
