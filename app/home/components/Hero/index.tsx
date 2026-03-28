import SquareDot from "@/components/Dot";
import Image from "next/image";
import heroLarge from "@/assets/images/hero1-large.jpg";
import heroSmall from "@/assets/images/hero1-small.jpg";

const HeroSection = () => {
  return (
    <div className="border-b border-border border-t md:border-t-0">
      <div className="flex flex-col md:flex-row items-start max-w-7xl mx-auto">
        <div className="hidden md:flex w-14 pt-18 justify-center border-x border-border self-stretch shrink-0">
          <SquareDot />
        </div>

        {/* Text content */}
        <div className="flex-1 border-x md:border-x-0 border-border mx-4 md:mx-0 px-8 py-8 md:py-16">
          <p className="text-[32px] md:text-[56px] leading-[120%] md:leading-[110%]">
            Advisory and execution for{" "}
            <span className="italic">
              families, principals, and private institutions
            </span>{" "}
            with interests that demand discretion.
          </p>
          <p className="font-geist text-[15px] mt-3.75 md:mt-6 text-text-secondary max-w-142.5">
            Ladd & Co. is a private advisory practice. We represent clients
            across transactions, capital strategy, structuring, and the
            management of sensitive matters across jurisdictions.
          </p>
        </div>

        {/* Hero image – small on mobile, large on desktop */}
        <div className="w-full md:max-w-96 md:shrink md:min-w-0 border-x border-border">
          <Image
            src={heroSmall}
            alt="Ladd & Co. hero"
            className="block md:hidden w-full h-auto object-cover"
            priority
          />
          <Image
            src={heroLarge}
            alt="Ladd & Co. hero"
            className="hidden md:block w-full h-auto object-cover my-8"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
