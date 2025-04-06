import React from "react";

interface ProcessCardProps {
  icon: string;
  title: string;
  description: string;
}

export const ProcessCard: React.FC<ProcessCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="w-[378px] h-[293px] bg-[#141414] rounded-[20px] relative group hover:shadow-[0_0_30px_rgba(115,115,115,0.1)] hover:scale-[1.02] transition-all duration-500 hover:-translate-y-1">
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
      
      {/* SVG Header - Fixed positioning */}
      <div className="absolute top-[10px] left-0 right-0 flex justify-center items-center">
        <svg width="200" height="34" viewBox="0 0 200 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-105 transition-transform duration-500">
          <mask id="path-1-inside-1" fill="white">
            <path d="M0 0H200V22C200 28.6274 194.627 34 188 34H12C5.37258 34 0 28.6274 0 22V0Z"/>
          </mask>
          <path d="M0 0H200H0ZM201 22C201 29.1797 195.18 35 188 35H12C4.8203 35 -1 29.1797 -1 22H1C1 28.0751 5.92487 33 12 33H188C194.075 33 199 28.0751 199 22H201ZM12 35C4.8203 35 -1 29.1797 -1 22V0H1V22C1 28.0751 5.92487 33 12 33V35ZM201 0V22C201 29.1797 195.18 35 188 35V33C194.075 33 199 28.0751 199 22V0H201Z" fill="url(#paint0_radial)" mask="url(#path-1-inside-1)"/>
          <path d="M190.357 17C190.357 21.1014 187.003 24.4333 182.857 24.4333C178.711 24.4333 175.357 21.1014 175.357 17C175.357 12.8986 178.711 9.56665 182.857 9.56665C187.003 9.56665 190.357 12.8986 190.357 17Z" fill="#73138C" className="group-hover:fill-primary-500 transition-colors duration-500"/>
          <path className="group-hover:fill-primary-500 transition-colors duration-500" d="M9.14282 17.2334C9.14282 15.8527 10.2621 14.7334 11.6428 14.7334H102.643C104.024 14.7334 105.143 15.8527 105.143 17.2334V17.9001C105.143 19.2808 104.024 20.4001 102.643 20.4001H11.6428C10.2621 20.4001 9.14282 19.2808 9.14282 17.9001V17.2334Z" fill="#73138C"/>
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 17) rotate(90) scale(22.869 134.524)">
              <stop stopColor="#D9D9D9"/>
              <stop offset="1" stopColor="#737373" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Icon Container */}
      <div className="absolute left-[30px] top-[77px]">
        <div className="flex items-center justify-center w-[52px] h-[48px] bg-[rgba(255,255,255,0.1)] rounded-lg group-hover:bg-[rgba(255,255,255,0.15)] group-hover:ring-1 group-hover:ring-white/20 transition-all duration-500">
          {typeof icon === "string" ? (
            // If icon is a string path, render an image
            <img
              src={icon}
              alt={`${title} icon`}
              className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
            />
          ) : (
            // If icon is a component, render the component
            React.createElement(icon, {
              className: "w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
            })
          )}
        </div>
      </div>

      {/* Content */}
      <div className="absolute left-[30px] top-[157px]">
        <h3 className="font-urbanist font-medium text-[20px] leading-[120%] text-white mb-8">
          {title}
        </h3>
        <p className="font-urbanist font-normal text-sm leading-[120%] text-[#9E9E9E] w-[312px]">
          {description}
        </p>
      </div>
    </article>
  );
};
