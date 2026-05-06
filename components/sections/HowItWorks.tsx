"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FilePlus, Megaphone, Users, ShieldCheck } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";
import { GradientText } from "@/components/ui/GradientText";

const steps = [
  { number: "01", icon: FilePlus,    title: "Create your page",      desc: "Add your product name, tagline, stage and release date. Done in minutes.", color: "text-violet-600", bg: "bg-violet-100", numColor: "text-violet-200" },
  { number: "02", icon: Megaphone,   title: "Share your progress",   desc: "Publish updates and roadmap items as you build. Keep followers in the loop.", color: "text-blue-600",   bg: "bg-blue-100",   numColor: "text-blue-200"   },
  { number: "03", icon: Users,       title: "Collect early users",   desc: "Visitors join your waitlist and follow the journey from day one.", color: "text-teal-600",   bg: "bg-teal-100",   numColor: "text-teal-200"   },
  { number: "04", icon: ShieldCheck, title: "Build trust",           desc: "Show traction, founder info and optional verified revenue when you're ready.", color: "text-emerald-600", bg: "bg-emerald-100", numColor: "text-emerald-200" },
];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 sm:py-40 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">How it works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight max-w-xl">
            From idea to launch<br /><GradientText>in four steps.</GradientText>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.15 }}
                className="bg-white rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_20px_rgba(0,0,0,0.06)]"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-11 h-11 rounded-2xl ${step.bg} flex items-center justify-center`}>
                    <Icon size={20} className={step.color} />
                  </div>
                  <span className={`text-4xl font-bold ${step.numColor} leading-none`}>{step.number}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
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
          <CtaButton label="Start in minutes" />
        </motion.div>

      </div>
    </section>
  );
}
