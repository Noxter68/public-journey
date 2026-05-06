"use client";
import { ReactNode } from "react";

interface BrowserFrameProps {
  url: string;
  children: ReactNode;
  className?: string;
}

export function BrowserFrame({ url, children, className = "" }: BrowserFrameProps) {
  return (
    <div className={`rounded-2xl bg-white shadow-[0_4px_60px_rgba(0,0,0,0.10)] overflow-hidden ${className}`}>
      {/* Chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100 shrink-0">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex justify-center min-w-0">
          <div className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-3 py-1 text-xs text-gray-400 font-mono min-w-0 max-w-45 w-full justify-center truncate">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" className="shrink-0 text-gray-300">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="truncate">{url}</span>
          </div>
        </div>
        <div className="w-10 shrink-0 hidden sm:block" />
      </div>
      {/* Content */}
      <div className="overflow-hidden">
        {children}
      </div>
    </div>
  );
}
