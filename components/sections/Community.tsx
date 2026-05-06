"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Handshake, FlaskConical, DollarSign, Tag, Send } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";

const features = [
  { icon: Search,       label: "Project discovery",      desc: "Find projects at any stage, by category, traction or industry.", color: "text-violet-600", bg: "bg-violet-100" },
  { icon: Handshake,    label: "Cofounder search",        desc: "Connect with builders looking for a technical or business partner.", color: "text-blue-600",   bg: "bg-blue-100"   },
  { icon: FlaskConical, label: "Beta tester search",      desc: "Find early users willing to test and give feedback on your product.", color: "text-teal-600",   bg: "bg-teal-100"   },
  { icon: DollarSign,   label: "Revenue filters",         desc: "Browse projects by MRR, growth rate or number of customers.", color: "text-emerald-600", bg: "bg-emerald-100" },
  { icon: Tag,          label: "Project categories",      desc: "Filter by vertical — SaaS, dev tools, consumer, B2B and more.", color: "text-orange-600", bg: "bg-orange-100" },
  { icon: Send,         label: "Collaboration requests",  desc: "Reach out to founders directly with a short intro and context.", color: "text-pink-600",   bg: "bg-pink-100"   },
];

export function Community() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 sm:py-40 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold border border-violet-200 mb-6">
              Coming later
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight mb-6">
              Find builders<br />who share<br /><GradientText>your ambition.</GradientText>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Discover other projects, connect with builders and find collaborators by stage, industry or traction.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.05 + i * 0.10 }}
                  className="bg-white rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_20px_rgba(0,0,0,0.06)]"
                >
                  <div className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                    <Icon size={18} className={f.color} />
                  </div>
                  <p className="font-semibold text-gray-900 mb-2">{f.label}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
