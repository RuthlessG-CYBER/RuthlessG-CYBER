"use client";

import CardSwap, { Card } from "./animations/CardSwap";
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white/50"
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
              className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 tracking-tighter"
              style={{ fontFamily: 'monospace' }}
            >
              <span className="block text-3xl md:text-5xl font-bold font-sans tracking-normal mb-2 text-gray-800">Hi, I'm</span>
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
              className="text-lg text-gray-600 max-w-xl mb-10 mx-auto lg:mx-0 leading-relaxed"
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
                className="px-6 py-3 rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 font-semibold flex items-center gap-2 shadow-sm transition-colors"
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

          <div className="flex-1 hidden lg:flex items-center justify-end relative">
            <div className="relative w-[440px] h-[380px] mr-12 lg:mr-32 xl:mr-48">
              <CardSwap
                width={600}
                height={350}
                cardDistance={70}
                verticalDistance={80}
                delay={4500}
                pauseOnHover={true}
              >
                <Card customClass="w-[440px] p-0 overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm outline-none ring-0">
                  <img
                    src="https://i.pinimg.com/736x/cc/28/bb/cc28bb67651e3778f4ba14e614e6ebf1.jpg"
                    className="w-full h-48 object-cover border-b border-gray-100"
                  />
                  <div className="p-5">
                    <h3 className="text-gray-900 font-semibold text-lg mb-2">
                      Stylish E-Commerce App
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      Full-featured ecommerce app with secure payments and admin
                      dashboard.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs px-2 py-1 bg-cyan-50 text-cyan-600 rounded border border-cyan-100">Kotlin</span>
                      <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded border border-blue-100">Node.js</span>
                      <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded border border-green-100">MongoDB</span>
                    </div>
                  </div>
                </Card>

                <Card customClass="w-[440px] p-0 overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm outline-none ring-0">
                  <img
                    src="https://i.pinimg.com/736x/43/33/25/43332535dc660168f2b3046534b6e474.jpg"
                    className="w-full h-48 object-cover border-b border-gray-100"
                  />
                  <div className="p-5">
                    <h3 className="text-gray-900 font-semibold text-lg mb-2">
                      RentHub Real Estate
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      Modern real estate platform with browsing and contact
                      system.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs px-2 py-1 bg-cyan-50 text-cyan-600 rounded border border-cyan-100">React</span>
                      <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded border border-blue-100">TypeScript</span>
                      <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded border border-green-100">MongoDB</span>
                    </div>
                  </div>
                </Card>

                <Card customClass="w-[440px] p-0 overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm outline-none ring-0">
                  <img
                    src="https://i.pinimg.com/736x/33/4d/41/334d41975d259a4efc799b35dbeaf671.jpg"
                    className="w-full h-48 object-cover border-b border-gray-100"
                  />
                  <div className="p-5">
                    <h3 className="text-gray-900 font-semibold text-lg mb-2">
                      SmartQueue Healthcare
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      Appointment booking app with real-time backend queue
                      system.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs px-2 py-1 bg-cyan-50 text-cyan-600 rounded border border-cyan-100">React Native</span>
                      <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded border border-green-100">Node.js</span>
                      <span className="text-xs px-2 py-1 bg-red-50 text-red-600 rounded border border-red-100">Redis</span>
                    </div>
                  </div>
                </Card>

                <Card customClass="w-[440px] p-0 overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm outline-none ring-0">
                  <img
                    src="https://i.pinimg.com/736x/5d/18/b1/5d18b13503f327b89f31817bc8179e38.jpg"
                    className="w-full h-48 object-cover border-b border-gray-100"
                  />
                  <div className="p-5">
                    <h3 className="text-gray-900 font-semibold text-lg mb-2">
                      Product Management System
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      Full MERN admin dashboard with analytics and order
                      management.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs px-2 py-1 bg-purple-50 text-purple-600 rounded border border-purple-100">MERN</span>
                      <span className="text-xs px-2 py-1 bg-cyan-50 text-cyan-600 rounded border border-cyan-100">Tailwind</span>
                      <span className="text-xs px-2 py-1 bg-yellow-50 text-yellow-600 rounded border border-yellow-100">JWT</span>
                    </div>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>

        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <ArrowDown className="text-gray-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
