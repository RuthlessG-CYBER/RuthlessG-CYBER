"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ModeToggle from "./mode-toggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-lg border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-20">
        <div className="flex items-center justify-between h-12">

          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <motion.a
                  href={item.href}
                  whileHover={{ y: -1 }}
                  className="text-sm font-medium text-white/80 hover:text-blue-400 transition-colors duration-200"
                >
                  {item.name}
                </motion.a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">

            <ModeToggle />

            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/80 font-medium">
                Available for work
              </span>
            </div>

          </div>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;