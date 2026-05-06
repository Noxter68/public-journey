"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, FileText, Mail, CreditCard, ScrollText, Link2 } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";

const fragments = [
  {
    icon: X,
    label: "X / Twitter",
    desc: "You post an update. It gets 40 likes, then disappears forever into the feed. Nobody can find it tomorrow.",
    color: "text-slate-700",
    bg: "bg-slate-50",
  },
  {
    icon: FileText,
    label: "Notion",
    desc: "Your roadmap lives in a Notion doc nobody asked for and nobody can access without a link you forgot to share.",
    color: "text-stone-600",
    bg: "bg-stone-50",
  },
  {
    icon: Mail,
    label: "Waitlist tool",
    desc: "A third-party form collecting emails. Disconnected from everything else. Another tab, another tool, another link.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: CreditCard,
    label: "Stripe",
    desc: "You hit your first $500 MRR. A screenshot on X, gone in 24 hours. Nobody who follows you even saw it.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: ScrollText,
    label: "Changelog",
    desc: "Your release notes are somewhere on a subdomain nobody bookmarked. The link died when you switched tools.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: Link2,
    label: "Product link",
    desc: "When you share your product, people land on a homepage with no context. They don't know what you're building or why.",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
];

export function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 sm:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">The problem</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 leading-[1.1] mb-6 max-w-2xl">
            You're building in public.<br />But it's scattered everywhere.
          </h2>
          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            Your story exists across 6 different tools and none of them talk to each other. People who want to follow you can't.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fragments.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.06 + i * 0.12 }}
                className="bg-white rounded-3xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)]"
              >
                <div className={`w-10 h-10 rounded-2xl ${item.bg} flex items-center justify-center mb-5`}>
                  <Icon size={17} className={item.color} />
                </div>
                <p className="text-sm font-bold text-gray-900 mb-3">{item.label}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <CtaButton label="Fix this with Public Journey" />
        </motion.div>

      </div>
    </section>
  );
}
