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
    <footer className="relative border-t border-gray-200 bg-white">
      <div className="px-8 md:px-20 w-full py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-500 text-sm font-medium"
          >
            © {new Date().getFullYear()} Soumya Panda. All rights reserved.
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-500 font-medium hover:text-[#06b6d4] transition-colors bg-gray-50 hover:bg-cyan-50 border border-gray-200 px-4 py-2 rounded-full"
          >
            Back to Top
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}