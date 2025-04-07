import React from "react";
import Image from "next/image"

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="group relative w-[378px] h-[223px] rounded-[20px] transition-all duration-500 hover:shadow-[0_0_30px_rgba(115,115,115,0.1)] hover:scale-[1.02] hover:-translate-y-1">
      {/* Background with gradient border effect */}
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-primary-500/20 to-transparent" />
      
      {/* Radial strokes on sides */}
      <div className="absolute inset-0">
        {/* Left stroke */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[80%] bg-gradient-to-b from-transparent via-[#737373]/60 to-transparent opacity-80 group-hover:opacity-100 group-hover:via-[#737373]/80 transition-all duration-500 animate-pulse-slow" />
        
        {/* Right stroke */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-[80%] bg-gradient-to-b from-transparent via-[#737373]/60 to-transparent opacity-80 group-hover:opacity-100 group-hover:via-[#737373]/80 transition-all duration-500 animate-pulse-slow [animation-delay:0.5s]" />
        
        {/* Top stroke */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-[80%] bg-gradient-to-r from-transparent via-[#737373]/60 to-transparent opacity-80 group-hover:opacity-100 group-hover:via-[#737373]/80 transition-all duration-500 animate-pulse-slow [animation-delay:1s]" />
        
        {/* Bottom stroke */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-[80%] bg-gradient-to-r from-transparent via-[#737373]/60 to-transparent opacity-80 group-hover:opacity-100 group-hover:via-[#737373]/80 transition-all duration-500 animate-pulse-slow [animation-delay:1.5s]" />
      </div>
      
      {/* Main card content */}
      <div className="relative w-full h-full bg-[rgba(29,0,36,0.1)] rounded-[20px] backdrop-blur-sm border border-white/5">
        {/* Card Header Design */}
        <div className="absolute w-[200px] h-[34px] left-[89px] top-0">
          <div className="absolute w-[16px] h-[15.87px] right-0 top-[9.07px] bg-gradient-to-br from-primary-500 to-primary-200 rounded-full group-hover:scale-125 transition-transform duration-500" />
          <div className="absolute w-[96px] h-[5.67px] left-[9.14px] top-[14.73px] bg-gradient-to-r from-primary-500 to-primary-200 rounded-[2.5px] group-hover:w-[110px] transition-all duration-500 ease-out" />
        </div>

        {/* Icon Container */}
        <div className="absolute w-[44px] h-[44px] left-[20px] top-[20px]">
          <div className="w-full h-full flex items-center justify-center bg-[rgba(255,255,255,0.1)] rounded-lg group-hover:bg-[rgba(255,255,255,0.15)] group-hover:ring-1 group-hover:ring-white/20 transition-all duration-500">
          <Image
              src={icon}
              alt={`${title} icon`}
              className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
            />
            
          </div>
        </div>

        {/* Content */}
        <div className="absolute w-[338px] left-[20px] top-[96px] space-y-3.5">
          <h3 className="font-urbanist font-semibold text-[18px] leading-[140%] tracking-[0.2px] text-white group-hover:text-primary-200 transition-colors duration-500">
            {title}
          </h3>
          <p className="font-urbanist text-[14px] leading-[140%] tracking-[0.2px] text-[#BDBDBD]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};
