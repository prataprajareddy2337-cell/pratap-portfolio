"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const ME = {
  name: "Pratap Raja Reddy Chirra",
  tagline: "Data Analyst • Data Engineer",
  blurb: "I build data pipelines and analytics on Python + AWS. Love clean systems, simple UIs, and real impact.",
  email: "prataprajareddy2337@gmail.com",
  location: "San Antonio, TX, USA",
  socials: {
    github: "https://github.com/prataprajareddy2337-cell",
    linkedin: "https://www.linkedin.com/in/prataprajareddychirra/",
  },
  skills: ["Python","SQL","AWS (S3, RDS, Lambda)","Airflow","Apache Spark","Power BI","Pandas / NumPy"],
};

const PROJECTS = [
  {
    title: "COVID-19 Data Pipeline",
    blurb: "End-to-end ETL: ingestion → cleaning → aggregation → Power BI dashboards.",
    stack: ["Python","AWS S3/RDS","SQL","Power BI"],
    code: "https://github.com/prataprajareddy2337-cell/covid-data-pipeline",
  },
  {
    title: "Inventory Classification & Forecast Optimization",
    blurb: "ABC analysis on 68k+ SKUs; −22% aging, +18% stocking efficiency; demand forecasting.",
    stack: ["Python","SQL","AWS"],
    code: "#",
  },
  {
    title: "Cash Flow & Revenue Pipeline Optimization",
    blurb: "Automated batches with retries/alerts; ~70% faster SQL; reports 12h → <2h.",
    stack: ["Python","Airflow"],
    code: "#",
  },
];

export default function Page() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b">
        <div className="container h-14 flex items-center justify-between">
          <a href="#home" className="no-underline font-semibold">Pratap Reddy — Data Portfolio</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="section">
        <div className="container">
          <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-neutral-500">
            {ME.location}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
            className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
            {ME.name}
          </motion.h1>
          <p className="mt-4 text-lg text-neutral-700">{ME.tagline}</p>
          <p className="mt-3 max-w-2xl text-neutral-700">{ME.blurb}</p>

          <div className="mt-6 flex items-center gap-4">
            <a className="no-underline" href={`mailto:${ME.email}`}><span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> Email</span></a>
            <a className="no-underline" href={ME.socials.linkedin} target="_blank"><span className="inline-flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</span></a>
            <a className="no-underline" href={ME.socials.github} target="_blank"><span className="inline-flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</span></a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {ME.skills.map((s) => (<span key={s} className="badge">{s}</span>))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="h2">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <a key={p.title} href={p.code} target="_blank" className="card no-underline">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-neutral-700">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (<span key={t} className="badge">{t}</span>))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="h2">About</h2>
          <p className="text-neutral-700 max-w-3xl">
            I design & ship data systems end-to-end: ingestion, modeling, and analytics.
            Recently exploring better orchestration and cost-aware pipelines on AWS with Airflow.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="h2">Contact</h2>
        <p className="text-neutral-700">Email me at <a href={`mailto:${ME.email}`}>{ME.email}</a>.</p>
        </div>
      </section>

      <footer className="border-t">
        <div className="container h-20 flex items-center justify-between text-sm text-neutral-500">
          <span>© {new Date().getFullYear()} {ME.name}</span>
          <span>Built with Next.js & Tailwind</span>
        </div>
      </footer>
    </>
  );
}
