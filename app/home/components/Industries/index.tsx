"use client";

import SectionMarker from "@/components/SectionMarker";
import { ScrollReveal } from "@/components/ScrollReveal";

const Industries = () => {
  return (
    <div className="border-b border-border">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto border-x border-t md:border-t-0 border-border">
        <SectionMarker
          showDot={true}
          showHash={true}
          number="04"
          description="Industries"
          className="px-6 md:px-0 md:py-18 md:hidden"
        />
        <SectionMarker
          showDot={true}
          showHash={false}
          number="04"
          className="px-6 md:px-0 md:py-16 hidden md:flex"
        />

        {/* Text content */}
        <div className="flex-1 mx-4 md:mx-0 text-text-secondary border-x md:border-x-0 border-border p-6 md:py-16 md:px-16">
          <p className="text-[13px] font-mono mb-16 uppercase hidden md:block">
            Industries
          </p>
          <ScrollReveal
            stagger={0.06}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 text-[15px] font-geist"
          >
            <p className="pb-4.25 border-b border-border">
              Technology & Software
            </p>
            <p className="pb-4.25 border-b border-border">
              Real Estate & Development
            </p>
            <p className="pb-4.25 border-b border-border">
              Energy & Natural Resources
            </p>
            <p className="pb-4.25 border-b border-border">Financial Services</p>
            <p className="pb-4.25 border-b border-border">
              Healthcare & Life Sciences
            </p>
            <p className="pb-4.25 border-b border-border">
              Infrastructure & Logistics
            </p>
            <p className="pb-4.25 border-b border-border">
              Consumer & Luxury Goods
            </p>
            <p className="pb-4.25 border-b border-border">
              Private Equity & Venture Capital
            </p>
            <p className="pb-4.25 border-b border-border">
              Industrials & Manufacturing
            </p>
            <p className="pb-4.25 border-b border-border">
              Hospitality & Entertainment
            </p>
            <p className="pb-4.25 border-b border-border">
              Defence & Aerospace
            </p>
            <p className="pb-4.25 border-b border-border">
              Media & Telecommunications
            </p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Industries;
