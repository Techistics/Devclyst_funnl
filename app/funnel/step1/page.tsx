"use client";

import { useState } from "react";
import TopBar from "@/components/funnel/TopBar";
import HeroSection from "@/components/funnel/HeroSection";
import MarqueeTicker from "@/components/funnel/MarqueeTicker";
import PackageCards from "@/components/funnel/PackageCards";
import PortfolioGrid from "@/components/funnel/PortfolioGrid";
import HowItWorks from "@/components/funnel/HowItWorks";
import FAQAccordion from "@/components/funnel/FAQAccordion";
import ScarcityBar from "@/components/funnel/ScarcityBar";
import BookingForm from "@/components/funnel/BookingForm";

export default function FunnelStep1() {
  const [preSelectedPlan, setPreSelectedPlan] = useState<string | null>(null);

  return (
    <>
      <TopBar />
      <main>
        <HeroSection />
        <MarqueeTicker />
        <PackageCards onSelectPlan={(plan) => setPreSelectedPlan(plan)} />
        <MarqueeTicker />
        <PortfolioGrid />
        <HowItWorks />
        <FAQAccordion />
        <section id="book-form" className="bg-[#F9FAFB] py-[56px] md:py-[80px]">
          <div className="container mx-auto px-5 md:px-10 max-w-[1100px]">
            <ScarcityBar />
            <BookingForm defaultPlan={preSelectedPlan} />
          </div>
        </section>
      </main>
      <footer className="bg-white border-t border-gray-200 h-14 flex items-center justify-center">
        <p className="text-[13px] text-gray-400">© 2025 DevClyst · devclyst.com · WhatsApp: +923704640009</p>
      </footer>
    </>
  );
}
