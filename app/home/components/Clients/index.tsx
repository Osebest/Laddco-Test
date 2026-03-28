import SectionMarker from "@/components/SectionMarker";
import Image from "next/image";
import heroLarge from "@/assets/images/hero4-large.jpg";
import heroSmall from "@/assets/images/hero4-small.jpg";

const Clients = () => {
  return (
    <div className="border-b border-border">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto border-x border-border">
        <SectionMarker
          showDot
          number="03"
          showHash={false}
          className="px-6 md:px-0 md:py-18 hidden md:flex"
        />
        <SectionMarker
          showDot
          number="03"
          description="Clients"
          className="px-6 md:px-0 md:py-18 md:hidden"
        />

        {/* Image */}
        <div className="w-full md:max-w-150.5 md:shrink md:min-w-0 border-x border-border">
          <Image
            src={heroSmall}
            alt="ClientsSection"
            className="block md:hidden w-full h-auto object-cover"
          />
          <Image
            src={heroLarge}
            alt="ClientsSection"
            className="hidden md:block w-full h-auto object-cover my-8"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 mx-4 md:mx-0 px-8 py-8 md:py-16 border-x md:border-x-0 md:border-r border-border">
          <div className="flex flex-col gap-8">
            <p className="font-mono text-[13px] uppercase tracking-widest text-text-secondary">
              Who We Serve
            </p>
            <p className="text-[22px] md:text-[48px] leading-[130%]">
              Advisory & Execution
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto border-x border-border">
        <SectionMarker
          showDot={false}
          showHash={true}
          description="Clients"
          className="px-6 md:px-0 md:py-18 hidden md:flex"
        />

        {/* Text content */}
        <div className="flex-1 mx-4 md:mx-0 px-8 py-8 md:py-16 md:border-t border-x md:border-x-0 border-border">
          <div className="flex flex-col gap-8">
            <p className="font-mono text-[13px] uppercase tracking-widest text-text-secondary">
              Clients
            </p>
            <p className="text-[22px] md:text-[48px] leading-[130%]">
              Advisory & Execution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
