"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Twitter,
  Zap,
  Mail,
} from "lucide-react";
import dynamic from "next/dynamic";

const FloatingDiagram = dynamic(() => import("./animations/FloatingDiagram"), { ssr: false });

const roles = [
  "React Specialist",
  "Android Developer",
  "Backend Developer",
  "MERN Stack Developer",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#050505]/50"
    >
      <div className="px-8 md:px-20 w-full pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >


            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter"
              style={{ fontFamily: 'monospace' }}
            >
              <span className="block text-3xl md:text-5xl font-bold font-sans tracking-normal mb-2 text-gray-200">Hi, I'm</span>
              <motion.span
                className="text-[#06b6d4]"
                animate={{
                  opacity: [1, 0.9, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                SOUMYA PANDA
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold mb-8 text-[#06b6d4] h-10 flex items-center justify-center lg:justify-start"
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block ml-1 w-[3px] h-8 bg-[#06b6d4]"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-400 max-w-xl mb-10 mx-auto lg:mx-0 leading-relaxed"
            >
              Full-Stack MERN & Android Developer building scalable,
              high-performance web and mobile applications with modern UI, clean
              architecture, and exceptional user experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-md bg-[#06b6d4] text-white font-semibold flex items-center gap-2 shadow-sm hover:bg-[#0891b2] transition-colors"
              >
                <Zap size={18} />
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-md border border-white/20 text-gray-300 bg-[#0f0f11] hover:bg-white/5 font-semibold flex items-center gap-2 shadow-sm transition-colors"
              >
                <Mail size={18} />
                Contact Me
              </motion.a>
            </motion.div>

            <div className="flex gap-5 justify-center lg:justify-start text-gray-400">
              <a
                href="https://github.com/RuthlessG-CYBER"
                className="hover:text-[#06b6d4] transition-colors"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-[#06b6d4] transition-colors"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-[#06b6d4] transition-colors"
              >
                <Twitter size={22} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 hidden lg:flex justify-end items-center relative"
          >
            <FloatingDiagram />
          </motion.div>
        </div>

        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <ArrowDown className="text-gray-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
