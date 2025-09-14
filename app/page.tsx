"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";

/** IMPORTANT:
 * If your Vanta.tsx is at:  /components/Vanta.tsx  (root-level next to /app)
 * keep this line as-is.
 * If you put it at:        /app/components/Vanta.tsx
 * change ../components/Vanta  →  ./components/Vanta
*/
const VantaBackground = dynamic(() => import("../components/Vanta"), { ssr: false });

const ME = {
  name: "Pratap Raja Reddy Chirra",
  tagline: "Data-driven solutions.",
  email: "prataprajareddy2337@gmail.com",
  socials: {
    github: "https://github.com/prataprajareddy2337-cell",
    linkedin: "https://www.linkedin.com/in/prataprajareddychirra/",
  },
  skills: ["Python","SQL","AWS","Airflow","Spark","Power BI","Pandas","NumPy"],
};

/** Dark/Light toggle (remembers in localStorage) */
function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const preferDark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(preferDark);
    document.documentElement.classList.toggle("dark", preferDark);
  }, []);

  if (!mounted) return null;

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white/70 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-800 backdrop-blur"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {isDark ? "Light" : "Dark"}
    </button>
  );
}

export default function Page() {
  return (
    <>
      {/* HERO with 3D Vanta background (client-only) */}
      <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
        <VantaBackground />
        {/* soft dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40 -z-0 pointer-events-none" />

        {/* content on top */}
        <div className="relative container pt-28 md:pt-36 pb-24 text-white">
          <div className="flex items-start justify-between">
            <a href="#home" className="font-extrabold text-lg no-underline">pratap-portfolio</a>
            <ThemeToggle />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10 text-5xl md:text-7xl font-black leading-[0.95] tracking-tight"
          >
            <span className="block">Hi, I&apos;m Pratap</span>
            <span className="block">Reddy Chirra</span>
          </motion.h1>

          <p className="mt-6 text-xl md:text-2xl text-neutral-200">{ME.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${ME.email}`}
              className="rounded-full bg-white/90 text-neutral-900 px-5 py-3 font-semibold no-underline hover:bg-white"
            >
              Get In Touch
            </a>
            <a
              href={ME.socials.linkedin}
              target="_blank"
              className="rounded-full border border-white/40 px-5 py-3 font-semibold no-underline hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              href={ME.socials.github}
              target="_blank"
              className="rounded-full border border-white/40 px-5 py-3 font-semibold no-underline hover:bg-white/10"
            >
              GitHub
            </a>
          </div>

          {/* little “scroll down” hint */}
          <div className="mt-16 flex items-center gap-2 text-sm text-neutral-300">
            <span className="inline-block h-6 w-3 rounded-full border border-neutral-300/70 relative">
              <span className="absolute left-1/2 top-1.5 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-neutral-300 animate-bounce"></span>
            </span>
            <span>Scroll Down</span>
          </div>
        </div>

        {/* bottom rounded nav */}
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-white/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 backdrop-blur rounded-full px-3 py-2 shadow-lg">
          <ul className="flex gap-2 text-sm">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Experience", "#experience"],
              ["Projects", "#projects"],
              ["Honors", "#honors"],
              ["Skills", "#skills"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="px-3 py-2 rounded-full no-underline hover:bg-black/5 dark:hover:bg-white/10"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* ABOUT */}
      <section id="about" className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About</h2>
        <p className="max-w-3xl text-neutral-700 dark:text-neutral-300">
          I build data pipelines and analytics on Python + AWS. I like clean systems,
          simple UIs, and real impact.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h2>
        <p className="text-neutral-600 dark:text-neutral-300">Add your roles here…</p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "COVID-19 Data Pipeline",
              blurb:
                "End-to-end ETL: ingestion → cleaning → aggregation → Power BI dashboards.",
              link: "https://github.com/prataprajareddy2337-cell/covid-data-pipeline",
              tags: ["Python", "AWS", "SQL", "Power BI"],
            },
            {
              title: "Inventory Classification & Forecast Optimization",
              blurb:
                "ABC analysis on 68k+ SKUs; −22% aging, +18% stocking efficiency; demand forecasting.",
              link: "#",
              tags: ["Python", "SQL", "AWS"],
            },
          ].map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              className="block rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 no-underline hover:shadow-sm"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-3 py-1 text-xs border-neutral-300 dark:border-neutral-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* HONORS */}
      <section id="honors" className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Honors</h2>
        <p className="text-neutral-600 dark:text-neutral-300">Add awards here…</p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {ME.skills.map((s) => (
            <span
              key={s}
              className="rounded-full border px-3 py-1 text-xs border-neutral-300 dark:border-neutral-700"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Contact</h2>
        <div className="flex items-center gap-4">
          <a href={`mailto:${ME.email}`} className="inline-flex items-center gap-2 no-underline">
            <Mail className="h-5 w-5" /> {ME.email}
          </a>
          <a href={ME.socials.linkedin} className="inline-flex items-center gap-2 no-underline" target="_blank">
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
          <a href={ME.socials.github} className="inline-flex items-center gap-2 no-underline" target="_blank">
            <Github className="h-5 w-5" /> GitHub
          </a>
        </div>
      </section>

      <footer className="border-t">
        <div className="container h-20 flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
          <span>© {new Date().getFullYear()} {ME.name}</span>
          <span>Built with Next.js & Tailwind</span>
        </div>
      </footer>
    </>
  );
}
