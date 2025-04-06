import React from "react";
import AnimatedButton from "../../components/ui/Button";
import { EventVibesLogo } from "../../assets/Logo";
import { useRouter } from 'next/navigation';

const footerLinks = ["Explore Events", "NFT Rewards", "Contact Us", "Privacy Policy"];

const socialIcons = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#BDBDBD">
        <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#BDBDBD">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
      </svg>
    )
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#BDBDBD">
        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
      </svg>
    )
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#BDBDBD">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    )
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#BDBDBD">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    )
  }
];

export const Footer: React.FC = () => {
    const router = useRouter();
  
  return (
    <footer className="w-full h-[434px] bg-[#141414]">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        {/* Upper Content */}
        <div className="flex gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <div className="w-[320px]">
              {/* Logo */}
              <EventVibesLogo />

              {/* Description */}
              <p className="mt-8 font-urbanist text-base font-medium leading-[140%] tracking-[0.2px] text-[#FAFAFA]">
                Find events, make memories, and stand a chance to win exclusive NFTs.
              </p>
            </div>
            {/* Links */}
            <nav className="mt-8 flex items-center gap-8">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-urbanist text-base font-bold leading-[140%] tracking-[0.2px] text-white hover:text-primary-200 transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Content */}
          <div className="w-[220px]">
            <h3 className="font-urbanist text-base font-semibold leading-[140%] tracking-[0.2px] text-white mb-4">
              To get Started
            </h3>
            <AnimatedButton
              onClick={() => router.push('/auth/connectwallet')}
              className="cursor-pointer w-full shadow-black/75 shadow-xl hover:shadow-lg transition-shadow"
            >
              Connect Wallet
            </AnimatedButton>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-[#7E8492]">
          {/* Bottom Content */}
          <div className="flex justify-between items-center">
            <p className="font-urbanist text-base font-medium leading-[140%] tracking-[0.2px] text-white">
              © 2025 eventVibe. All rights reserved.
            </p>
            {/* Social Icons */}
            <div className="flex gap-6">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={`Follow us on ${social.name}`}
                  className="hover:opacity-80 transition-opacity"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
