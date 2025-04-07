import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@suiet/wallet-kit/style.css';
import './suiet-wallet-kit-custom.css';
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "EventVibes",
  description: "Own Your Event Moments, Search with AI & Win Exclusive NFTs Store your event media, search with AI, and earn exclusive POAP NFTs for your participation-All powered by Web3.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className=""
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
