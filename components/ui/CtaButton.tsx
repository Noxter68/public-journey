"use client";

import { ArrowRight } from "lucide-react";
import { useModal } from "@/components/ModalProvider";

interface CtaButtonProps {
  label?: string;
  className?: string;
}

export function CtaButton({ label = "Get early access", className = "" }: CtaButtonProps) {
  const { open } = useModal();
  return (
    <button
      onClick={open}
      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-950 text-white text-sm font-semibold hover:bg-gray-800 transition-colors ${className}`}
    >
      {label} <ArrowRight size={15} />
    </button>
  );
}
