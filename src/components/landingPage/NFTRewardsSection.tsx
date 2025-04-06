import React from "react";
import { Button } from "../../components/Button";

export const NFTRewardsSection: React.FC = () => {
  return (
    <section className="w-full h-[600px] bg-[#141414] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute w-[572px] h-[566px] left-[434px] top-[299px] bg-gradient-blur" />

      {/* Content Container */}
      <div className="max-w-[1200px] mx-auto px-4 pb-4 relative">
        <div className="flex justify-between items-center gap-20">
          {/* Left Content */}
          <div className="flex flex-col gap-11 w-[557px]">
            <h2 className="font-urbanist font-semibold text-[48px] leading-[130%] tracking-[-0.02em] text-white">
              Join events and unlock the chance to earn exclusive NFTs
            </h2>
            <Button className="w-[197px] h-[60px] bg-[#73138C] shadow-button">
              Get Started & Win
            </Button>
          </div>

          {/* Right Content - NFT Card */}
          <div className="w-[580px] h-[532px] bg-white rounded-[20px] relative">
            {/* NFT Card Mock */}
            <div className="absolute w-full h-full bg-[#373737] rounded-[20px] overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b03167fcaefc45bfb39284c13d09f4f4/f6d1be18cd15e6bba449b96fc209d4c4339280a5?placeholderIfAbsent=true"
                alt="Event Star Badge Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute left-5 bottom-8">
                <div className="flex items-center gap-1">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient SVG */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <svg width="1372" height="676" viewBox="0 0 1372 676" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_161_3135)">
            <ellipse cx="686" cy="582" rx="286" ry="283" fill="url(#paint0_linear_161_3135)" fillOpacity="0.4"/>
          </g>
          <defs>
            <filter id="filter0_f_161_3135" x="0" y="-101" width="1372" height="1366" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_161_3135"/>
            </filter>
            <linearGradient id="paint0_linear_161_3135" x1="1015.41" y1="582" x2="116.896" y2="302.829" gradientUnits="userSpaceOnUse">
              <stop offset="0.14362" stopColor="#4D0360" stopOpacity="0.4"/>
              <stop offset="1" stopColor="#9105B5"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};
