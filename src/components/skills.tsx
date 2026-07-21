"use client";

import { motion } from "framer-motion";
import LogoLoop from "./animations/LogoLoop";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiKotlin,
  SiAndroid,
  SiGit,
  SiGithub,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiExpress />, title: "Express.js" },
  { node: <SiMongodb />, title: "MongoDB" },
  { node: <SiFirebase />, title: "Firebase" },
  { node: <SiKotlin />, title: "Kotlin" },
  { node: <SiAndroid />, title: "Android" },
  { node: <SiGit />, title: "Git" },
  { node: <SiGithub />, title: "GitHub" },
];

export default function Skills() {
  const logoItems = techLogos.map((logo) => ({
    node: (
      <div className="text-gray-400 text-5xl hover:text-[#06b6d4] transition-all duration-300">
        {logo.node}
      </div>
    ),
    title: logo.title,
  }));

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-gray-50/50">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.2]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="px-8 md:px-20 w-full flex flex-col gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 w-full"
        >
          <div className="flex-1">
            <h2 className="text-5xl md:text-7xl font-black text-[#06b6d4] tracking-widest uppercase">
              Skills
            </h2>
          </div>
          
          <div className="flex-1 md:text-right">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Technical Proficiency
            </h3>
            <p className="text-gray-600 mt-4 leading-relaxed max-w-xl md:ml-auto">
              Modern tools and technologies I use to build scalable,
              high-performance applications.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          <div className="py-4">
            <LogoLoop
              logos={logoItems}
              speed={80}
              direction="left"
              logoHeight={48}
              gap={80}
              hoverSpeed={25}
              scaleOnHover
            />
          </div>

          <div className="py-4 mt-4">
            <LogoLoop
              logos={logoItems}
              speed={80}
              direction="right"
              logoHeight={48}
              gap={80}
              hoverSpeed={25}
              scaleOnHover
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
