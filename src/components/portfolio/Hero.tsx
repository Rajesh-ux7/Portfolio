import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import profile from "@/assets/rajesh-profile.jpg";
import { TYPING_ROLES } from "./data";

function useTyping(words: readonly string[], speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), pause);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((p) => p + 1);
          }
        }
      },
      del ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTyping(TYPING_ROLES);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 -z-10 bg-mesh" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <Sparkles size={14} className="text-primary" />
            OPEN TO INTERNSHIPS & OPPORTUNITIES
          </span>

          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            Hi, I'm <span className="text-gradient">M.RAJESH</span>
          </h1>

          <p className="mt-4 font-mono text-lg text-muted-foreground md:text-xl">
            <span className="caret text-foreground">{typed}</span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
           I am a Passionate B.TECH Student Focused On Full-Stack Development,Building Responsive WEB APPLICATIONS And Creating Modern User Experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-hover"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/10"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium hover:border-primary/40 hover:text-primary"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
  {[
    { Icon: Github, href: "https://github.com/Rajesh-ux7", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/rajesh-muppidi-7b070a322/", label: "LinkedIn" },
    { Icon: Mail, href: "https://mailto:m.rajesh07d@gmail.com", label: "Email" },
  ].map(({ Icon, href, label }) => (
    <a
      key={label}
      aria-label={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="grid h-10 w-10 place-items-center rounded-xl glass transition hover:-translate-y-0.5 hover:text-primary"
    >
      <Icon size={18} />
    </a>
  ))}
</div>


<p className="mt-4 text-sm text-gray-300">
📧 m.rajesh07d@gmail.com
</p>


        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
          <div className="animate-float relative overflow-hidden rounded-[2rem] glass-strong p-2">
            <div className="overflow-hidden rounded-[1.6rem]">
              <img
                src={profile}
                alt="M.RAJESH  — Full Stack Developer"
                width={800}
                height={800}
                className="aspect-square w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-3 -left-3 rounded-2xl glass-strong p-3 text-xs shadow-card">
              <div className="font-mono text-primary">{"<dev />"}</div>
              <div className="text-muted-foreground">Student*Web Developer</div>
            </div>
            <div className="absolute -top-3 -right-3 rounded-2xl glass-strong p-3 text-xs shadow-card">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open to Internships</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
