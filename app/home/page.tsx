import React from "react";
import RequestInformation from "./components/RequestInformation";
import HeroSection from "./components/Hero";
import SectionMarker from "@/components/SectionMarker";
import AboutTheFirm from "./components/AboutFirm";
import ServiceSection from "./components/ServiceSection";
import Clients from "./components/Clients";
import Industries from "./components/Industries";
import Presence from "./components/Presence";

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
      <div className="border-y border-border">
        <div className="bg-[#C5CAAA] max-w-7xl mx-auto flex flex-row">
          <SectionMarker vertical className="py-12 md:py-22" />
          <div className="py-12 grow md:py-22 mx-4 md:mx-0 px-4 md:border-x border-border">
            <p className="text-[22px] md:text-[48px] mb-6 md:mb-8 leading-[130%] italic">
              Discretion is not a policy. <br />
              It is the nature of the work.
            </p>
            <p className="font-geist mb-8 text-[15px] text-text-secondary max-w-142.5 leading-[160%] ml-auto">
              Our clients engage us because the matters they face are too
              consequential for rigid institutional processes and too complex
              for any single advisor. We operate with a permanent obligation of
              confidentiality — not because it is expected, but because the work
              demands it. The details of our engagements, our client
              relationships, and the outcomes we achieve are never disclosed.
            </p>
            <p className="uppercase font-mono text-accent-red text-[13px] max-w-142.5 ml-auto">
              <span className="max-w-56.5">
                This is not a feature <br />
                of our service. It is the <br />
                foundation of it.
              </span>
            </p>
          </div>
        </div>
      </div>
      <Industries />
      <Presence />
      <RequestInformation isDark />
    </div>
  );
};

export default Home;
