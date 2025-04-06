"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { cn } from "../lib/utils";
import { EventVibesLogo } from "../assets/Logo";
import SearchInput from "./ui/SearchInput";
import AnimatedButton from "./ui/Button";
import { useRouter } from 'next/navigation';

const navLinks = [
  { name: "Home", href: "#hero", sectionId: "hero", isPage: false },
  { name: "Explore Events", href: "#events", sectionId: "events", isPage: false },
  { name: "How it works", href: "#how-it-works", sectionId: "how-it-works", isPage: false },
  { name: "NFT Rewards", href: "/nft", sectionId: "nft-rewards", isPage: true }
] as const;


export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Scroll progress animations
  const { scrollYProgress } = useScroll();
  const lineWidth = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.2], [0.2, 0.5]);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background opacity based on scroll
      setIsScrolled(window.scrollY > 50);

      // Find the active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.sectionId));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const currentSection = sections.reduce((active, section) => {
        if (!section) return active;
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          return section.id;
        }
        return active;
      }, "hero");

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = (link: typeof navLinks[number]) => {
    if (link.isPage) {
      // Navigate to a different page
      window.location.href = link.href;
    } else {
      // Check if we're on the landing page
      const isOnLandingPage = window.location.pathname === '/';

      if (isOnLandingPage) {
        // Scroll to section if on landing page
        scrollToSection(link.sectionId);
      } else {
        // Navigate to landing page with section hash
        window.location.href = '/' + link.href;
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full h-fit py-6 left-0 top-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-[#141414]/90 backdrop-blur-md shadow-lg'
          : 'bg-[rgba(40,40,40,0.3)]'
        }`} 
    > 
      <nav className="max-w-[1440px] mx-auto h-full px-16 "> 
        <div className="flex items-center justify-between h-full relative"> 
          {/* Logo */} 
          <motion.button
            className="flex cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.2,  }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <EventVibesLogo />
          </motion.button>

          {/* Navigation Links */}
          <ul className="hidden lg:flex gap-6 items-center">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.05, backgroundColor: "var(--primary)", borderRadius: "8px", padding: "8px 16px", cursor: "pointer" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <button 
                  onClick={() => handleNavClick(link)}
                  className={cn(
                    activeSection === link.sectionId
                      ? "font-bold text-primary-200"
                      : "font-medium text-white/80 hover:text-primary-200"
                  )}
                >
                  {link.name}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Search and Connect Wallet */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <SearchInput placeholder="Search Event... " />
            </div>
            <AnimatedButton
              onClick={() => router.push('/auth/connectwallet')}
              className="cursor-pointer shadow-black/75 shadow-xl hover:shadow-lg transition-shadow"
            >
              Connect Wallet
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </>
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          <AnimatePresence mode="wait">
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="fixed top-[118px] left-0 w-full bg-[#141414]/95 backdrop-blur-md py-4 lg:hidden"
              >
                <ul className="flex flex-col gap-4 px-4 max-w-[1440px] mx-auto">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <motion.button
                        onClick={() => scrollToSection(link.sectionId)}
                        className={cn(
                          "block w-full px-4 py-2 font-urbanist text-lg tracking-[0.2px] leading-[140%] transition-all duration-300 rounded-full",
                          activeSection === link.sectionId
                            ? "font-bold text-primary-200"
                            : "font-medium text-white/80 hover:text-primary-200"
                        )}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      >
                        <span className="relative">
                          {link.name}
                          {activeSection === link.sectionId && (
                            <motion.div
                              layoutId="mobileNavIndicator"
                              className="absolute -bottom-2 left-0 w-full"
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                              }}
                            >
                              <motion.img
                                src={activeSection === "hero" ? "/LineHome.svg" : "/LineTabs.svg"}
                                alt={activeSection === "hero" ? "Home indicator" : "Tab indicator"}
                                className="w-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                              />
                              {/* Glow Effect */}
                              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4">
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-200/20 to-transparent blur-lg" />
                              </div>
                            </motion.div>
                          )}
                        </span>
                      </motion.button>
                    </li>
                  ))}
                  <li className="pt-4">
                    <AnimatedButton
                      onClick={() => router.push('/auth/connectwallet')}
                      className="cursor-pointer shadow-black/75 shadow-xl hover:shadow-lg transition-shadow"
                    >
                      Connect Wallet 
                    </AnimatedButton>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active Nav Indicator */}
          <div
            className="hidden lg:block absolute -bottom-2 transition-all duration-300"
            style={{
              left: activeSection === "hero" ? "172px" :
                activeSection === "events" ? "280px" :
                  activeSection === "how-it-works" ? "460px" :
                    activeSection === "NFT Rewards" ? "500px" : "626px",
              width: activeSection === "hero" ? "94px" : "134px"
            }}
          >
            <motion.div
              layoutId="navIndicator"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {activeSection === "hero" ? (
                <motion.img
                  src="/LineHome.svg"
                  alt="Home indicator"
                  style={{
                    scale: lineWidth,
                    opacity: lineOpacity
                  }}
                />
              ) : (
                <motion.img
                  src="/LineTabs.svg"
                  alt="Tab indicator"
                  style={{
                    scale: lineWidth,
                    opacity: lineOpacity
                  }}
                />
              )}
              {/* Glow Effect */}
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4"
                style={{ opacity: glowOpacity }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary-200/20 to-transparent blur-lg" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </nav>
    </header>
  );
};
