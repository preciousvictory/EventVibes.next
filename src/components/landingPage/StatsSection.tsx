import React from "react";

interface StatItemProps {
  number: string;
  title: string;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-start gap-3 w-[280px]">
      <h3 className="font-poppins text-[56px] font-semibold leading-[120%] tracking-[-0.01em] text-[#73138C]">
      {number}
      </h3>
      <div className="flex flex-col items-start gap-2 w-full">
      <h4 className="font-urbanist text-lg font-semibold leading-[120%] text-white">
        {title}
      </h4>
      <p className="font-urbanist text-base font-medium leading-[26px] text-[#BDBDBD]">
        {description}
      </p>
      </div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="relative w-full h-[694px] bg-[#141414]">
      {/* Background Element */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b03167fcaefc45bfb39284c13d09f4f4/c2e68f7b61ee2a7960c5cd266f8df13d83d4a61c?placeholderIfAbsent=true"
          alt="Background"
          className="object-cover w-full h-full opacity-20"
        />
        {/* Add diagonal lines here if needed */}
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1200px] mx-auto h-full flex justify-between items-center gap-14 px-4">
        {/* Left Content */}
        <div className="flex flex-col gap-12 w-[592px] max-w-full">
          <h2 className="font-urbanist font-semibold text-[48px] leading-[130%] tracking-[-0.02em] text-white">
            Discover unforgettable events, capture memories that last powered by Web3
          </h2>
            <div className="flex gap-8 items-start">
            <StatItem
              number="900+"
              title="Events completed"
              description="We've helped build over 900 amazing events."
            />
            <StatItem
              number="500+"
              title="NFT Rewards"
              description="Over 500 plus exclusive NFT rewards have been issued."
            />
            </div>
        </div>

        {/* Right Content - Image */}
        <div className="w-[538px] h-[526px] rounded-[20px] overflow-hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b03167fcaefc45bfb39284c13d09f4f4/2e796ae602814512abcf6ac9097b47ecf939f3ec?placeholderIfAbsent=true"
            alt="Events showcase"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Background Gradient Elements */}
        <div className="absolute w-[366px] h-[366px] right-[-196px] top-[417px] bg-primary-500 rounded-full rotate-90 opacity-50" />
        <div className="absolute w-[366px] h-[366px] right-[-184px] top-[730px] bg-secondary-400 rounded-full transform -rotate-[147deg] opacity-50" />
      </div>
    </section>
  );
};
