import React from "react";
import { ProcessCard } from "../../components/ProcessCard"

const processes = [
  {
    icon: "/folder-add.svg",
    title: "Create or Join an Event",
    description: "Host your own event or explore a variety of exciting events happening around you. Connect with like-minded people and be part of unforgettable experiences."
  },
  {
    icon: "upload-icon.svg",
    title: "Capture and Upload Moments",
    description: "Take photos and upload them to the event gallery. Our AI auto-generates metadata tags to enhance discoverability and authenticity."
  },
  {
    icon: "NFTSYMBOLGradient.svg",
    title: "Earn Exclusive NFT Rewards",
    description: "Upload at least three images at an event location and get rewarded with a unique NFT. These digital collectibles prove your presence and engagement."
  }
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="w-full bg-[#141414] relative pb-32">
      {/* Background Gradient - Adjusted position to extend lower */}
      <div className="absolute w-[572px] h-[680px] left-[434px] top-[299px] bg-gradient-blur" />

      {/* Content Container */}
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex justify-center items-center px-5 py-2.5 bg-[rgba(188,80,216,0.1)] rounded-full mb-5">
        <span className="font-urbanist text-base font-medium leading-[140%] tracking-[0.2px] text-white">
          How it works
        </span>
          </div>
          <div className="w-[743px] text-center">
        <h2 className="font-urbanist font-bold text-[40px] leading-[120%] text-white mb-3.5">
          Create, Capture, and Earn
        </h2>
        <p className="font-urbanist text-lg leading-[120%] text-[#BDBDBD]">
          Join events, upload your best moments, and unlock exclusive NFT rewards—all powered by Web3 technology.
        </p>
          </div>
        </div>

        {/* Process Cards */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/30 to-transparent blur-xl" />
          <div className="relative flex justify-between items-center gap-10">
        {processes.map((process) => (
          <ProcessCard
            key={process.title}
            icon={process.icon}
            title={process.title}
            description={process.description}
          />
        ))}
          </div>
        </div>
      </div>
    </section>
  );
};
