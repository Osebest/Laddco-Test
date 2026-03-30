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
          description="Who We Serve"
          className="px-6 md:px-0 md:py-18 md:hidden"
        />

        <div className="w-full md:max-w-150.5 md:shrink md:min-w-0 border-x border-border">
          <Image
            src={heroSmall}
            alt="ClientsSection"
            className="block md:hidden w-full h-auto object-cover"
            sizes="100vw"
            quality={80}
          />
          <Image
            src={heroLarge}
            alt="ClientsSection"
            className="hidden md:block w-full h-auto object-cover my-8"
            quality={80}
          />
        </div>

        <div className="flex-1 my-auto mx-4 md:mx-0 md:ml-10 px-6 py-8 md:py-16 border-x md:border-x-0 md:border-r border-border">
          <div className="flex flex-col gap-8">
            <p className="font-mono hidden md:block text-[13px] uppercase tracking-widest text-text-secondary">
              Who We Serve
            </p>
            <p className="text-[22px] md:text-[32px] leading-[130%]">
              Our clients are{" "}
              <span className="italic">
                entrepreneurs, principals, and multi-generational families
                managing significant private wealth
              </span>{" "}
              across multiple jurisdictions.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto border-x border-t md:border-t-0 border-border">
        <SectionMarker
          showDot={false}
          showHash={true}
          description="Clients"
          className="px-6 md:px-0 md:py-18 hidden md:flex"
        />
        <SectionMarker
          showDot={false}
          showHash={true}
          description="Clients"
          className="px-6 md:px-0 md:py-18 md:hidden"
        />

        <div className="flex-1 mx-4 md:mx-0 md:border-t border-x md:border-x-0 border-border">
          <div className="border-b md:border-b-0 border-border py-6 md:pt-18 md:pb-16 px-6">
            <div className="font-geist text-[15px] text-text-secondary leading-[160%] max-w-142.5 ml-auto">
              <p className="mb-6">
                Many have complex holding structures, diverse asset portfolios,
                and professional teams that require a senior point of
                coordination.
              </p>
              <p>
                We also act for institutional investors, sovereign entities, and
                private offices requiring independent advisory on specific
                transactions or matters.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:pb-8 text-[22px] md:text-[24px]">
            <div className="flex flex-col md:flex-row py-4 px-6 md:p-8 md:border-t border-border md:items-center gap-8">
              <div className="w-8 h-px bg-accent-red shrink-0" />
              <p>Ultra-High-Net-Worth Individuals & Families</p>
            </div>
            <div className="flex flex-col md:flex-row py-4 px-6 md:p-8 md:border-t border-border md:items-center gap-8">
              <div className="w-8 h-px bg-accent-red shrink-0" />
              <p>Institutional & Sovereign Investors</p>
            </div>
            <div className="flex flex-col md:flex-row py-4 px-6 md:p-8 md:border-t border-border md:items-center gap-8">
              <div className="w-8 h-px bg-accent-red shrink-0" />
              <p>Ultra-High-Net-Worth Individuals & Families</p>
            </div>
            <div className="flex flex-col md:flex-row py-4 px-6 md:p-8 md:border-t border-border md:items-center gap-8">
              <div className="w-8 h-px bg-accent-red shrink-0" />
              <p>Institutional & Sovereign Investors</p>
            </div>
            <div className="flex flex-col md:flex-row py-4 px-6 md:p-8 md:border-t border-border md:items-center gap-8">
              <div className="w-8 h-px bg-accent-red shrink-0" />
              <p>Ultra-High-Net-Worth Individuals & Families</p>
            </div>
            <div className="flex flex-col md:flex-row py-4 px-6 md:p-8 md:border-t border-border md:items-center gap-8">
              <div className="w-8 h-px bg-accent-red shrink-0" />
              <p>Institutional & Sovereign Investors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
