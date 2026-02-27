"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/10">

      <div className="mx-auto px-10 lg:px-20 py-3">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white/60 text-sm"
          >
            © {new Date().getFullYear()} Soumya Panda. All rights reserved.
          </motion.div>



          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-white/60 hover:text-blue-400 transition"
          >
            Back to Top
            <ArrowUp size={16} />
          </motion.button>

        </div>

      </div>

    </footer>
  );
}