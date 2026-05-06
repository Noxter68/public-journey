"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
