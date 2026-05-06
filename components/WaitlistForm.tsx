"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { waitlistSchema, type WaitlistFormData } from "@/lib/waitlist";
import { Check, ArrowRight, Loader2, Lightbulb, Hammer, Lock, Globe, Rocket, ChevronDown } from "lucide-react";

const stages = [
  { value: "idea",         label: "Idea",         sub: "Just getting started",          Icon: Lightbulb },
  { value: "building",     label: "Building",     sub: "Actively coding and shipping",  Icon: Hammer    },
  { value: "private_beta", label: "Private beta", sub: "Testing with early users",      Icon: Lock      },
  { value: "public_beta",  label: "Public beta",  sub: "Open to more users",            Icon: Globe     },
  { value: "launched",     label: "Launched",     sub: "Live and generating revenue",   Icon: Rocket    },
];

const inputCls = "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:bg-white transition-all";
const labelCls = "block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide";

function StageSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const selected = stages.find(s => s.value === value);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-left flex items-center gap-3 focus:outline-none focus:border-gray-400 focus:bg-white transition-all hover:bg-white"
      >
        {selected ? (
          <>
            <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
              <selected.Icon size={14} className="text-gray-600" />
            </div>
            <span className="text-gray-900 font-medium flex-1">{selected.label}</span>
          </>
        ) : (
          <span className="text-gray-400 flex-1">Select your stage</span>
        )}
        <ChevronDown size={15} className={`text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-200 top-full mt-2 w-full bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.14)] border border-gray-100 overflow-hidden"
          >
            {stages.map(s => (
              <button
                key={s.value}
                type="button"
                onClick={() => { onChange(s.value); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-gray-50 transition-colors ${s.value === value ? "bg-gray-50" : ""}`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${s.value === value ? "bg-gray-900" : "bg-gray-100"}`}>
                  <s.Icon size={15} className={s.value === value ? "text-white" : "text-gray-500"} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">{s.label}</p>
                  <p className="text-xs text-gray-400">{s.sub}</p>
                </div>
                {s.value === value && <Check size={14} className="text-gray-900 shrink-0" strokeWidth={2.5} />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const hypeOptions = [
  { score: 1, emoji: "🥱", label: "Not really" },
  { score: 2, emoji: "😐", label: "Maybe" },
  { score: 3, emoji: "🙂", label: "Interested" },
  { score: 4, emoji: "😃", label: "Excited" },
  { score: 5, emoji: "🔥", label: "Can't wait" },
];

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [hypeScore, setHypeScore] = useState<number | null>(null);

  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, hypeScore: hypeScore ?? undefined }),
      });
      const json = await res.json();
      if (!res.ok) { setServerError(json.error ?? "Something went wrong."); return; }
      setSubmitted(true);
    } catch {
      setServerError("Network error. Please try again.");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-5">
            <Check size={24} className="text-emerald-600" strokeWidth={2.5} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">You&apos;re on the list.</h3>
          <p className="text-gray-500">We&apos;ll reach out when early access opens.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Email *</label>
              <input {...register("email")} type="email" placeholder="you@example.com" className={inputCls} />
              {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email.message}</p>}
            </div>
            <div>
              <label className={labelCls}>Project name *</label>
              <input {...register("projectName")} placeholder="Launchpad" className={inputCls} />
              {errors.projectName && <p className="text-xs text-red-500 mt-1.5">{errors.projectName.message}</p>}
            </div>
          </div>

          <div>
            <label className={labelCls}>Project stage *</label>
            <Controller
              name="projectStage"
              control={control}
              defaultValue={"" as WaitlistFormData["projectStage"]}
              render={({ field }) => (
                <StageSelect value={field.value} onChange={field.onChange} />
              )}
            />
            {errors.projectStage && <p className="text-xs text-red-500 mt-1.5">{errors.projectStage.message}</p>}
          </div>

          <div>
            <label className={labelCls}>X handle <span className="normal-case font-normal text-gray-400">(optional)</span></label>
            <input {...register("twitterHandle")} placeholder="@yourhandle" className={inputCls} />
          </div>

          <div>
            <label className={labelCls}>Description <span className="normal-case font-normal text-gray-400">(optional)</span></label>
            <input {...register("projectDescription")} placeholder="What are you building?" className={inputCls} />
          </div>

          <div>
            <label className={labelCls}>How excited are you? <span className="normal-case font-normal text-gray-400">(optional)</span></label>
            <div className="flex gap-2">
              {hypeOptions.map(({ score, emoji, label }) => (
                <button
                  key={score}
                  type="button"
                  onClick={() => setHypeScore(hypeScore === score ? null : score)}
                  title={label}
                  className={`flex-1 flex flex-col items-center gap-1 py-2.5 rounded-xl border text-lg transition-all ${
                    hypeScore === score
                      ? "border-gray-900 bg-gray-950 scale-105 shadow-sm"
                      : "border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300"
                  }`}
                >
                  <span>{emoji}</span>
                  <span className={`text-[10px] font-medium ${hypeScore === score ? "text-white" : "text-gray-400"}`}>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {serverError && <p className="text-sm text-red-500 text-center">{serverError}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-xl bg-gray-950 text-white font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
          >
            {isSubmitting
              ? <><Loader2 size={15} className="animate-spin" />Joining...</>
              : <>Get early access <ArrowRight size={15} /></>
            }
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
