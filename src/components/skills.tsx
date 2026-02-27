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
      <div className="text-white text-5xl opacity-80 hover:opacity-100 hover:text-blue-400 transition-all duration-300">
        {logo.node}
      </div>
    ),
    title: logo.title,
  }));

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto px-10 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-2">
              Skills
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
              Technologies I{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400">
                Work With
              </span>
            </h2>

            <p className="text-white/60 max-w-xl mt-4">
              Modern tools and technologies I use to build scalable,
              high-performance applications.
            </p>
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
      </div>
    </section>
  );
}
