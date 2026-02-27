"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { FaAndroid } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Stylish E-Commerce App",
      description:
        "Modern ecommerce mobile app with secure payments, order tracking, and admin dashboard.",
      image:
        "https://i.pinimg.com/736x/cc/28/bb/cc28bb67651e3778f4ba14e614e6ebf1.jpg",
      githubUrl:
        "https://github.com/RuthlessG-CYBER/Stylish_E-Commerce_App.git",
      tags: ["Kotlin", "Compose", "Node.js", "MongoDB"],
    },
    {
      title: "RentHub Real Estate",
      description:
        "Full MERN real estate platform with authentication and production deployment.",
      image:
        "https://i.pinimg.com/736x/43/33/25/43332535dc660168f2b3046534b6e474.jpg",
      liveUrl: "https://rent-hub-frontend-five.vercel.app/",
      githubUrl: "https://github.com/RuthlessG-CYBER/RentHub_Frontend.git",
      tags: ["React", "TypeScript", "MongoDB"],
    },
    {
      title: "SmartQueue Healthcare",
      description:
        "Healthcare booking system powered by Redis and scalable backend architecture.",
      image:
        "https://i.pinimg.com/736x/33/4d/41/334d41975d259a4efc799b35dbeaf671.jpg",
      githubUrl: "https://github.com/RuthlessG-CYBER/Smart_Queue_App.git",
      appLink:
        "https://drive.google.com/file/d/1a9cFNr-1p-N-GFy06sPsFZo0ycaqjFAr/view",
      tags: ["React Native", "Node.js", "Redis"],
    },
    {
      title: "Product Management System",
      description:
        "Enterprise admin dashboard with analytics and role-based access.",
      image:
        "https://i.pinimg.com/736x/5d/18/b1/5d18b13503f327b89f31817bc8179e38.jpg",
      tags: ["React", "Tailwind", "MongoDB"],
    },
  ];

  type ProjectType = {
    title: string;
    description: string;
    image: string;
    liveUrl?: string;
    githubUrl?: string;
    appLink?: string;
    tags: string[];
  };

  function ProjectCard({
    project,
    index,
  }: {
    project: ProjectType;
    index: number;
  }) {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="group border border-white/10 rounded-xl overflow-hidden bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300"
      >
        <div className="relative h-[200px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition duration-300">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1"
              >
                <ExternalLink size={14} />
                Live
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-full text-xs border border-white/20 flex items-center gap-1"
              >
                <Github size={14} />
                Code
              </a>
            )}

            {project.appLink && (
              <a
                href={project.appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white px-4 py-2 rounded-full text-xs flex items-center gap-1"
              >
                <FaAndroid size={14} />
                APK
              </a>
            )}
          </div>
        </div>

        <div className="p-5">
          <div className="flex justify-between items-start">
            <h3 className="text-white font-semibold">{project.title}</h3>

            <ArrowUpRight size={18} className="text-white/40" />
          </div>

          <p className="text-white/50 text-sm mt-2">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <section id="projects" className="py-28">
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
              Projects
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
              Real-World & Best{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400">
                Projects
              </span>
            </h2>

            <p className="text-white/60 mt-4 max-w-md">
              Production-ready applications built using modern technologies,
              scalable architecture, and real-world business logic.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
