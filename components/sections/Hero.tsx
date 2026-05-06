"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroMockup } from "@/components/HeroMockup";
import { GradientText } from "@/components/ui/GradientText";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/components/ModalProvider";

export function Hero() {
  const { open } = useModal();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const brandY = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-24 pb-0 overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, white 0%, transparent 100%)" }}
      />

      {/* PUBLIC JOURNEY — parallax, gradient sur tout le texte */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-x-0 top-36 pointer-events-none select-none text-center text-[1.8rem] xs:text-[2.5rem] sm:text-[4rem] lg:text-[7rem] font-black tracking-tight leading-none bg-linear-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
        style={{
          y: brandY,
          maskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
        }}
      >
        PUBLIC JOURNEY
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full pt-24 sm:pt-44 pb-10 sm:pb-20">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-20 items-center">

          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs font-semibold border border-violet-100">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                Early access — limited spots
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-gray-950"
            >
              Build your SaaS<br />in public with a page<br />
              <GradientText>people follow.</GradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-500 leading-relaxed max-w-md"
            >
              One beautiful public page for your roadmap, progress,
              waitlist and updates. Built for founders who build in public.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3 pt-2"
            >
              <button
                onClick={open}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gray-950 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
              >
                Get early access <ArrowRight size={15} />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 1.11, 0.81, 0.99] }}
          >
            <HeroMockup />
          </motion.div>

        </div>
      </div>


    </section>
  );
}
