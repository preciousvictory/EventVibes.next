import React from "react";
import { FeatureCard } from "../../components/FeatureCard";

const FeaturesSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-20 mt-14 w-full bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="w-full max-w-[1200px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between max-md:max-w-full">
          <div className="flex flex-col self-start text-white min-w-60 w-[452px] max-md:max-w-full">
          <span className="font-urbanist text-base font-medium leading-[140%] tracking-[0.2px] text-white">
              Our Features
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-10 max-md:max-w-full">
              Why NFT Rewards Matter?
            </h2>
          </div>
          <p className="text-lg leading-6 min-w-60 text-stone-300 w-[545px] max-md:max-w-full">
            Our platform leverages decentralized storage, AI-powered search, and
            blockchain rewards to create a unique experience for event
            participants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-19 mt-14 max-md:mt-10">
          <div className="max-w-[320px] mx-auto w-full">
            <FeatureCard
              icon="https://cdn.builder.io/api/v1/image/assets/b03167fcaefc45bfb39284c13d09f4f4/c8751877b3d84188c770883160f557d8f5fd9478?placeholderIfAbsent=true"
              title="True Ownership"
              description="Every NFT is securely stored in your Sui wallet."
            />
          </div>
          <div className="max-w-[320px] mx-auto w-full">
            <FeatureCard
              icon="https://cdn.builder.io/api/v1/image/assets/b03167fcaefc45bfb39284c13d09f4f4/50ec595e6c1994044fcf2c4b93b96ddc32283e74?placeholderIfAbsent=true"
              title="Transparency & Security"
              description="Verify your event participation on-chain."
            />
          </div>
          <div className="max-w-[320px] mx-auto w-full">
            <FeatureCard
              icon="https://cdn.builder.io/api/v1/image/assets/b03167fcaefc45bfb39284c13d09f4f4/b51f7f61df8789edd3895b9448f047838157a600?placeholderIfAbsent=true"
              title="Exclusive Access"
              description="Some NFTs unlock event perks or VIP access."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
