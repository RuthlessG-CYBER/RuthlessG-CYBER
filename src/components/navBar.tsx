"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="px-8 md:px-20 w-full">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* SP Logo Icon */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-gradient-to-br from-[#0a0a0a] to-gray-900 shadow-[0_0_15px_rgba(6,182,212,0.2)] overflow-hidden group">
              <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors duration-300"></div>
              <span className="text-white font-bold">
                SP
              </span>
            </div>
            {/* Welcome Text */}
            <span className="text-xl font-bold text-white tracking-wide">
              Welcome
            </span>
          </div>

          {/* Right Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <li key={item.name}>
                <motion.a
                  href={item.href}
                  whileHover={{ y: -1 }}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </motion.a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;