import React from "react";
import { EventCard } from "../../components/EventCard";
import { Button } from "../../components/Button";

const events = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/b03167fcaefc45bfb39284c13d09f4f4/9e3c9e12666fba65b48baa5f1dcec8a723fe16a1?placeholderIfAbsent=true",
    title: "Karaoke Nights",
    organizer: "Sui On-campus"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/b03167fcaefc45bfb39284c13d09f4f4/b6201a1c04f40ed183576de32a92b4968dbb83b7?placeholderIfAbsent=true",
    title: "GDG Tech Fest",
    organizer: "Google Developer"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/b03167fcaefc45bfb39284c13d09f4f4/23f660152d4fb43faadde4b6c246df70b7e28062?placeholderIfAbsent=true",
    title: "React Together",
    organizer: "Lagos Club Hub"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/b03167fcaefc45bfb39284c13d09f4f4/cf45d4c0b55753a7f011855142d2e74456515577?placeholderIfAbsent=true",
    title: "Tech Meetup",
    organizer: "Sui On-campus"
  }
];

export const EventsSection: React.FC = () => {
  return (
    <section className="w-full h-[680px] bg-[#141414] relative">
      {/* Content Container */}
      <div className="max-w-[1200px] mx-auto px-4 py-[72px]">
        {/* Header */}
        <div className="flex justify-between items-start mb-[94px]">
          <div className="w-[452px]">
            <div className="flex justify-center items-center w-[88px] h-[42px] bg-[rgba(188,80,216,0.1)] rounded-full mb-5">
              <span className="font-urbanist text-base font-medium leading-[140%] tracking-[0.2px] text-center text-white">
                Events
              </span>
            </div>
            <h2 className="font-urbanist font-bold text-[40px] leading-[120%] text-white">
              Featured Events
            </h2>
          </div>
          <p className="w-[545px] font-urbanist text-lg leading-[120%] text-[#BDBDBD]">
            Explore top events, capture unforgettable moments, and be part of the most exciting experiences.
          </p>
        </div>

        {/* Event Cards */}
        <div className="flex justify-between items-center gap-5 mb-[48px]">
          {events.map((event) => (
            <EventCard
              key={`${event.title}-${event.organizer}`}
              image={event.image}
              title={event.title}
              organizer={event.organizer}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
            <Button 
            className="w-[213px] h-[60px] bg-[#73138C] hover:bg-purple-700 shadow-button animate-bounce duration-300 transition-transform cursor-pointer"
            onClick={() => console.log('Button clicked')}
            >
            Explore More Events
            </Button>
        </div>
      </div>
    </section>
  );
};
