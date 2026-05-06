"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Users } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";

const features = [
  "Beautiful public URL",
  "Open Graph preview card",
  "Live project status badge",
  "One-click waitlist join",
  "Latest milestone shown",
  "Founder profile included",
];

export function BuiltForSharing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 sm:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Built for sharing</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight mb-6">
                One link.<br />Share everywhere.
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Every page is designed to look great when shared on X, LinkedIn, or anywhere you build in public.
              </p>
            </div>

            <ul className="space-y-4">
              {features.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.1 + i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-lg bg-gray-950 flex items-center justify-center shrink-0">
                    <Check size={11} strokeWidth={3} className="text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">{f}</span>
                </motion.li>
              ))}
            </ul>

            <CtaButton label="Create your page" />
          </motion.div>

          {/* Browser mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="rounded-3xl bg-white shadow-[0_2px_40px_rgba(0,0,0,0.08)] overflow-hidden">
              {/* Chrome */}
              <div className="flex items-center gap-2.5 px-5 py-4 bg-gray-50 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 rounded-lg bg-white border border-gray-200 px-3 py-1.5 text-xs text-gray-400 font-mono">
                  journey.page/launchpad
                </div>
              </div>

              {/* OG preview */}
              <div className="p-6">
                <div className="rounded-2xl bg-gray-50 overflow-hidden">
                  <div className="h-24 bg-violet-50 flex items-center gap-4 px-5 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-2xl bg-violet-600 flex items-center justify-center font-bold text-white text-sm shrink-0">L</div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Launchpad</p>
                      <p className="text-xs text-gray-400">Building · 62% complete</p>
                    </div>
                    <span className="ml-auto text-xs px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold">Building</span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                      Email marketing for indie developers. Join 312 people following the journey.
                    </p>
                    <div className="flex gap-1">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className={`flex-1 h-1.5 rounded-full ${i < 7 ? "bg-violet-500" : "bg-gray-200"}`} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-center text-xs text-gray-400 mt-4">
                  How your page appears when shared on X or LinkedIn
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
