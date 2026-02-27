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
    <section className="py-24 relative overflow-hidden" id="about">

      <div className="mx-auto px-10 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-sm font-semibold text-blue-400 mb-2 uppercase">
              About
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get to Know Me
            </h2>

            <p className="text-white/60 mb-6 leading-relaxed">
              I'm a Full-Stack MERN and Android Developer passionate about building scalable, high-performance applications. I specialize in creating modern web and mobile applications with clean architecture, efficient backend systems, and exceptional user experiences.
            </p>

            <p className="text-white/60 mb-6 leading-relaxed">
              I work across the entire development stack, from designing responsive frontend interfaces to developing secure backend APIs and native Android apps. I focus on performance, scalability, and writing clean, maintainable code.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">

              <div>
                <h3 className="text-blue-400 text-2xl font-bold">2+</h3>
                <p className="text-white/60 text-sm">Years Experience</p>
              </div>

              <div>
                <h3 className="text-blue-400 text-2xl font-bold">10+</h3>
                <p className="text-white/60 text-sm">Projects Built</p>
              </div>

              <div>
                <h3 className="text-blue-400 text-2xl font-bold">4</h3>
                <p className="text-white/60 text-sm">Months of Work Experience</p>
              </div>

              <div>
                <h3 className="text-blue-400 text-2xl font-bold">Android</h3>
                <p className="text-white/60 text-sm">Native Apps</p>
              </div>

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
                  whileHover={{ y: -8 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300"
                >

                  <Icon className="text-blue-400 mb-4" size={28} />

                  <h3 className="text-white font-semibold mb-2">
                    {stack.title}
                  </h3>

                  <p className="text-white/50 text-sm mb-4">
                    {stack.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {stack.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full"
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

    </section>
  );
}