"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-white/50">
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
              Contact
            </h2>
          </div>
          
          <div className="flex-1 md:text-right">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Get In Touch
            </h3>
            <p className="text-gray-600 mt-4 leading-relaxed max-w-xl md:ml-auto">
              I'm open to full-time roles, freelance work, and collaboration.
              If you have an opportunity or project in mind, feel free to contact me.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
              <a
                href="mailto:soumyapanda.dev@gmail.com"
                className="flex items-center gap-4 text-gray-700 font-medium hover:text-[#06b6d4] transition-colors p-3 hover:bg-cyan-50 rounded-lg"
              >
                <span className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600">
                  <Mail size={22} />
                </span>
                pandasoumya004@outlook.com
              </a>

              <a
                href="https://github.com/RuthlessG-CYBER"
                target="_blank"
                className="flex items-center gap-4 text-gray-700 font-medium hover:text-[#06b6d4] transition-colors p-3 hover:bg-cyan-50 rounded-lg"
              >
                <span className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600">
                  <Github size={22} />
                </span>
                github.com/RuthlessG-CYBER
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center gap-4 text-gray-700 font-medium hover:text-[#06b6d4] transition-colors p-3 hover:bg-cyan-50 rounded-lg"
              >
                <span className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600">
                  <Linkedin size={22} />
                </span>
                linkedin.com/in/soumya-panda
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-white border border-gray-200 p-8 rounded-xl shadow-sm"
          >
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Your message"
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-gray-900 outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-[#06b6d4] hover:bg-[#0891b2] text-white py-3 rounded-md font-semibold transition-colors shadow-sm"
            >
              <Send size={18} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}