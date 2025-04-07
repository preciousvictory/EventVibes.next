"use client";

import { Navbar } from "@/components/HomeNavbar";
import { EventsSection } from "@/components/landingPage/EventSection";
import { FeaturesSection } from "@/components/landingPage/FeatureSection";
import { Footer } from "@/components/landingPage/Footer";
import { Hero } from "@/components/landingPage/Hero";
import { HowItWorksSection } from "@/components/landingPage/HowitWorksSection";
import { NFTRewardsSection } from "@/components/landingPage/NFTRewardsSection";
import { StatsSection } from "@/components/landingPage/StatsSection";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <main className="relative min-h-screen w-full bg-[#141414] overflow-x-hidden scroll-smooth">
      {/* Background Bubbles - Desktop */}
      <div className="hidden lg:block absolute w-full max-w-[1440px] h-[1000px] left-1/2 -translate-x-1/2 top-0">
        <div className="absolute w-[572px] h-[566px] left-[-157px] top-[-142px] bg-gradient-blur opacity-60" />
        <div className="absolute w-[572px] h-[566px] right-[-96px] top-[141px] bg-gradient-blur opacity-60" />
        <div className="absolute w-[572px] h-[566px] left-[207px] top-[651px] bg-gradient-blur opacity-60" />
      </div>

      {/* Background Bubbles - Mobile */}
      <div className="lg:hidden absolute w-full h-[600px] top-0">
        <div className="absolute w-[300px] h-[300px] left-[-50px] top-[-50px] bg-gradient-blur opacity-40" />
        <div className="absolute w-[300px] h-[300px] right-[-50px] top-[100px] bg-gradient-blur opacity-40" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1440px] mx-auto">
        {/* Navigation */}
        <Navbar />
        
        {/* Main Sections */}
        <div className="relative">
          {/* Hero Section */}
          <section id="hero" className="relative scroll-mt-[118px]">
            <Hero />
          </section>

          {/* Stats Section */}
          <StatsSection />

          {/* Features Section */}
          <section id="features" className="relative scroll-mt-[118px]">
            <FeaturesSection />
          </section>

          {/* Events Section */}
          <section id="events" className="relative scroll-mt-[118px]">
            <EventsSection />
          </section>

          {/* How it Works Section */}
          <section id="how-it-works" className="relative scroll-mt-[118px]">
            <HowItWorksSection />
          </section>

          {/* NFT Rewards Section */}
          <section id="nft-rewards" className="relative scroll-mt-[118px]">
            <NFTRewardsSection />
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
