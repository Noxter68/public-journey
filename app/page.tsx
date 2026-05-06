import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { AppScreens } from "@/components/sections/AppScreens";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BuiltForSharing } from "@/components/sections/BuiltForSharing";
import { Community } from "@/components/sections/Community";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <AppScreens />
        <HowItWorks />
        <BuiltForSharing />
        <Community />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
