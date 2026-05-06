"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Is this just a waitlist tool?", a: "No. The waitlist is one part of the page. The goal is to give your SaaS a public home where people follow your progress, roadmap, updates and launch." },
  { q: "Do I need to have launched already?", a: "No. Use it from idea stage, while building, during beta, or after launch." },
  { q: "Can I show my revenue?", a: "Revenue display is optional. Build trust without revealing private data." },
  { q: "Can I use it for multiple projects?", a: "Yes, manage multiple project pages from one founder profile." },
  { q: "Can I use a custom domain?", a: "Custom domains are planned for the paid version." },
  { q: "Is it free?", a: "Early access starts free while we validate the product." },
];

function FAQItem({ item, index }: { item: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-gray-100 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-6 group"
      >
        <span className="text-gray-800 group-hover:text-gray-950 transition-colors font-medium">
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-7 h-7 rounded-xl bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center shrink-0 transition-colors"
        >
          <Plus size={14} className="text-gray-600" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 leading-relaxed pb-6 max-w-xl">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 sm:py-40">
      <div className="max-w-2xl mx-auto px-4 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">FAQ</p>
          <h2 className="text-4xl font-bold text-gray-950">Common questions.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
