"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { FaAndroid } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "LhoShop eCommerce App",
      description:
        "A full-scale eCommerce platform similar to Flipkart, featuring a modern shopping app and a complete admin management panel.",
      image:
        "/lhoshop.jpg",
      githubUrl:
        "https://github.com/RuthlessG-CYBER/LhoShop_App",
      adminGithubUrl:
        "https://github.com/RuthlessG-CYBER/LhoShop_E-commerce_AdminPanel_Website",
      appLink:
        "https://drive.google.com/file/d/1agAfTkSoYIgtSIxN1kDX44els9FyNnCd/view?usp=sharing",
      tags: ["React Native", "Node.js", "MongoDB", "Admin Panel"],
    },
    {
      title: "Artisan Haven",
      description:
        "An eco-friendly e-commerce store offering rustic healthy cakes, wholesome homemade cookies, and sustainable recycled products.",
      image:
        "/artisan-products.jpg",
      githubUrl:
        "https://github.com/RuthlessG-CYBER/artisan_haven",
      tags: ["TypeScript", "React", "Tailwind CSS"],
    },
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
    adminGithubUrl?: string;
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative flex flex-col xl:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-cyan-200 transition-colors duration-300 h-full"
      >
        <div className="relative w-full xl:w-2/5 h-[200px] xl:h-auto overflow-hidden border-b xl:border-b-0 xl:border-r border-gray-100 bg-gray-50 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        <div className="relative z-10 p-6 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-gray-900 font-bold text-xl line-clamp-1">{project.title}</h3>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 ml-2">
              <ArrowUpRight size={16} className="text-gray-400" />
            </div>
          </div>

          <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2 xl:line-clamp-3">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-[10px] px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-md text-gray-600 font-bold tracking-wide uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-gray-100 mt-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#06b6d4] text-white px-3 py-2 rounded-lg text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#0891b2] transition-colors whitespace-nowrap"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-sm hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                <Github size={14} />
                App Source
              </a>
            )}

            {project.adminGithubUrl && (
              <a
                href={project.adminGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-sm hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                <Github size={14} />
                Admin Panel
              </a>
            )}

            {project.appLink && (
              <a
                href={project.appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-sm hover:bg-green-700 transition-colors whitespace-nowrap"
              >
                <FaAndroid size={14} />
                Download
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <section id="projects" className="py-28 bg-white/50">
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
                Projects
              </h2>
            </div>
            
            <div className="flex-1 md:text-right">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Real-World & Best Projects
              </h3>
              <p className="text-gray-600 mt-4 leading-relaxed max-w-xl md:ml-auto">
                Production-ready applications built using modern technologies,
                scalable architecture, and real-world business logic.
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
