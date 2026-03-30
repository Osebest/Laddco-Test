import SquareDot from "@/components/Dot";

interface RequestInformationProps {
  isDark?: boolean;
}

const RequestInformation = ({ isDark }: RequestInformationProps) => {
  return (
    <div className={`h-11 ${isDark ? "md:bg-text-primary w-full!" : ""}`}>
      <div
        className={`max-w-7xl md:mx-auto flex items-center justify-between gap-4 md:gap-8 bg-linear-to-r from-[#C5CAAA] ${isDark ? "to-text-primary/80" : "to-[#F3F1EF]"}`}
      >
        {!isDark && (
          <div className="w-5 flex md:hidden border-x border-border h-11 items-center justify-center">
            <SquareDot />
          </div>
        )}
        <div
          className={`h-11 w-15 ${isDark ? "flex" : "hidden"} md:flex items-center justify-center border-x border-border`}
        >
          <SquareDot />
        </div>
        <h1 className="font-medium w-full group cursor-pointer">
          Request an Introduction{" "}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </h1>
        {!isDark && (
          <div className="w-5 flex md:hidden border-x border-border h-11 items-center justify-center">
            <SquareDot />
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestInformation;
