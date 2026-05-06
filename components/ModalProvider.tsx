"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { EarlyAccessModal } from "@/components/EarlyAccessModal";

const ModalContext = createContext<{ open: () => void }>({ open: () => {} });

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <EarlyAccessModal open={isOpen} onClose={() => setIsOpen(false)} />
    </ModalContext.Provider>
  );
}
