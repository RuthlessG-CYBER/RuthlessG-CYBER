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
    // const isFirst = index === 0;
    
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative bg-[#0f0f11] border border-white/10 rounded-2xl p-8 shadow-sm hover:border-cyan-200 transition-colors duration-300 overflow-hidden"
      >
        {/* Active Indicator for the most recent role */}
        {/* {isFirst && (
          <div className="absolute top-0 right-0 px-4 py-1 bg-cyan-100 text-cyan-600 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl border-b border-l border-cyan-200">
            Present
          </div>
        )} */}

        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
          {/* Company Logo Badge */}
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <span className="text-2xl font-black text-gray-400">
              {exp.company.charAt(0)}
            </span>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="text-white text-2xl font-bold">
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 text-gray-400 text-sm font-semibold bg-white/5 px-3 py-1 rounded-full border border-white/5">
                <Calendar size={14} className="text-gray-400" />
                {exp.period}
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#06b6d4] text-sm font-bold tracking-wide uppercase mb-4">
              <Briefcase size={14} />
              {exp.company}
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-[11px] px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-gray-400 font-bold tracking-wide uppercase"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <section id="experience" className="py-28 bg-white/5/30">
      <div className="px-8 md:px-20 w-full">
        <div className="flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 w-full"
          >
            <div className="flex-1">
              <h2 className="text-5xl md:text-7xl font-black text-[#06b6d4] tracking-widest uppercase">
                Experience
              </h2>
            </div>
            
            <div className="flex-1 md:text-right">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Professional Experience
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed max-w-xl md:ml-auto">
                My journey building scalable applications, working with modern technologies, and solving real-world problems.
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
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