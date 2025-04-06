import React from "react";

interface EventCardProps {
  image: string;
  title: string;
  organizer: string;
  likes?: number;
}

export const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  organizer,
  likes = 43,
}) => {
  return (
    <article className="w-[278px] h-[270px] bg-white rounded-2xl overflow-hidden shadow-[4px_12px_20px_rgba(63,2,79,0.32)] relative">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute left-0 bottom-0 w-full h-[93px] bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full px-[17px] py-[17px]">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-0.5">
            <h3 className="font-urbanist font-semibold text-lg leading-[120%] text-white">
              {title}
            </h3>
            <p className="font-urbanist font-medium text-xs leading-[120%] text-[#E0E0E0]">
              From: {organizer}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="stroke-[#EEEEEE] stroke-[1.2px]"
            >
              <path d="M8.41331 13.8733C8.18665 13.9533 7.81331 13.9533 7.58665 13.8733C5.65331 13.2133 1.33331 10.46 1.33331 5.79333C1.33331 3.73333 2.99331 2.06667 5.03998 2.06667C6.25331 2.06667 7.32665 2.65333 7.99998 3.56C8.67331 2.65333 9.75331 2.06667 10.96 2.06667C13.0066 2.06667 14.6666 3.73333 14.6666 5.79333C14.6666 10.46 10.3466 13.2133 8.41331 13.8733Z" />
            </svg>
            <span className="font-urbanist font-medium text-xs leading-[120%] text-white">
              {likes}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
