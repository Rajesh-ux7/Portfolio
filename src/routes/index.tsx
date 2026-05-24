import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "M.RAJESH  — Front-End & Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of M.RAJESH — a Front-End & Full Stack Developer crafting fast, accessible, and beautifully animated web experiences with React, Node.js and modern tooling.",
      },
      { property: "og:title", content: "RAJESH — Front-End & Full Stack Developer" },
      {
        property: "og:description",
        content: "Modern portfolio showcasing projects, skills, experience and certifications.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "M.RAJESH",
          jobTitle: "Front-End & Full Stack Developer",
          url: "/",
          sameAs: ["https://github.com", "https://linkedin.com"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
