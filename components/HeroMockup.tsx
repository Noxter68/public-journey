"use client";

import { motion } from "framer-motion";
import { Check, Users, CalendarDays } from "lucide-react";
import { BrowserFrame } from "@/components/ui/BrowserFrame";

const roadmap = [
  { label: "Auth & onboarding", done: true },
  { label: "Email sequences", done: true },
  { label: "Analytics dashboard", done: false },
  { label: "Team workspaces", done: false },
];

const SEGMENTS = 10;
const FILLED = 6;

export function HeroMockup() {
  return (
    <div className="relative">
      <BrowserFrame url="journey.page/launchpad" className="w-full max-w-lg">
        {/* Page content */}
        <div className="bg-white px-5 py-5 sm:px-8 sm:py-7">

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-violet-600 flex items-center justify-center font-bold text-white text-sm shrink-0">
              L
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-gray-900 text-sm">Launchpad</p>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-semibold">Building</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">Email marketing for indie developers</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex gap-1.5 mb-6">
            {["Dev tools", "Email", "Solo founder"].map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 font-medium">{t}</span>
            ))}
          </div>

          {/* Progress section */}
          <div className="mb-6 p-4 rounded-xl bg-gray-50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Build progress</span>
              <span className="text-2xl font-bold text-gray-900">68%</span>
            </div>
            <div className="flex gap-1 mb-2.5">
              {Array.from({ length: SEGMENTS }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.8 + i * 0.05, duration: 0.2 }}
                  className={`flex-1 h-2 rounded-full ${i < FILLED ? "bg-violet-500" : "bg-gray-200"}`}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <CalendarDays size={11} />
                Release Oct 2026
              </span>
              <span className="flex items-center gap-1">
                <Users size={11} />
                312 on waitlist
              </span>
            </div>
          </div>

          {/* Roadmap */}
          <div className="space-y-2.5 mb-6">
            {roadmap.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 ${item.done ? "bg-emerald-100" : "bg-gray-100"}`}>
                  {item.done
                    ? <Check size={11} strokeWidth={3} className="text-emerald-600" />
                    : <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                  }
                </div>
                <span className={`text-sm ${item.done ? "text-gray-400 line-through" : "text-gray-700"}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
            <div className="w-7 h-7 rounded-full bg-orange-400 shrink-0" />
            <p className="text-xs font-medium text-gray-600">@marcbuilds</p>
            <button className="ml-auto text-xs px-4 py-2 rounded-xl bg-violet-600 text-white font-semibold">
              Join waitlist
            </button>
          </div>

        </div>
      </BrowserFrame>

      {/* Floating badge: signup — desktop only */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: [0.45, 0, 0.55, 1], repeatType: "mirror" }}
        className="absolute -right-5 -top-4 hidden lg:flex items-center gap-2.5 bg-white rounded-2xl px-4 py-2.5 shadow-[0_4px_32px_rgba(0,0,0,0.10)]"
      >
        <div className="w-7 h-7 rounded-full bg-blue-400 shrink-0" />
        <div>
          <p className="text-xs font-semibold text-gray-900">@builder_mo</p>
          <p className="text-xs text-violet-500">just joined</p>
        </div>
      </motion.div>

      {/* Floating badge: watchers — desktop only */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: [0.45, 0, 0.55, 1], repeatType: "mirror", delay: 1.5 }}
        className="absolute -left-5 bottom-10 hidden lg:flex items-center gap-2 bg-emerald-50 rounded-2xl px-4 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
      >
        <Users size={13} className="text-emerald-600" />
        <p className="text-xs font-semibold text-emerald-700">247 following</p>
      </motion.div>
    </div>
  );
}
