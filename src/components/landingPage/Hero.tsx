"use client";

import React from "react";
import { Button } from "../../components/Button";
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[720px] bg-[#141414] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/ImagesBackground.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to ensure text visibility */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        {/* Added SVG overlay */}
        <img 
          src="/overlay.svg" 
          alt="Overlay" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      {/* Purple Gradient Blobs */}
      <div className="absolute w-full h-[1000px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-[572px] h-[566px] left-[-157px] top-[-142px] bg-gradient-to-tr from-[rgba(77,3,96,0.16)] to-[rgba(145,5,181,0.4)] blur-[200px]" />
        <div className="absolute w-[572px] h-[566px] right-[-96px] top-[141px] bg-gradient-to-tr from-[rgba(77,3,96,0.16)] to-[rgba(145,5,181,0.4)] blur-[200px]" />
        <div className="absolute w-[572px] h-[566px] left-[207px] top-[651px] bg-gradient-to-tr from-[rgba(77,3,96,0.16)] to-[rgba(145,5,181,0.4)] blur-[200px]" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1440px] mx-auto px-4">
        {/* New Feature Badge */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[163px] flex items-center py-2.5 px-3.5 gap-3.5 bg-[rgba(188,80,216,0.1)] rounded-full">
          <span className="px-3 py-2 bg-[#FF845B] text-white text-base font-medium rounded-full">
            New
          </span>
          <div className="flex items-center gap-2 text-white">
            <span className="text-base font-medium">Exclusive NFT Rewards</span>
            <img src="/arrow-right-1.svg" alt="arrow" className="w-4 h-4" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center pt-[245px] max-w-[926px] mx-auto text-center">
            <h1 className="font-urbanist font-bold text-5xl leading-[140%] text-white mb-4 max-md:text-4xl max-md:leading-[130%]">
            Own Your <span className="text-[#73138C]">Event Moments,</span>
            <br />
            Search with AI & Win Exclusive NFTs
            </h1>
          <p className="font-urbanist font-medium text-lg leading-[140%] tracking-[0.2px] text-[#F5F5F5] max-w-[714px] mb-10 max-md:text-base">
          Store your event media, search with AI, and earn exclusive POAP NFTs for your participation-All powered by Web3.          </p>
          
          {/* Buttons */}
          <div className="flex gap-4 items-center">
            <Button 
              className="w-[180px] h-[60px] bg-[#73138C] font-urbanist text-lg shadow-[0_48px_48px_-32px_rgba(28,32,40,0.5)] backdrop-blur-[50px] rounded-full hover:bg-[#8A1BA8] transition-colors"
              onClick={() => {
              const eventsSection = document.getElementById('events');
              if (eventsSection) {
                eventsSection.scrollIntoView({ behavior: 'smooth' });
              }
              }}
            >
              Explore Events
            </Button>
            <Button 
              variant="secondary" 
              className="w-[180px] h-[60px] bg-[rgba(18,18,18,0.2)] font-urbanist text-lg rounded-full hover:bg-[rgba(18,18,18,0.3)] transition-colors"
              onClick={() => {
              const featuresSection = document.getElementById('features');
              if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
              }
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <motion.div 
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="flex flex-col items-center">
        <span className="text-white/50 text-base mb-3"></span>
        <div className="w-8 h-14 border-3 border-white/30 rounded-full flex justify-center p-2">
          <motion.div 
            className="w-2 h-2 bg-white rounded-full"
            animate={{
          y: [0, 16, 0]
            }}
            transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop"
            }}
          />
        </div>
          </div>
        </motion.div>
    </section>
  );
};
