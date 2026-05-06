"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Bell, BarChart2, Users, TrendingUp, CalendarDays, FileText, Settings, ArrowRight } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";

/* ── MacBook shell ── */
function MacFrame({ url, children, className = "" }: { url: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="rounded-xl overflow-hidden shadow-[0_4px_48px_rgba(0,0,0,0.14)] ring-1 ring-black/8">
        <div className="bg-[#1e1e1e] flex items-center gap-2 px-4 py-2.5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-1.5 bg-[#2c2c2e] rounded-md px-3 py-1 text-xs text-gray-400 font-mono max-w-35 sm:max-w-xs w-full justify-center truncate">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" className="shrink-0 opacity-40">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              {url}
            </div>
          </div>
          <div className="w-14 hidden sm:block" />
        </div>
        <div className="bg-white overflow-hidden">{children}</div>
      </div>
      <div className="h-3 bg-[#d1d1d6] rounded-b-xl mx-4 shadow-[0_3px_8px_rgba(0,0,0,0.10)]" />
      <div className="h-1 bg-[#b8b8be] rounded-b-xl mx-8" />
    </div>
  );
}

/* ── Page publique fixe (gauche) ── */
function PublicProjectPage() {
  return (
    <div className="bg-white" style={{ minHeight: 580 }}>
      {/* Nav de la page publique */}
      <div className="flex items-center justify-between px-5 py-3 sm:px-8 sm:py-4 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-gray-950 flex items-center justify-center">
            <span className="text-white text-xs font-bold">J</span>
          </div>
          <span className="text-xs font-semibold text-gray-400">Public Journey</span>
        </div>
        <button className="text-xs px-3 py-1.5 rounded-lg bg-gray-950 text-white font-semibold">Join waitlist</button>
      </div>

      <div className="px-5 py-5 sm:px-8 sm:py-7">
        {/* Header projet */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-violet-600 flex items-center justify-center font-bold text-white text-lg shrink-0">L</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <p className="font-bold text-gray-900 text-base">Launchpad</p>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-semibold">Building</span>
            </div>
            <p className="text-xs text-gray-400">Email marketing for indie developers</p>
          </div>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-5">
          The simplest way to run email campaigns when building alone. No bloated dashboards — just emails that convert.
        </p>

        <div className="flex gap-1.5 mb-6">
          {["Dev tools", "Email", "Solo founder"].map(t => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 font-medium">{t}</span>
          ))}
        </div>

        {/* Progress */}
        <div className="p-4 rounded-2xl bg-gray-50 mb-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Progress</p>
            <p className="text-xl font-bold text-gray-900">62%</p>
          </div>
          <div className="flex gap-1 mb-2.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className={`flex-1 h-2 rounded-full ${i < 6 ? "bg-violet-500" : "bg-gray-200"}`} />
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span className="flex items-center gap-1"><CalendarDays size={10} />Release Oct 2026</span>
            <span className="flex items-center gap-1"><Users size={10} />312 waiting</span>
          </div>
        </div>

        {/* Latest update */}
        <div className="border-l-2 border-violet-200 pl-4 mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">Shipped</span>
            <span className="text-xs text-gray-300">3 days ago</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 mb-0.5">Email sequences live</p>
          <p className="text-xs text-gray-400 leading-relaxed">Drip campaigns and A/B testing shipped. First users running campaigns within 24 hours.</p>
        </div>

        {/* Founder */}
        <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
          <div className="w-8 h-8 rounded-full bg-orange-400 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-gray-700">@marcbuilds</p>
            <p className="text-xs text-gray-400">Indie maker · Building in public</p>
          </div>
          <button className="ml-auto text-xs px-4 py-2 rounded-xl bg-gray-950 text-white font-semibold flex items-center gap-1.5">
            Join <ArrowRight size={11} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Screenshots de l'app (droite) ── */
function DashboardScreen() {
  const projects = [
    { name: "Launchpad", letter: "L", color: "bg-violet-600", barColor: "bg-violet-400", progress: 6, waitlist: 312, status: "Building", statusCls: "bg-blue-50 text-blue-600" },
    { name: "Nestly",    letter: "N", color: "bg-teal-600",   barColor: "bg-teal-400",   progress: 7, waitlist: 89,  status: "Beta",     statusCls: "bg-violet-50 text-violet-600" },
    { name: "Formix",    letter: "F", color: "bg-orange-500", barColor: "bg-orange-400", progress: 10, waitlist: 0, status: "Launched",  statusCls: "bg-emerald-50 text-emerald-600" },
  ];
  return (
    <div className="flex" style={{ minHeight: 440 }}>
      <div className="hidden sm:flex w-48 shrink-0 border-r border-gray-100 py-5 px-3 flex-col">
        <p className="text-xs font-bold text-gray-900 mb-5 px-2">Public Journey</p>
        {[{ label: "Dashboard", icon: BarChart2, active: true }, { label: "Projects", icon: FileText }, { label: "Analytics", icon: TrendingUp }, { label: "Settings", icon: Settings }]
          .map(({ label, icon: Icon, active }) => (
            <div key={label} className={`flex items-center gap-2 text-xs px-2.5 py-2 rounded-xl mb-0.5 font-medium ${active ? "bg-violet-50 text-violet-600" : "text-gray-400"}`}>
              <Icon size={13} />{label}
            </div>
          ))}
      </div>
      <div className="flex-1 min-w-0 px-4 py-5 sm:px-7 sm:py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs text-gray-400 mb-0.5">Good morning,</p>
            <p className="text-lg font-bold text-gray-900">Marc</p>
          </div>
          <button className="text-xs px-3 py-1.5 rounded-xl bg-gray-950 text-white font-semibold">+ New project</button>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[{ label: "MRR", value: "$840", color: "text-emerald-600" }, { label: "Waitlist", value: "401", color: "text-blue-600" }, { label: "Projects", value: "3", color: "text-violet-600" }]
            .map(s => (
              <div key={s.label} className="p-4 rounded-xl bg-gray-50">
                <p className="text-xs text-gray-400 mb-1">{s.label}</p>
                <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
        </div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Projects</p>
        <div className="space-y-2">
          {projects.map(p => (
            <div key={p.name} className="flex items-center gap-3 p-3.5 rounded-xl hover:bg-gray-50 transition-colors">
              <div className={`w-8 h-8 rounded-xl ${p.color} flex items-center justify-center text-white font-bold text-xs shrink-0`}>{p.letter}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <p className="text-sm font-semibold text-gray-900">{p.name}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${p.statusCls}`}>{p.status}</span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 10 }).map((_, i) => <div key={i} className={`flex-1 h-1 rounded-full ${i < p.progress ? p.barColor : "bg-gray-100"}`} />)}
                </div>
              </div>
              <p className="text-xs text-gray-400 shrink-0">{p.waitlist > 0 ? `${p.waitlist}` : "Live"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgressScreen() {
  const roadmap = [
    { label: "Auth & onboarding", done: true, date: "Jan 2026" },
    { label: "Email sequences", done: true, date: "Feb 2026" },
    { label: "Analytics dashboard", done: false, date: "Apr 2026" },
    { label: "Team workspaces", done: false, date: "Jul 2026" },
  ];
  return (
    <div className="flex" style={{ minHeight: 440 }}>
      <div className="hidden sm:flex w-48 shrink-0 border-r border-gray-100 py-5 px-3 flex-col">
        <div className="flex items-center gap-2 px-2 mb-6">
          <div className="w-6 h-6 rounded-lg bg-violet-600 flex items-center justify-center text-white text-xs font-bold">L</div>
          <p className="text-xs font-bold text-gray-900">Launchpad</p>
        </div>
        {["Overview", "Progress", "Roadmap", "Updates", "Waitlist"].map(item => (
          <div key={item} className={`text-xs px-2.5 py-2 rounded-xl mb-0.5 font-medium ${item === "Progress" ? "bg-violet-50 text-violet-700 font-semibold" : "text-gray-400"}`}>{item}</div>
        ))}
        <div className="mt-6 mx-1 p-3 rounded-xl bg-gray-50">
          <p className="text-xs text-gray-400 mb-0.5">Waitlist</p>
          <p className="text-lg font-bold text-gray-900">312</p>
          <p className="text-xs text-violet-600 font-semibold">+28 this week</p>
        </div>
      </div>
      <div className="flex-1 min-w-0 px-4 py-5 sm:px-7 sm:py-6">
        <div className="flex items-center gap-6 mb-6">
          <div>
            <p className="text-5xl font-bold text-gray-950 leading-none">62%</p>
            <p className="text-xs text-gray-400 mt-1">complete</p>
          </div>
          <div className="flex-1">
            <div className="flex gap-1.5 mb-2">
              {Array.from({ length: 10 }).map((_, i) => <div key={i} className={`flex-1 h-3 rounded-lg ${i < 6 ? "bg-violet-500" : "bg-gray-100"}`} />)}
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>Jan 2026</span><span>Oct 2026</span>
            </div>
          </div>
        </div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Roadmap</p>
        <div className="space-y-2">
          {roadmap.map(item => (
            <div key={item.label} className={`flex items-center gap-3 p-3 rounded-xl ${item.done ? "bg-gray-50" : "bg-white border border-gray-100"}`}>
              <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 ${item.done ? "bg-emerald-100" : "bg-white border border-gray-200"}`}>
                {item.done && <Check size={10} strokeWidth={3} className="text-emerald-600" />}
              </div>
              <span className={`text-sm flex-1 ${item.done ? "text-gray-400 line-through" : "text-gray-700"}`}>{item.label}</span>
              <span className="text-xs text-gray-300">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function UpdatesScreen() {
  const updates = [
    { tag: "Shipped", tagCls: "bg-emerald-100 text-emerald-700", date: "Apr 28", title: "Email sequences live", text: "Drip campaigns and A/B testing shipped. 12 users running campaigns within 24h." },
    { tag: "Milestone", tagCls: "bg-blue-100 text-blue-700", date: "Mar 15", title: "100 waitlist signups", text: "Organic growth from a single X thread. Sending early access invites next week." },
    { tag: "Update", tagCls: "bg-gray-100 text-gray-600", date: "Feb 2", title: "Project started", text: "After 8 conversations with indie devs frustrated by Mailchimp, decided to build something simpler." },
  ];
  return (
    <div className="flex" style={{ minHeight: 440 }}>
      <div className="hidden sm:flex w-48 shrink-0 border-r border-gray-100 py-5 px-3 flex-col">
        <div className="flex items-center gap-2 px-2 mb-6">
          <div className="w-6 h-6 rounded-lg bg-violet-600 flex items-center justify-center text-white text-xs font-bold">L</div>
          <p className="text-xs font-bold text-gray-900">Launchpad</p>
        </div>
        {["Overview", "Progress", "Roadmap", "Updates", "Waitlist"].map(item => (
          <div key={item} className={`text-xs px-2.5 py-2 rounded-xl mb-0.5 font-medium ${item === "Updates" ? "bg-teal-50 text-teal-700 font-semibold" : "text-gray-400"}`}>{item}</div>
        ))}
      </div>
      <div className="flex-1 min-w-0 px-4 py-5 sm:px-7 sm:py-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-base font-bold text-gray-900">Updates</p>
          <button className="text-xs px-3 py-1.5 rounded-xl bg-gray-950 text-white font-semibold flex items-center gap-1.5"><Bell size={11} /> Post update</button>
        </div>
        <div className="space-y-5">
          {updates.map(u => (
            <div key={u.date} className="border-l-2 border-gray-100 pl-5">
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${u.tagCls}`}>{u.tag}</span>
                <span className="text-xs text-gray-300">{u.date}</span>
              </div>
              <p className="text-sm font-bold text-gray-900 mb-1">{u.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{u.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WaitlistScreen() {
  return (
    <div className="flex" style={{ minHeight: 440 }}>
      <div className="hidden sm:flex w-48 shrink-0 border-r border-gray-100 py-5 px-3 flex-col">
        <div className="flex items-center gap-2 px-2 mb-6">
          <div className="w-6 h-6 rounded-lg bg-violet-600 flex items-center justify-center text-white text-xs font-bold">L</div>
          <p className="text-xs font-bold text-gray-900">Launchpad</p>
        </div>
        {["Overview", "Progress", "Roadmap", "Updates", "Waitlist"].map(item => (
          <div key={item} className={`text-xs px-2.5 py-2 rounded-xl mb-0.5 font-medium ${item === "Waitlist" ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-400"}`}>{item}</div>
        ))}
      </div>
      <div className="flex-1 min-w-0 px-4 py-5 sm:px-7 sm:py-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-base font-bold text-gray-900">Waitlist</p>
          <span className="text-xs px-3 py-1.5 rounded-xl bg-gray-100 text-gray-500 font-medium">Export CSV</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-blue-50">
            <p className="text-xs text-blue-400 mb-1">Total signups</p>
            <p className="text-3xl font-bold text-blue-600">312</p>
            <p className="text-xs text-blue-400 font-semibold mt-1">+28 this week</p>
          </div>
          <div className="p-4 rounded-2xl bg-gray-50">
            <p className="text-xs text-gray-400 mb-1">Conversion rate</p>
            <p className="text-3xl font-bold text-gray-900">13.4%</p>
            <p className="text-xs text-emerald-600 font-semibold mt-1">+2.1% vs last week</p>
          </div>
        </div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Recent signups</p>
        <div className="space-y-2">
          {[
            { handle: "@karim_builds", email: "karim@indie.co", date: "2h ago" },
            { handle: "@sofiadev",     email: "sofia@hey.com",  date: "5h ago" },
            { handle: "@marc_wip",     email: "marc@wip.co",    date: "1d ago" },
          ].map(u => (
            <div key={u.handle} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-7 h-7 rounded-full bg-gray-200 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-900">{u.handle}</p>
                <p className="text-xs text-gray-400 truncate">{u.email}</p>
              </div>
              <span className="text-xs text-gray-300 shrink-0">{u.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalyticsScreen() {
  const bars = [38, 52, 48, 71, 65, 83, 79, 58, 74, 91, 68, 88];
  return (
    <div className="flex" style={{ minHeight: 440 }}>
      <div className="hidden sm:flex w-48 shrink-0 border-r border-gray-100 py-5 px-3 flex-col">
        <div className="flex items-center gap-2 px-2 mb-6">
          <div className="w-6 h-6 rounded-lg bg-violet-600 flex items-center justify-center text-white text-xs font-bold">L</div>
          <p className="text-xs font-bold text-gray-900">Launchpad</p>
        </div>
        {["Overview", "Progress", "Roadmap", "Updates", "Waitlist", "Analytics"].map(item => (
          <div key={item} className={`text-xs px-2.5 py-2 rounded-xl mb-0.5 font-medium ${item === "Analytics" ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-gray-400"}`}>{item}</div>
        ))}
      </div>
      <div className="flex-1 min-w-0 px-4 py-5 sm:px-7 sm:py-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-base font-bold text-gray-900">Analytics</p>
          <span className="text-xs px-3 py-1.5 rounded-xl bg-gray-100 text-gray-500 font-medium">Last 30 days</span>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[{ label: "Visitors", value: "1,842", delta: "+12%" }, { label: "Conversion", value: "13.4%", delta: "+2.1%" }, { label: "Followers", value: "312", delta: "+28" }].map(s => (
            <div key={s.label} className="p-4 rounded-xl bg-gray-50">
              <p className="text-xs text-gray-400 mb-1">{s.label}</p>
              <p className="text-xl font-bold text-gray-900">{s.value}</p>
              <p className="text-xs text-emerald-600 font-semibold mt-0.5">{s.delta}</p>
            </div>
          ))}
        </div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Visitors — last 12 weeks</p>
        <div className="flex items-end gap-1 h-24">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end">
              <div className="rounded-t-md bg-indigo-300 hover:bg-indigo-500 transition-colors" style={{ height: `${h}%` }} />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-300 mt-1.5">
          <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
        </div>
      </div>
    </div>
  );
}

const screenshots = [
  { url: "journey.page/dashboard",          label: "Founder Dashboard",  sublabel: "Manage all your projects",         component: <DashboardScreen /> },
  { url: "journey.page/launchpad/progress", label: "Progress Tracker",   sublabel: "Roadmap and build milestones",      component: <ProgressScreen /> },
  { url: "journey.page/launchpad/updates",  label: "Updates Feed",        sublabel: "Keep your audience in the loop",    component: <UpdatesScreen /> },
  { url: "journey.page/launchpad/waitlist", label: "Waitlist Manager",    sublabel: "Track signups and conversions",     component: <WaitlistScreen /> },
  { url: "journey.page/launchpad/analytics",label: "Analytics",           sublabel: "Visitors, conversions, followers",  component: <AnalyticsScreen /> },
];

export function AppScreens() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (idx: number) => { setDirection(idx > current ? 1 : -1); setCurrent(idx); };

  return (
    <section ref={ref} className="py-20 sm:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">The product</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight mb-4 max-w-2xl">
            A public page your audience loves.<br /><GradientText>A private dashboard you&apos;ll rely on.</GradientText>
          </h2>
          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            Everything your followers see — and everything you need to manage it.
          </p>
        </motion.div>

        {/* Layout : page publique (gauche) + screenshots app (droite) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start"
        >
          {/* Gauche : page publique fixe dans MacFrame — desktop seulement */}
          <div className="hidden lg:block">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">What your audience sees</p>
            <MacFrame url="journey.page/launchpad">
              <PublicProjectPage />
            </MacFrame>
          </div>

          {/* Droite : 5 screenshots de l'app avec slider */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Your founder dashboard</p>
              {/* Prev / Next */}
              <div className="flex gap-2">
                <button
                  onClick={() => current > 0 && goTo(current - 1)}
                  disabled={current === 0}
                  className="w-8 h-8 rounded-xl bg-white shadow-[0_1px_6px_rgba(0,0,0,0.10)] flex items-center justify-center text-gray-400 hover:text-gray-800 disabled:opacity-30 transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => current < screenshots.length - 1 && goTo(current + 1)}
                  disabled={current === screenshots.length - 1}
                  className="w-8 h-8 rounded-xl bg-white shadow-[0_1px_6px_rgba(0,0,0,0.10)] flex items-center justify-center text-gray-400 hover:text-gray-800 disabled:opacity-30 transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <MacFrame url={screenshots[current].url}>
                  {screenshots[current].component}
                </MacFrame>
              </motion.div>
            </AnimatePresence>

            {/* Dots + label */}
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-gray-900">{screenshots[current].label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{screenshots[current].sublabel}</p>
              </div>
              <div className="flex gap-1.5">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-gray-950" : "w-2 h-2 bg-gray-200 hover:bg-gray-300"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
