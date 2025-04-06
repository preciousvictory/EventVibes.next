"use client";

import React from "react";
import { Button } from "../../components/Button";

export const NFTSection: React.FC = () => {
  return (
    <section className="relative w-full h-[676px] bg-[#141414]">
      {/* Background Gradient */}
      <div className="absolute w-[572px] h-[566px] left-[434px] top-[299px] bg-gradient-to-tr from-[rgba(77,3,96,0.16)] to-[rgba(145,5,181,0.4)] blur-[200px]" />

      {/* Featured NFT Card */}
      <div className="absolute w-[580px] h-[532px] left-[740px] top-[72px] bg-white rounded-[20px]">
        {/* NFT Card Content */}
        <div className="box-border w-[377px] h-[414px] absolute left-[50px] top-[75px] bg-[#373737] rounded-xl">
          {/* NFT Image */}
          <div className="absolute w-[400px] h-[284px] left-1/2 -translate-x-1/2 top-0 bg-cover bg-center" 
               style={{ backgroundImage: "url('/images/nft-image.jpg')" }} />

          {/* NFT Info */}
          <div className="absolute left-5 top-[313px] flex flex-col gap-5">
            <h3 className="text-2xl font-semibold text-white">Event Star Badge</h3>
            <div className="flex items-center gap-1">
              <span className="text-xs font-medium text-white underline">0x9f3a7b2c8.....0d9e3a2b6d</span>
              <img src="/arrow-right-1.svg" alt="arrow" className="w-3 h-3" />
            </div>
          </div>

          {/* Share Button */}
          <div className="absolute w-12 h-12 right-5 top-[260px] flex items-center justify-center bg-[#373737] border border-[rgba(55,55,55,0.4)] shadow-[4px_12px_32px_rgba(88,76,244,0.2)] rounded-full">
            <img src="/arrow-right-1.svg" alt="share" className="w-5 h-5 transform -rotate-35" />
          </div>
        </div>

        {/* Success Notification */}
        <div className="absolute w-[303px] h-[88px] left-[239px] top-[59px] bg-white border border-primary-500 shadow-[4px_12px_32px_rgba(88,76,244,0.2)] rounded-lg p-[13px]">
          <div className="flex gap-2.5">
            <div className="w-6 h-6 text-[#07BD74]">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm4.78 7.7l-5.67 5.67a.75.75 0 01-1.06 0l-2.83-2.83a.754.754 0 011.06-1.06l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0 .29.29.29.76 0 1.06z"/>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-semibold text-[#424242]">Event Start NFT Claimed!</h4>
              <p className="text-[10px] text-[#757575]">Check your profile to view your claimed NFT artworks.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="absolute w-[557px] left-[120px] top-[152px] flex flex-col gap-11">
        <h2 className="text-[48px] font-semibold leading-[130%] tracking-[-0.02em] text-white">
          Join events and unlock the chance to earn exclusive NFTs
        </h2>
        <Button className="w-[197px] h-[60px] bg-primary-500 shadow-button">
          <span className="text-lg font-medium tracking-[0.2px]">Start Collecting</span>
        </Button>
      </div>

      {/* Background Image Overlay */}
      <div 
        className="absolute w-[1512px] h-[640px] left-[-86px] top-[-38px] bg-[rgba(68,2,86,0.85)] bg-blend-overlay"
        style={{ backgroundImage: "url('/images/nft-bg.jpg')" }}
      />
    </section>
  );
};