"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";


interface ExperienceItemProps {
  exp: {
    role: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
  };
  index: number;
}
export default function Experience() {

  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Agumentik Software Pvt. Ltd.",
      period: "2025 — 2026",
      description:
        "Worked on full-stack web applications using React, React Native, Node.js, and MongoDB. Built scalable backend APIs, integrated frontend interfaces, and followed modern development practices.",
      skills: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    },
    {
      role: "Android Developer",
      company: "Personal Projects",
      period: "2023 — Present",
      description:
        "Developed modern Android applications using Kotlin and Jetpack Compose. Implemented clean architecture, backend integration, and production-ready features.",
      skills: ["Kotlin", "Jetpack Compose", "Firebase", "REST API"],
    },
  ];


function ExperienceItem({ exp, index }: ExperienceItemProps) {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative pl-10 border-l border-white/10"
      >

        <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/30" />

        <div className="mb-10">

          <div className="flex items-center gap-3 text-white/60 text-sm mb-2">
            <Calendar size={16} />
            {exp.period}
          </div>

          <h3 className="text-white text-xl font-semibold">
            {exp.role}
          </h3>

          <div className="flex items-center gap-2 text-blue-400 text-sm mt-1">
            <Briefcase size={16} />
            {exp.company}
          </div>

          <p className="text-white/60 mt-3 max-w-xl">
            {exp.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {exp.skills.map((skill, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded text-white/60"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>

      </motion.div>
    );
  }


  return (
    <section id="experience" className="py-28">

      <div className="mx-auto px-10 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-16 items-start">


          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >

            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
              Experience
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">

              Professional{" "}

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400">
                Experience
              </span>

            </h2>

            <p className="text-white/60 mt-4 max-w-md">
              My journey building scalable applications, working with modern technologies, and solving real-world problems.
            </p>

          </motion.div>


          <div>

            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                exp={exp}
                index={index}
              />
            ))}

          </div>


        </div>

      </div>

    </section>
  );
}