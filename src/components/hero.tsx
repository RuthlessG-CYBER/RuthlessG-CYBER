"use client";

import CardSwap, { Card } from "./animations/CardSwap";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-2 h-2 rounded-full bg-blue-500/40"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="mx-auto px-20 pt-20 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />

              <span className="text-sm text-white/80 font-medium">
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            >
              <span className="block">Hi, I'm</span>

              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                style={{
                  backgroundSize: "200%",
                }}
              >
                Soumya Panda
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold mb-8 text-blue-400"
            >
              {displayText}

              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block ml-1 w-[2px] h-8 bg-blue-400"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-white/70 max-w-xl mb-10 mx-auto lg:mx-0"
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
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold flex items-center gap-2"
              >
                <Zap size={16} />
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full border border-blue-500 text-white hover:bg-blue-500/10 font-semibold flex items-center gap-2"
              >
                <Mail size={16} />
                Contact Me
              </motion.a>
            </motion.div>

            <div className="flex gap-5 justify-center lg:justify-start text-white">
              <a
                href="https://github.com/RuthlessG-CYBER"
                className="hover:text-blue-400 transition"
              >
                <Github size={22} />
              </a>

              <a
                href="https://linkedin.com"
                className="hover:text-blue-400 transition"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="https://twitter.com"
                className="hover:text-blue-400 transition"
              >
                <Twitter size={22} />
              </a>
            </div>
          </motion.div>

          <div className="flex-1 hidden lg:flex items-center justify-center lg:justify-end relative mr-25">
            <div className="relative w-[440px] h-[380px]">
              <CardSwap
                width={600}
                height={350}
                cardDistance={70}
                verticalDistance={80}
                delay={4500}
                pauseOnHover={true}
              >
                <Card customClass="w-[440px] p-0 overflow-hidden bg-black rounded-xl shadow-xl border-0 outline-none ring-0 !border-none">
                  <img
                    src="https://i.pinimg.com/736x/cc/28/bb/cc28bb67651e3778f4ba14e614e6ebf1.jpg"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      Stylish E-Commerce App
                    </h3>

                    <p className="text-white/60 text-sm mb-4">
                      Full-featured ecommerce app with secure payments and admin
                      dashboard.
                    </p>

                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        Kotlin
                      </span>
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        Node.js
                      </span>
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        MongoDB
                      </span>
                    </div>
                  </div>
                </Card>

                <Card customClass="w-[440px] p-0 overflow-hidden bg-black rounded-xl shadow-xl border-0 outline-none ring-0 !border-none">
                  <img
                    src="https://i.pinimg.com/736x/43/33/25/43332535dc660168f2b3046534b6e474.jpg"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      RentHub Real Estate
                    </h3>

                    <p className="text-white/60 text-sm mb-4">
                      Modern real estate platform with browsing and contact
                      system.
                    </p>

                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        React
                      </span>
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        TypeScript
                      </span>
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        MongoDB
                      </span>
                    </div>
                  </div>
                </Card>

                <Card customClass="w-[440px] p-0 overflow-hidden bg-black rounded-xl shadow-xl border-0 outline-none ring-0 !border-none">
                  <img
                    src="https://i.pinimg.com/736x/33/4d/41/334d41975d259a4efc799b35dbeaf671.jpg"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      SmartQueue Healthcare
                    </h3>

                    <p className="text-white/60 text-sm mb-4">
                      Appointment booking app with real-time backend queue
                      system.
                    </p>

                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        React Native
                      </span>
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        Node.js
                      </span>
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        Redis
                      </span>
                    </div>
                  </div>
                </Card>

                <Card customClass="w-[440px] p-0 overflow-hidden bg-black rounded-xl shadow-xl border-0 outline-none ring-0 !border-none">
                  <img
                    src="https://i.pinimg.com/736x/5d/18/b1/5d18b13503f327b89f31817bc8179e38.jpg"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      Product Management System
                    </h3>

                    <p className="text-white/60 text-sm mb-4">
                      Full MERN admin dashboard with analytics and order
                      management.
                    </p>

                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        MERN
                      </span>
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        Tailwind
                      </span>
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        JWT
                      </span>
                    </div>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>

        <motion.div className="absolute bottom-1 left-1/2 -translate-x-1/2">
          <ArrowDown className="text-blue-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
