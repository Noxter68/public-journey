"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";

export function WaitlistSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="waitlist" ref={ref} className="py-20 sm:py-40 bg-gray-50">
      <div className="max-w-xl mx-auto px-4 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold border border-violet-100 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            Early access open
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight mb-4">
            Want your own<br />project page?
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Join early access and be among the first founders invited.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-[0_2px_40px_rgba(0,0,0,0.08)] p-8"
        >
          <WaitlistForm />
        </motion.div>

      </div>
    </section>
  );
}
