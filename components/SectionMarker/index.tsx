import SquareDot from "@/components/Dot";

interface SectionMarkerProps {
  className?: string;
  showDot?: boolean;
  number?: string;
  showHash?: boolean;
  description?: string;
  vertical?: boolean;
}

const HashLine = ({ vertical }: { vertical?: boolean }) => (
  <>
    {/* Mobile: horizontal line of tiny vertical boxes */}
    {!vertical && (
      <div className="flex md:hidden flex-1 items-center gap-0.5 overflow-hidden">
        {Array.from({ length: 200 }).map((_, i) => (
          <div key={i} className="w-px h-1.25 bg-accent-red shrink-0" />
        ))}
      </div>
    )}
    {/* Desktop (or forced vertical): vertical line of tiny horizontal boxes */}
    <div
      className={`${vertical ? "block" : "hidden md:block"} relative flex-1 w-full`}
    >
      <div className="absolute inset-0 flex flex-col items-center gap-0.5 overflow-hidden">
        {Array.from({ length: 800 }).map((_, i) => (
          <div key={i} className="w-1.25 h-px bg-accent-red shrink-0" />
        ))}
      </div>
    </div>
  </>
);

const SectionMarker = ({
  className,
  showDot = false,
  number,
  description,
  showHash = true,
  vertical = false,
}: SectionMarkerProps) => {
  return (
    <div
      className={`${
        vertical
          ? "w-14 border-r border-border self-stretch shrink-0 flex flex-col items-center py-4"
          : "h-15 w-full md:h-auto md:w-14 md:border-r border-b md:border-b-0 md:border-border self-stretch shrink-0 flex flex-row md:flex-col items-center px-3 md:px-0 md:py-4 gap-2 md:gap-0"
      } ${className}`}
    >
      {showDot && <SquareDot />}

      {number && (
        <p className="text-[11px] font-mono text-text-secondary md:my-1.25">
          {number}
        </p>
      )}
      {description && (
        <p className="order-last md:order-0 text-[11px] md:text-[13px] font-mono text-text-secondary uppercase tracking-widest whitespace-nowrap md:rotate-90 md:mb-8">
          {description}
        </p>
      )}

      {showHash && <HashLine vertical={vertical} />}
    </div>
  );
};

export default SectionMarker;
