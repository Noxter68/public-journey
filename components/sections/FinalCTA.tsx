"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/components/ModalProvider";

export function FinalCTA() {
  const ref = useRef(null);
  const { open } = useModal();
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 sm:py-40">
      <div className="max-w-2xl mx-auto px-4 sm:px-8 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-950 leading-[1.05] tracking-tight mb-6"
        >
          Start building<br />an audience<br />before launch.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-gray-400 mb-12 leading-relaxed"
        >
          Create a public project page people can follow from idea to release.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button
            onClick={open}
            className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl bg-gray-950 text-white font-semibold text-lg hover:bg-gray-800 transition-colors"
          >
            Get early access <ArrowRight size={18} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
