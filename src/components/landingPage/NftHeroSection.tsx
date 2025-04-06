import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative self-center mt-20 pt-20 w-full max-w-[1214px] max-md:mt-10 max-md:pt-6 max-md:max-w-full overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute w-[572px] h-[566px] right-0 top-0 bg-gradient-blur" />
      
      <div className="flex gap-5 max-md:flex-col relative z-10">
        <div className="w-[61%] max-md:ml-0 max-md:w-full">
          <div className="z-10 mt-12 mr-0 text-white px-6 max-md:mt-10 max-md:max-w-full">
        <h1 className="text-4xl font-bold leading-[52px] max-md:max-w-full max-md:text-3xl max-md:leading-[48px]">
          Earn & Own Exclusive NFT Rewards from Your Favorite Events
        </h1>
        <p className="mt-8 text-lg font-medium leading-6 max-md:max-w-full">
          Capture event moments, unlock exclusive NFTs, and showcase them in
          your collection. Your memories, secured on the blockchain.
        </p>
        <div className="flex justify-end mt-5 w-full">
          <svg width="102" height="58" viewBox="0 0 102 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="29" cy="29" r="29" fill="#73138C"/>
            <circle cx="73" cy="29" r="29" fill="white"/>
          </svg>
        </div>
          </div>
        </div>
        <div className="ml-5 w-[39%] max-md:ml-0 max-md:w-full">
          <img
        src="https://cdn.builder.io/api/v1/image/assets/b03167fcaefc45bfb39284c13d09f4f4/f0c778174752eb6de3aaee9c994e71c4d1b3f17b?placeholderIfAbsent=true"
        alt="NFT Rewards Illustration"
        className="object-contain grow w-full aspect-[1.25] max-md:max-w-full"
          />
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

export default HeroSection;