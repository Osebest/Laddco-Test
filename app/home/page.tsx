import React from "react";
import RequestInformation from "./components/RequestInformation";
import HeroSection from "./components/Hero";
import SectionMarker from "@/components/SectionMarker";
import AboutTheFirm from "./components/AboutFirm";
import ServiceSection from "./components/ServiceSection";
import Clients from "./components/Clients";

const Home = () => {
  return (
    <div>
      <RequestInformation />
      <HeroSection />
      <div className="border-y border-border">
        <div className="bg-[#C5CAAA] max-w-7xl mx-auto flex flex-col md:flex-row">
          <SectionMarker className="px-22 md:px-0 md:py-22" />
          <div className="py-6 md:py-22 mx-4 md:mx-0 px-8 border-x border-border">
            <p className="text-[22px] md:text-[32px] mb-6 md:mb-8 leading-[130%]">
              We operate as an extension of our clients' interests — advising,
              coordinating, and executing where the complexity demands a single,
              trusted point of contact.
            </p>
            <p className="font-geist text-[15px] text-text-secondary max-w-142.5">
              Whether the matter concerns a transaction, a restructure, a
              dispute, or an opportunity — our role is to ensure the outcome is
              resolved efficiently, discreetly, and in the client's favour.
            </p>
          </div>
        </div>
      </div>
      <AboutTheFirm />
      <ServiceSection />
      <Clients />
      <div className="h-72">
        <p className="text-lg text-gray-500">
          This is a sample Next.js app with Tailwind CSS.
        </p>
      </div>
      <div className="h-72">
        <p className="text-lg text-gray-500">
          This is a sample Next.js app with Tailwind CSS.
        </p>
      </div>
      <RequestInformation isDark />
    </div>
  );
};

export default Home;
