"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, CalendarDays, Users, Globe, TrendingUp, Mail, ArrowRight } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";

/* ── MacBook shell (réutilisé ici pour le bloc Progress full-width) ── */
function MacFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="rounded-xl overflow-hidden shadow-[0_8px_80px_rgba(0,0,0,0.15)] ring-1 ring-black/8">
        <div className="bg-[#1e1e1e] flex items-center gap-2 px-4 py-2.5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-1.5 bg-[#2c2c2e] rounded-md px-3 py-1 text-xs text-gray-400 font-mono max-w-35 sm:max-w-xs w-full justify-center truncate">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="shrink-0 opacity-40">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              {url}
            </div>
          </div>
          <div className="w-16" />
        </div>
        <div className="bg-white overflow-hidden">{children}</div>
      </div>
      <div className="h-4 bg-[#d1d1d6] rounded-b-xl mx-4 shadow-[0_4px_12px_rgba(0,0,0,0.12)]" />
      <div className="h-1.5 bg-[#b8b8be] rounded-b-xl mx-8" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Mockup 1 — Explore page: projets en contexte
───────────────────────────────────────────── */
function PublicPageMockup() {
  const projects = [
    { letter: "L", bg: "bg-violet-600", accent: "bg-violet-500", name: "Launchpad", tagline: "Email marketing for indie devs", status: "Building", statusCls: "bg-blue-50 text-blue-600", progress: 6, waitlist: 312 },
    { letter: "N", bg: "bg-teal-600", accent: "bg-teal-500", name: "Nestly", tagline: "Rental management for landlords", status: "Private beta", statusCls: "bg-violet-50 text-violet-600", progress: 8, waitlist: 89 },
    { letter: "F", bg: "bg-orange-500", accent: "bg-orange-400", name: "Formix", tagline: "Form builder for SaaS products", status: "Launched", statusCls: "bg-emerald-50 text-emerald-600", progress: 10, waitlist: 0, mrr: "$840 MRR" },
  ];

  return (
    <MacFrame url="journey.page/explore">
      <div className="bg-gray-50 p-4 min-h-[460px]">
        <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
          <p className="text-sm font-bold text-gray-900 shrink-0">Explore projects</p>
          <div className="flex gap-1 flex-wrap">
            {["All", "Building", "Beta", "Launched"].map((t, i) => (
              <span key={t} className={`text-xs px-2 py-1 rounded-full font-medium cursor-pointer whitespace-nowrap ${i === 0 ? "bg-gray-900 text-white" : "bg-white text-gray-400 shadow-sm"}`}>{t}</span>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {projects.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl ${p.bg} flex items-center justify-center font-bold text-white text-sm shrink-0`}>{p.letter}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm">{p.name}</p>
                  <p className="text-xs text-gray-400 truncate">{p.tagline}</p>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-semibold shrink-0 ${p.statusCls}`}>{p.status}</span>
              </div>
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className={`flex-1 h-1.5 rounded-full ${i < p.progress ? p.accent : "bg-gray-100"}`} />
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                {p.mrr
                  ? <span className="text-emerald-600 font-semibold">{p.mrr}</span>
                  : <span className="flex items-center gap-1"><Users size={10} />{p.waitlist} waiting</span>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </MacFrame>
  );
}

/* ─────────────────────────────────────────────
   Mockup 2 — Progress en contexte app (grand)
───────────────────────────────────────────── */
function ProgressMockup() {
  const roadmap = [
    { label: "Auth & onboarding", done: true, date: "Jan 2026" },
    { label: "Stripe integration", done: true, date: "Feb 2026" },
    { label: "Team collaboration", done: false, date: "Apr 2026" },
    { label: "Mobile app", done: false, date: "Jul 2026" },
    { label: "Public API", done: false, date: "Aug 2026" },
  ];

  const updates = [
    { tag: "Shipped", tagCls: "bg-emerald-50 text-emerald-700", date: "2 weeks ago", title: "Stripe integration live", desc: "First 5 paying customers onboarded. Revenue: $420 MRR." },
    { tag: "Milestone", tagCls: "bg-blue-50 text-blue-700", date: "1 month ago", title: "Auth & onboarding done", desc: "Full signup flow tested with 20 beta users. Drop-off under 8%." },
  ];

  return (
    <div className="bg-white flex" style={{ minHeight: 400 }}>
        {/* Sidebar — hidden on mobile */}
        <div className="hidden sm:flex w-52 shrink-0 border-r border-gray-100 py-6 px-4 flex-col">
          <div className="flex items-center gap-2.5 px-2 mb-8">
            <div className="w-7 h-7 rounded-lg bg-teal-600 flex items-center justify-center text-white text-xs font-bold">N</div>
            <p className="text-sm font-bold text-gray-900">Nestly</p>
          </div>
          {["Overview", "Progress", "Roadmap", "Updates", "Waitlist", "Analytics"].map((item) => (
            <div key={item} className={`flex items-center gap-2 text-xs px-3 py-2.5 rounded-xl mb-0.5 font-medium cursor-pointer ${item === "Progress" ? "bg-teal-50 text-teal-700 font-semibold" : "text-gray-400 hover:text-gray-600"}`}>
              {item}
            </div>
          ))}
          <div className="mt-8 mx-2 p-3 rounded-xl bg-gray-50">
            <p className="text-xs text-gray-400 mb-1">Waitlist</p>
            <p className="text-lg font-bold text-gray-900">89</p>
            <p className="text-xs text-teal-600 font-medium">+12 this week</p>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0 overflow-auto">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-4 sm:px-8 border-b border-gray-100">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Nestly · Progress</p>
              <p className="text-base font-bold text-gray-900">Build progress</p>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 font-semibold">On track</span>
          </div>

          <div className="px-4 py-5 sm:px-8 sm:py-7">
            {/* Big stat row */}
            <div className="flex items-center gap-5 mb-8">
              <div>
                <p className="text-5xl sm:text-7xl font-bold text-gray-950 leading-none mb-1">73%</p>
                <p className="text-sm text-gray-400">complete</p>
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="flex gap-1">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className={`flex-1 h-3 sm:h-4 rounded-lg ${i < 7 ? "bg-teal-500" : "bg-gray-100"}`} />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-400 pt-1">
                  <span className="flex items-center gap-1"><CalendarDays size={10} />Jan 2026</span>
                  <span className="flex items-center gap-1"><CalendarDays size={10} />Aug 2026</span>
                </div>
              </div>
            </div>

            {/* Two columns: roadmap + updates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Roadmap */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Roadmap</p>
                <div className="space-y-2">
                  {roadmap.map((item) => (
                    <div key={item.label} className={`flex items-center gap-3 p-3 rounded-xl ${item.done ? "bg-gray-50" : "bg-white border border-gray-100"}`}>
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 ${item.done ? "bg-emerald-100" : "bg-white border border-gray-200"}`}>
                        {item.done && <Check size={10} strokeWidth={3} className="text-emerald-600" />}
                      </div>
                      <span className={`text-xs flex-1 ${item.done ? "text-gray-400 line-through" : "text-gray-700 font-medium"}`}>{item.label}</span>
                      <span className="text-xs text-gray-300 shrink-0">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent updates */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Recent updates</p>
                <div className="space-y-3">
                  {updates.map((u) => (
                    <div key={u.title} className="p-3 sm:p-4 rounded-xl bg-gray-50">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${u.tagCls}`}>{u.tag}</span>
                        <span className="text-xs text-gray-300">{u.date}</span>
                      </div>
                      <p className="text-xs font-semibold text-gray-900 mb-1">{u.title}</p>
                      <p className="text-xs text-gray-400 leading-relaxed">{u.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Mockup 3 — Popup waitlist + updates feed
───────────────────────────────────────────── */
function WaitlistMockup() {
  const updates = [
    { tag: "Shipped", tagCls: "bg-emerald-50 text-emerald-700", date: "2d ago", title: "Stripe integration live", desc: "First paid user within 6 hours of going live." },
    { tag: "Milestone", tagCls: "bg-blue-50 text-blue-700", date: "2w ago", title: "100 waitlist signups", desc: "Sending early access invites starting next week." },
  ];

  return (
    <MacFrame url="journey.page/launchpad">
      <div className="relative min-h-[460px] bg-gray-50 overflow-hidden">
        {/* Page fond flouté */}
        <div className="absolute inset-0 p-8 opacity-25 select-none pointer-events-none">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl bg-violet-600" />
            <div>
              <div className="h-3 w-24 bg-gray-300 rounded mb-1.5" />
              <div className="h-2 w-36 bg-gray-200 rounded" />
            </div>
          </div>
          {[70, 90, 55, 80].map((w, i) => (
            <div key={i} className="h-2 bg-gray-200 rounded mb-3" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="absolute inset-0 bg-gray-900/25 backdrop-blur-sm" />

        {/* Modal */}
        <div className="absolute inset-0 flex items-center justify-center p-5">
          <div className="w-full max-w-xs bg-white rounded-3xl shadow-[0_16px_64px_rgba(0,0,0,0.18)] overflow-hidden">
            <div className="bg-violet-600 p-5 text-white">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-violet-200 uppercase tracking-widest">Build progress</p>
                <span className="text-xl font-bold">62%</span>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className={`flex-1 h-1.5 rounded-full ${i < 6 ? "bg-white" : "bg-violet-400"}`} />
                ))}
              </div>
              <div className="flex justify-between text-xs text-violet-200">
                <span className="flex items-center gap-1"><CalendarDays size={10} />Oct 2026</span>
                <span className="flex items-center gap-1"><Users size={10} />312 waiting</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Recent updates</p>
              <div className="space-y-4">
                {updates.map((u) => (
                  <div key={u.title} className="border-l-2 border-gray-100 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${u.tagCls}`}>{u.tag}</span>
                      <span className="text-xs text-gray-300">{u.date}</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">{u.title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{u.desc}</p>
                  </div>
                ))}
              </div>
              <button className="mt-5 w-full py-2.5 rounded-xl bg-gray-950 text-white text-sm font-semibold flex items-center justify-center gap-2">
                Join waitlist <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </MacFrame>
  );
}

const sideBlocks = [
  {
    icon: Globe,
    label: "Discover",
    title: "Your project,\nfound by the right people.",
    desc: "A public page on Public Journey. Founders discover you, followers track you, early users find you — all in one place.",
    flip: false,
    mockup: <PublicPageMockup />,
  },
  {
    icon: Mail,
    label: "Waitlist",
    title: "Collect users\nbefore you launch.",
    desc: "A clean popup with your progress and latest updates. Visitors join with full context — no cold form, no friction.",
    flip: false,
    mockup: <WaitlistMockup />,
  },
];

export function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 sm:py-40 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">The solution</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight max-w-xl">
            One public home<br /><GradientText>for your project.</GradientText>
          </h2>
        </motion.div>

        {/* Blocs 1 & 3 : texte + mockup côte à côte */}
        <div className="space-y-24 sm:space-y-44 mb-20 sm:mb-44">
          {sideBlocks.map((block, i) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: i * 0.12 }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] text-xs font-semibold text-gray-500">
                    <Icon size={13} />{block.label}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-950 leading-tight whitespace-pre-line">
                    {block.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed">{block.desc}</p>
                </div>
                <div>{block.mockup}</div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Bloc Progress — full-width MacFrame, texte centré en dessous */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-8"
      >
        <MacFrame url="journey.page/nestly/progress">
          <ProgressMockup />
        </MacFrame>

        {/* Texte centré sous le MacFrame */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] text-xs font-semibold text-gray-500 mb-6">
            <TrendingUp size={13} />Progress
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-950 leading-tight mb-4">
            Ship in public.<br />Show every step.
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed">
            A dedicated progress page inside your project. Roadmap, milestones, percentage — your audience always knows where you stand.
          </p>
        </div>
      </motion.div>

    </section>
  );
}
