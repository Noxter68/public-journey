"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`rounded-2xl border border-gray-100 bg-white ${className}`}>
      {children}
    </div>
  );
}
