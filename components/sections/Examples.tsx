"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, CalendarDays, BadgeDollarSign, ChevronLeft, ChevronRight, Bell } from "lucide-react";

/* ── Types ── */
interface Demo {
  name: string;
  tagline: string;
  founder: string;
  founderRole: string;
  status: "Building" | "Private beta" | "Launched";
  progress: number;
  filled: number;
  release: string | null;
  revenue: string | null;
  waitlist: number | null;
  customers: number | null;
  update: string;
  updateDate: string;
  updateTag: string;
  accent: string;
  accentText: string;
  letter: string;
  letterBg: string;
  tags: string[];
}

const statusStyles: Record<string, string> = {
  Building:       "bg-blue-50 text-blue-600",
  "Private beta": "bg-violet-50 text-violet-600",
  Launched:       "bg-emerald-50 text-emerald-600",
};

const demos: Demo[] = [
  {
    name: "Launchpad",
    tagline: "Email marketing built for indie developers and solo founders.",
    founder: "@marcbuilds",
    founderRole: "Indie maker",
    status: "Building",
    progress: 62,
    filled: 6,
    release: "Oct 2026",
    revenue: null,
    waitlist: 312,
    customers: null,
    update: "Drip sequences and A/B testing shipped. Working on analytics next.",
    updateDate: "3 days ago",
    updateTag: "Shipped",
    accent: "bg-violet-500",
    accentText: "text-violet-600",
    letter: "L",
    letterBg: "bg-violet-600",
    tags: ["Developer tools", "Email", "Solo founder"],
  },
  {
    name: "Nestly",
    tagline: "Rental management software for independent landlords.",
    founder: "@sophiamakes",
    founderRole: "Founder & designer",
    status: "Private beta",
    progress: 73,
    filled: 7,
    release: "Aug 2026",
    revenue: null,
    waitlist: 89,
    customers: null,
    update: "Stripe integration live. First 5 beta landlords onboarded this week.",
    updateDate: "1 week ago",
    updateTag: "Milestone",
    accent: "bg-teal-500",
    accentText: "text-teal-600",
    letter: "N",
    letterBg: "bg-teal-600",
    tags: ["PropTech", "B2B", "SaaS"],
  },
  {
    name: "Formix",
    tagline: "Form builder and data pipeline for modern SaaS products.",
    founder: "@alexships",
    founderRole: "Full-stack founder",
    status: "Launched",
    progress: 100,
    filled: 10,
    release: null,
    revenue: "$840 MRR",
    waitlist: null,
    customers: 24,
    update: "Custom domains and webhook triggers added. Growing 18% MoM.",
    updateDate: "5 days ago",
    updateTag: "Update",
    accent: "bg-orange-500",
    accentText: "text-orange-600",
    letter: "F",
    letterBg: "bg-orange-500",
    tags: ["Developer tools", "No-code", "API"],
  },
];

/* ── Large project card ── */
function LargeCard({ demo }: { demo: Demo }) {
  const updateTagCls: Record<string, string> = {
    Shipped:   "bg-emerald-50 text-emerald-700",
    Milestone: "bg-blue-50 text-blue-700",
    Update:    "bg-gray-100 text-gray-600",
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-[0_2px_3px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.08)] flex flex-col h-full">
      <div className={`h-1.5 ${demo.accent}`} />
      <div className="p-8 flex flex-col flex-1">

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`w-12 h-12 rounded-2xl ${demo.letterBg} flex items-center justify-center font-bold text-white text-base shrink-0`}>
            {demo.letter}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <p className="font-bold text-gray-900">{demo.name}</p>
              <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${statusStyles[demo.status]}`}>
                {demo.status}
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-snug">{demo.tagline}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-7">
          {demo.tags.map(t => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 font-medium">{t}</span>
          ))}
        </div>

        {/* Progress */}
        <div className="mb-7">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Progress</span>
            <span className="text-lg font-bold text-gray-900">{demo.progress}%</span>
          </div>
          <div className="flex gap-1.5 mb-3">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className={`flex-1 h-2 rounded-full ${i < demo.filled ? demo.accent : "bg-gray-100"}`} />
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            {demo.release
              ? <span className="flex items-center gap-1.5"><CalendarDays size={11} />Release {demo.release}</span>
              : <span className={`flex items-center gap-1.5 font-semibold ${demo.accentText}`}><BadgeDollarSign size={11} />{demo.revenue}</span>
            }
            {demo.waitlist !== null
              ? <span className="flex items-center gap-1.5"><Users size={11} />{demo.waitlist} waiting</span>
              : <span className="flex items-center gap-1.5"><Users size={11} />{demo.customers} customers</span>
            }
          </div>
        </div>

        {/* Update */}
        <div className="rounded-2xl bg-gray-50 p-5 flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Bell size={12} className="text-gray-400" />
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Latest update</span>
            <span className={`ml-auto text-xs px-2 py-0.5 rounded-full font-semibold ${updateTagCls[demo.updateTag]}`}>
              {demo.updateTag}
            </span>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-2">{demo.update}</p>
          <p className="text-xs text-gray-400">{demo.updateDate}</p>
        </div>

        {/* Founder */}
        <div className="flex items-center gap-3 pt-5 mt-5 border-t border-gray-100">
          <div className={`w-7 h-7 rounded-full ${demo.letterBg} opacity-70 shrink-0`} />
          <div>
            <p className="text-xs font-semibold text-gray-700">{demo.founder}</p>
            <p className="text-xs text-gray-400">{demo.founderRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Compact card for slider ── */
function CompactCard({ demo }: { demo: Demo }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-[0_2px_3px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.08)] flex flex-col">
      <div className={`h-1 ${demo.accent}`} />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-9 h-9 rounded-xl ${demo.letterBg} flex items-center justify-center font-bold text-white text-sm shrink-0`}>
            {demo.letter}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-900 text-sm">{demo.name}</p>
            <p className="text-xs text-gray-400 truncate">{demo.tagline}</p>
          </div>
          <span className={`text-xs px-2.5 py-1 rounded-full font-semibold shrink-0 ${statusStyles[demo.status]}`}>
            {demo.status}
          </span>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-400">Progress</span>
            <span className="text-xs font-bold text-gray-900">{demo.progress}%</span>
          </div>
          <div className="flex gap-1 mb-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className={`flex-1 h-1.5 rounded-full ${i < demo.filled ? demo.accent : "bg-gray-100"}`} />
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            {demo.release
              ? <span className="flex items-center gap-1"><CalendarDays size={10} />{demo.release}</span>
              : <span className={`flex items-center gap-1 font-semibold ${demo.accentText}`}><BadgeDollarSign size={10} />{demo.revenue}</span>
            }
            {demo.waitlist !== null
              ? <span className="flex items-center gap-1"><Users size={10} />{demo.waitlist} waiting</span>
              : <span className="flex items-center gap-1"><Users size={10} />{demo.customers} customers</span>
            }
          </div>
        </div>

        <div className="rounded-xl bg-gray-50 p-4 flex-1">
          <p className="text-xs text-gray-400 mb-1.5 font-medium">Latest update</p>
          <p className="text-sm text-gray-700 leading-relaxed">{demo.update}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Section ── */
export function Examples() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sliderIdx, setSliderIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const sliderDemos = demos.slice(1); // 2 cards pour le slider

  const goTo = (idx: number) => {
    setDirection(idx > sliderIdx ? 1 : -1);
    setSliderIdx(idx);
  };

  return (
    <section id="examples" ref={ref} className="py-20 sm:py-40">
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Examples</p>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight mb-4">
                Real pages.<br />Real journeys.
              </h2>
              <p className="text-xl text-gray-400 max-w-md leading-relaxed">
                Three founders. Three stages. One format that builds trust from day one.
              </p>
            </div>
            {/* Slider controls */}
            <div className="flex items-center gap-2 shrink-0 pb-1">
              <button
                onClick={() => sliderIdx > 0 && goTo(sliderIdx - 1)}
                disabled={sliderIdx === 0}
                className="w-9 h-9 rounded-xl bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-400 hover:text-gray-700 disabled:opacity-30 transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => sliderIdx < sliderDemos.length - 1 && goTo(sliderIdx + 1)}
                disabled={sliderIdx === sliderDemos.length - 1}
                className="w-9 h-9 rounded-xl bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-400 hover:text-gray-700 disabled:opacity-30 transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Layout asymétrique */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-5 items-stretch">

          {/* Gauche: card fixe, grande */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full"
          >
            <LargeCard demo={demos[0]} />
          </motion.div>

          {/* Droite: slider de 2 */}
          <div className="flex flex-col gap-5">
            {/* Dots */}
            <div className="flex gap-1.5 justify-end">
              {sliderDemos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all ${i === sliderIdx ? "w-5 h-2 bg-gray-900" : "w-2 h-2 bg-gray-200 hover:bg-gray-300"}`}
                />
              ))}
            </div>

            <div className="overflow-hidden flex-1">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={sliderIdx}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="h-full"
                >
                  <CompactCard demo={sliderDemos[sliderIdx]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
