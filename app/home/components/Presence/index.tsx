import SectionMarker from "@/components/SectionMarker";

const Presence = () => {
  return (
    <div className="border-b border-border">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto border-x border-t md:border-t-0 border-border">
        <SectionMarker
          showDot={true}
          showHash={true}
          number="05"
          description="Presence"
          className="px-6 md:px-0 md:py-18 md:hidden"
        />
        <SectionMarker
          showDot={true}
          showHash={false}
          number="05"
          className="px-6 md:px-0 md:py-16 hidden md:flex"
        />

        {/* Text content */}
        <div className="flex-1 mx-4 md:mx-0 text-text-secondary border-x md:border-x-0 border-border p-6 md:py-16 md:px-16">
          <p className="text-[13px] font-mono mb-16 uppercase hidden md:block">
            Presence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-[24px]">
            <div className="pb-4.25 border-b border-border">
              <p>New York, New York</p>
              <p className="font-mono text-[13px] uppercase text-accent-red mt-2">
                United States
              </p>
            </div>
            <div className="pb-4.25 border-b border-border">
              <p>Palm Beach, Florida</p>
              <p className="font-mono text-[13px] uppercase text-accent-red mt-2">
                United States
              </p>
            </div>
            <div className="pb-4.25 border-b border-border">
              <p>George Town</p>
              <p className="font-mono text-[13px] uppercase text-accent-red mt-2">
                Cayman Islands
              </p>
            </div>
            <div className="pb-4.25 border-b border-border">
              <p>London</p>
              <p className="font-mono text-[13px] uppercase text-accent-red mt-2">
                United Kingdom
              </p>
            </div>
            <div className="pb-4.25 border-b border-border">
              <p>Zürich</p>
              <p className="font-mono text-[13px] uppercase text-accent-red mt-2">
                Switzerland
              </p>
            </div>
            <div className="pb-4.25 border-b border-border">
              <p>Dubai</p>
              <p className="font-mono text-[13px] uppercase text-accent-red mt-2">
                United Arab Emirates
              </p>
            </div>
            <div className="pb-4.25 border-b border-border">
              <p>Singapore</p>
              <p className="font-mono text-[13px] uppercase text-accent-red mt-2">
                Republic of Singapore
              </p>
            </div>
            <div className="pb-4.25 border-b border-border">
              <p>Hong Kong</p>
              <p className="font-mono text-[13px] uppercase text-accent-red mt-2">
                SAR, China
              </p>
            </div>
            <div className="pb-4.25 border-b border-border">
              <p>Sydney, New South Wales</p>
              <p className="font-mono text-[13px] uppercase text-accent-red mt-2">
                Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presence;
