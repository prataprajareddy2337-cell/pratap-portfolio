"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";

// Vanta is in /components/Vanta.tsx (next to /app)
const VantaBackground = dynamic(() => import("../components/Vanta"), { ssr: false });

const ME = {
  name: "Pratap Raja Reddy Chirra",
  tagline: "Data-driven solutions.",
  email: "prataprajareddy2337@gmail.com",
  socials: {
    github: "https://github.com/prataprajareddy2337-cell",
    linkedin: "https://www.linkedin.com/in/prataprajareddychirra/",
  },
};

type Exp = {
  role: string;
  company: string;
  time: string;
  location: string;
  type: string;
  bullets?: string[];
};

const EXPERIENCE: Exp[] = [
  {
    role: "Revenue Analyst 2",
    company: "Florida Department of Revenue",
    time: "Sep 2025 – Present",
    location: "Tallahassee, FL",
    type: "Full-time · On-site",
    bullets: ["Analyze revenue trends and build reporting pipelines for insights."],
  },
  {
    role: "Analytics Engineer",
    company: "Community Dreams Foundation",
    time: "Jul 2025 – Sep 2025",
    location: "United States",
    type: "Part-time · Remote",
    bullets: ["Resolved >95% user issues on first contact via troubleshooting & support."],
  },
  {
    role: "IT Data Analyst",
    company: "Webster University",
    time: "May 2024 – May 2025",
    location: "San Antonio, TX",
    type: "Part-time · On-site",
    bullets: ["Enabled data-driven decisions using Python/Excel/SQL."],
  },
  {
    role: "Analytics Engineer",
    company: "Myntra",
    time: "May 2022 – Jan 2024",
    location: "Bengaluru, India",
    type: "Full-time · On-site",
    bullets: ["Built analytics models & dashboards with product/data teams."],
  },
  {
    role: "Data Analyst",
    company: "dhiOmics Analytics Solutions",
    time: "Feb 2022 – May 2022",
    location: "Bengaluru, India",
    type: "Full-time · On-site",
    bullets: ["Developed data pipelines and business reports."],
  },
];

type Edu = { school: string; degree: string; time: string; notes?: string[] };
const EDUCATION: Edu[] = [
  {
    school: "Webster University",
    degree: "Master’s, Information Technology",
    time: "Jan 2024 – May 2025",
    notes: ["Focus: Cloud & Data Engineering; AWS, data pipelines, regression models."],
  },
  { school: "Great Learning", degree: "Postgraduate Degree, Data Science", time: "Jun 2020 – Jan 2022" },
  { school: "NIT Andhra Pradesh", degree: "B.Tech, Biotechnology (GPA 7.08)", time: "2016 – 2020" },
];

const SKILL_COLORS = [
  "from-pink-500/25 to-fuchsia-500/20",
  "from-emerald-400/25 to-teal-500/20",
  "from-sky-400/25 to-indigo-500/20",
  "from-amber-400/25 to-rose-500/20",
  "from-cyan-400/25 to-purple-500/20",
  "from-lime-400/25 to-emerald-500/20",
] as const;

const SKILLS = [
  "Python", "R", "SQL", "PostgreSQL", "NoSQL", "KQL", "PySpark",
  "Hadoop", "Airflow", "ETL Pipelines", "Databricks", "Microsoft Fabric",
  "Snowflake", "AWS", "S3", "Redshift", "Lambda", "Glue",
  "Power BI", "Tableau", "Matplotlib", "Pandas", "NumPy", "Docker", "Git", "GitHub", "Linux",
] as const;

/** Dark/Light toggle with memory */
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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{children}</h2>
      <div className="mt-3 section-underline" />
    </div>
  );
}

export default function Page() {
  return (
    <>
      {/* HERO with 3D Vanta background */}
      <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
        <VantaBackground />
        {/* gentle color wash overlay */}
        <div className="absolute inset-0 -z-0 pointer-events-none bg-gradient-to-br from-fuchsia-500/10 via-sky-400/10 to-amber-400/10" />

        <div className="relative container pt-28 md:pt-36 pb-24 text-white">
          <div className="flex items-start justify-between">
            <a href="#home" className="font-extrabold text-lg no-underline">pratap-portfolio</a>
            <ThemeToggle />
          </div>

          {/* avatar with gradient ring */}
          <div className="mt-8 flex items-center gap-4">
            <div className="p-1 rounded-full bg-gradient-to-r from-fuchsia-500 via-sky-400 to-emerald-400 glow">
              <Image
                src="/profile.jpg" // change to "/profile.png" if needed
                alt="Pratap Raja Reddy Chirra"
                width={120}
                height={120}
                priority
                className="rounded-full object-cover"
              />
            </div>
          </div>

          {/* rainbow name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 text-5xl md:text-7xl font-black leading-[0.95] tracking-tight gradient-text"
          >
            Hi, I&apos;m {ME.name}
          </motion.h1>

          <p className="mt-5 text-xl md:text-2xl text-neutral-100">{ME.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${ME.email}`}
              className="btn-grad glow rounded-full text-neutral-900 dark:text-white px-5 py-3 font-semibold no-underline"
            >
              Get In Touch
            </a>
            <a
              href={ME.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 px-5 py-3 font-semibold no-underline hover:bg-white/10 pill"
            >
              LinkedIn
            </a>
            <a
              href={ME.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 px-5 py-3 font-semibold no-underline hover:bg-white/10 pill"
            >
              GitHub
            </a>
          </div>

          {/* scroll hint */}
          <div className="mt-16 flex items-center gap-2 text-sm text-neutral-200">
            <span className="inline-block h-6 w-3 rounded-full border border-neutral-200/70 relative">
              <span className="absolute left-1/2 top-1.5 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-neutral-200 animate-bounce"></span>
            </span>
            <span>Scroll Down</span>
          </div>
        </div>

        {/* bottom rounded nav */}
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-white/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 backdrop-blur rounded-full px-3 py-2 shadow-lg">
          <ul className="flex gap-2 text-sm">
            {[
              ["Home", "#home"], ["About", "#about"], ["Experience", "#experience"],
              ["Projects", "#projects"], ["Honors", "#honors"], ["Skills", "#skills"],
              ["Education", "#education"], ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="px-3 py-2 rounded-full no-underline hover:bg-black/5 dark:hover:bg-white/10 pill"
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
        <SectionTitle>About</SectionTitle>
        <p className="mt-4 max-w-3xl text-neutral-700 dark:text-neutral-300">
          I build data pipelines and analytics on Python + AWS. I like clean systems,
          simple UIs, and real impact.
        </p>

        {/* colorful banner */}
        <div className="mt-6 relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow">
          <Image src="/og.png" alt="Header banner" fill className="object-cover" />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="container py-20">
        <SectionTitle>Experience</SectionTitle>
        <div className="mt-6 space-y-5">
          {EXPERIENCE.map((e) => (
            <div
              key={`${e.company}-${e.role}`}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-gradient-to-br from-white/60 to-white/30 dark:from-neutral-900/50 dark:to-neutral-900/30 backdrop-blur"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{e.role}</h3>
                  <p className="text-neutral-600 dark:text-neutral-300">{e.company}</p>
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400 text-right">
                  <div>{e.time}</div>
                  <div>{e.location} · {e.type}</div>
                </div>
              </div>
              {e.bullets?.length ? (
                <ul className="mt-3 list-disc pl-5 text-neutral-700 dark:text-neutral-300 space-y-1">
                  {e.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="container py-20">
        <SectionTitle>Projects</SectionTitle>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            {
              title: "COVID-19 Data Pipeline",
              blurb: "End-to-end ETL: ingestion + cleaning + aggregation + Power BI dashboards.",
              link: "https://github.com/prataprajareddy2337-cell/covid-data-pipeline",
              tags: ["Python", "AWS", "SQL", "Power BI"],
            },
            {
              title: "Inventory Classification & Forecast Optimization",
              blurb: "ABC analysis on 68k+ SKUs; -22% aging, +18% stocking efficiency; demand forecasting.",
              link: "#",
              tags: ["Python", "SQL", "AWS"],
            },
          ].map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 no-underline hover:shadow-sm bg-gradient-to-br from-white/60 to-white/30 dark:from-neutral-900/50 dark:to-neutral-900/30 backdrop-blur"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t, i) => (
                  <span
                    key={t}
                    className={`rounded-full border px-3 py-1 text-xs border-neutral-300 dark:border-neutral-700 bg-gradient-to-r ${
                      SKILL_COLORS[i % SKILL_COLORS.length]
                    } text-neutral-900/90 dark:text-white/90`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* HONORS (placeholder) */}
      <section id="honors" className="container py-20">
        <SectionTitle>Honors</SectionTitle>
        <p className="mt-4 text-neutral-600 dark:text-neutral-300">Add awards here…</p>
      </section>

      {/* SKILLS — colorful tiles */}
      <section id="skills" className="container py-20">
        <SectionTitle>A comprehensive list of my technical skills and expertise</SectionTitle>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          {SKILLS.map((s, i) => (
            <div
              key={s}
              className={`h-28 rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 bg-gradient-to-br ${
                SKILL_COLORS[i % SKILL_COLORS.length]
              } backdrop-blur flex items-center justify-center text-base font-semibold text-neutral-900 dark:text-white shadow-sm`}
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="container py-20">
        <SectionTitle>Education</SectionTitle>
        <div className="mt-6 space-y-5">
          {EDUCATION.map((ed) => (
            <div
              key={ed.school}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-gradient-to-br from-white/60 to-white/30 dark:from-neutral-900/50 dark:to-neutral-900/30 backdrop-blur"
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div>
                  <h3 className="text-xl font-semibold">{ed.school}</h3>
                  <p className="text-neutral-600 dark:text-neutral-300">{ed.degree}</p>
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">{ed.time}</div>
              </div>
              {ed.notes?.length ? (
                <ul className="mt-3 list-disc pl-5 text-neutral-700 dark:text-neutral-300 space-y-1">
                  {ed.notes.map((n) => <li key={n}>{n}</li>)}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container py-20">
        <SectionTitle>Contact</SectionTitle>
        <div className="mt-4 flex items-center gap-4">
          <a href={`mailto:${ME.email}`} className="inline-flex items-center gap-2 no-underline">
            <Mail className="h-5 w-5" /> {ME.email}
          </a>
          <a href={ME.socials.linkedin} className="inline-flex items-center gap-2 no-underline" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
          <a href={ME.socials.github} className="inline-flex items-center gap-2 no-underline" target="_blank" rel="noopener noreferrer">
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
