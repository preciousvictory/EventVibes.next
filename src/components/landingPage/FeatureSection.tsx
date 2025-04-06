import React from "react";
import { FeatureCard } from "../../components/FeatureCard";

const features = [
  {
    icon: "/StorageIcon.svg",
    title: "Decentralized Storage",
    description: "All media is stored on decentralized networks, ensuring your memories are permanent and censorship-resistant."
  },
  {
    icon: "/search-normal.svg",
    title: "AI Powered Gallery Search",
    description: "Find specific moments using advanced AI that understands the content of your image files."
  },
  {
    icon: "/nftSymbol.svg",
    title: "POAP NFT Rewards",
    description: "Win exclusive Proof of Attendance Protocol NFTs for participating and contributing event media."
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full h-[581px] bg-[#141414] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
      {/* Background Ellipse */}
      <div className="absolute w-[572px] h-[566px] left-[434px] top-[299px] bg-gradient-blur opacity-60" />
      
      {/* Additional subtle gradient lines */}
      <div className="absolute inset-0 bg-[linear-gradient(287.09deg,rgba(77,3,96,0.16)_24.87%,rgba(145,5,181,0.4)_137.7%)] opacity-10" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1200px] mx-auto px-4 py-[72px]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-20 mb-[60px]">
        <div className="flex flex-col items-start gap-5 w-full lg:w-[452px]">
        <div className="inline-flex items-center px-5 py-2.5 bg-[rgba(188,80,216,0.1)] rounded-full">
          <span className="font-urbanist text-base font-medium leading-[140%] tracking-[0.2px] text-white">
          Our Features
          </span>
        </div>
        <h2 className="font-urbanist font-bold text-[40px] leading-[120%] text-white">
          Powered by Web3 Technology
        </h2>
        </div>
        <p className="w-full lg:w-[545px] font-urbanist font-normal text-lg leading-[140%] text-[#BDBDBD]">
        Our platform leverages decentralized storage, AI-powered search, and blockchain rewards to create a unique experience for event participants.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 overflow-x-auto lg:overflow-visible px-4 -mx-4">
        {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
        ))}
      </div>
      </div>
    </section>
  );
};
