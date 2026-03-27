import SquareDot from "@/components/Dot";

interface RequestInformationProps {
  isDark?: boolean;
}

const RequestInformation = ({ isDark }: RequestInformationProps) => {
  return (
    <div className={`h-11 ${isDark ? "bg-[#25211B] w-full!" : ""}`}>
      <div
        className={`max-w-7xl cursor-pointer md:mx-auto flex items-center justify-between gap-4 md:gap-8 bg-linear-to-r from-[#C5CAAA] to-[${isDark ? "#25211B" : "#F3F1EF"}]`}
      >
        {!isDark && (
          <div className="w-4.5 flex md:hidden border-x border-border h-11 items-center justify-center">
            <SquareDot />
          </div>
        )}
        <div
          className={`h-11 w-15 ${isDark ? "flex" : "hidden"} md:flex items-center justify-center border-x border-border`}
        >
          <SquareDot />
        </div>
        <h1 className="font-medium w-full">Request an Introduction →</h1>
        {!isDark && (
          <div className="w-4.5 flex md:hidden border-x border-border h-11 items-center justify-center">
            <SquareDot />
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestInformation;
