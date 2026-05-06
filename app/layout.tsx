import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/ModalProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Public Journey — Build your SaaS in public",
  description: "Create a beautiful public project page to show your SaaS progress, roadmap, release date, updates and waitlist.",
  openGraph: {
    title: "Public Journey — One page for your SaaS journey.",
    description: "Show your progress, roadmap, updates and waitlist in one public project page.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Public Journey — One page for your SaaS journey.",
    description: "Show your progress, roadmap, updates and waitlist in one public project page.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
