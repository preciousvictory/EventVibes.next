"use client";

import React from "react";
import { Navbar } from "../../components/HomeNavbar";
import HeroSection from "./NftHeroSection";
import FeaturesSection from "./NFTFeaturesSection";
import { NFTRewardsSection } from "./NFTRewardsSection";
import { Footer } from "./Footer";

const NFT: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col bg-neutral-900">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
        <NFTRewardsSection />
      
      <Footer />
    </main>
  );
};

export default NFT;
