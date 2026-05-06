"use client";

import { motion } from "framer-motion";
import { useModal } from "@/components/ModalProvider";

export function Navbar() {
  const { open } = useModal();

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-gray-950 flex items-center justify-center">
            <span className="text-white text-xs font-bold">J</span>
          </div>
          <span className="font-semibold text-gray-900 text-sm">Public Journey</span>
        </div>

        <button
          onClick={open}
          className="px-4 py-2 rounded-xl bg-gray-950 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Get early access
        </button>
      </div>
    </motion.header>
  );
}
