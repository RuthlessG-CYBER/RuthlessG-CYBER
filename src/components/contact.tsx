"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto px-10 lg:px-20 grid lg:grid-cols-2 gap-16 items-start">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400">
              Touch
            </span>
          </h2>

          <p className="text-white/60 mt-4 max-w-md leading-relaxed">
            I'm open to full-time roles, freelance work, and collaboration.
            If you have an opportunity or project in mind, feel free to contact me.
          </p>

          <div className="mt-8 space-y-4">

            <a
              href="mailto:soumyapanda.dev@gmail.com"
              className="flex items-center gap-3 text-white/80 hover:text-blue-400 transition"
            >
              <Mail size={18} />
              pandasoumya004@outlook.com
            </a>

            <a
              href="https://github.com/RuthlessG-CYBER"
              target="_blank"
              className="flex items-center gap-3 text-white/80 hover:text-blue-400 transition"
            >
              <Github size={18} />
              github.com/RuthlessG-CYBER
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="flex items-center gap-3 text-white/80 hover:text-blue-400 transition"
            >
              <Linkedin size={18} />
              linkedin.com/in/soumya-panda
            </a>

          </div>

        </motion.div>


        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >

          <div>
            <label className="text-sm text-white/60">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-blue-400 transition"
            />
          </div>

          <div>
            <label className="text-sm text-white/60">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="mt-2 w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-blue-400 transition"
            />
          </div>

          <div>
            <label className="text-sm text-white/60">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Your message"
              className="mt-2 w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-blue-400 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition"
          >
            <Send size={18} />
            Send Message
          </button>

        </motion.form>

      </div>

    </section>
  );
}