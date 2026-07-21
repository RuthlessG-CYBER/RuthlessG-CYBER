"use client";

import { motion } from "framer-motion";
import {
  Database,
  Smartphone,
  Globe,
  Server,
} from "lucide-react";

export default function About() {
  const techStacks = [
    {
      title: "Frontend Development",
      description: "Building modern, responsive, and interactive user interfaces.",
      icon: Globe,
      tech: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    },
    {
      title: "Backend Development",
      description: "Creating secure, scalable APIs and backend systems.",
      icon: Server,
      tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    },
    {
      title: "Android Development",
      description: "Developing native Android apps with modern architecture.",
      icon: Smartphone,
      tech: ["Kotlin", "Jetpack Compose", "React-Native", "MVVM", "Firebase"],
    },
    {
      title: "Database & Systems",
      description: "Efficient data handling and system design.",
      icon: Database,
      tech: ["MongoDB", "MySQL", "Redis", "REST APIs"],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white/50" id="about">
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
                About
              </h2>
            </div>
            
            <div className="flex-1 md:text-right">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Who is Soumya Panda?
              </h3>
              <p className="text-gray-600 mt-4 leading-relaxed max-w-xl md:ml-auto">
                I'm a Full-Stack MERN and Android Developer passionate about building scalable, high-performance applications.
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-10"
            >
              <div className="text-gray-600 leading-relaxed text-lg space-y-6">
                <p>
                  I work across the entire development stack, from designing responsive frontend interfaces to developing secure backend APIs and native Android apps.
                </p>
                <p>
                  My focus is on performance, scalability, and writing clean, maintainable code to craft exceptional user experiences that solve real-world problems.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Years Experience", value: "2+" },
                  { label: "Projects Built", value: "10+" },
                  { label: "Months Work Exp.", value: "4" },
                  { label: "Native Apps", value: "Android" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-cyan-200 transition-colors duration-300">
                    <h3 className="text-[#06b6d4] text-3xl font-black mb-1">{stat.value}</h3>
                    <p className="text-gray-500 text-sm font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {techStacks.map((stack, index) => {
                const Icon = stack.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-cyan-200 transition-colors duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center mb-5">
                      <Icon className="text-gray-500" size={26} />
                    </div>
                    
                    <h3 className="text-gray-900 text-lg font-bold mb-2">
                      {stack.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                      {stack.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {stack.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-bold px-2.5 py-1 bg-gray-50 text-gray-600 border border-gray-100 rounded-md uppercase tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}