import SectionMarker from "@/components/SectionMarker";
import Image from "next/image";
import heroLarge from "@/assets/images/hero2-large.jpg";
import heroSmall from "@/assets/images/hero2-small.jpg";

const AboutTheFirm = () => {
  return (
    <div className="border-b border-border">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto border-x border-border">
        <SectionMarker showDot number="01" className="px-6 md:px-0 md:py-18" />

        {/* Image */}
        <div className="w-full md:max-w-96 md:shrink md:min-w-0 border-x border-border md:ml-8">
          <Image
            src={heroSmall}
            alt="About the Firm"
            className="block md:hidden w-full h-auto object-cover"
            sizes="100vw"
            quality={80}
          />
          <Image
            src={heroLarge}
            alt="About the Firm"
            className="hidden md:block w-full h-auto object-cover my-8"
            sizes="(max-width: 768px) 0px, 384px"
            quality={80}
          />
        </div>

        {/* Text content */}
        <div className="flex-1 mx-4 md:mx-0 px-8 py-8 md:py-16 border-x md:border-x-0 border-border">
          <div className="flex flex-col gap-8 pl-0 md:pl-10">
            <p className="font-mono text-[13px] uppercase tracking-widest text-text-secondary">
              About the Firm
            </p>
            <p className="text-[22px] md:text-[48px] leading-[130%]">
              We advise where the stakes are highest and the margin for error is
              smallest.
            </p>
            <p className="font-geist text-[15px] md:mt-59 text-text-secondary leading-[160%] max-w-142.5 ml-auto">
              Our clients are individuals and families with significant wealth,
              complex international structures, and affairs that span multiple
              jurisdictions, advisors, and asset classes. <br /> <br /> We do
              not manage assets. We do not sell financial products. We provide
              independent counsel and hands-on execution across the full
              spectrum of our clients&apos; private affairs — from capital
              deployment and M&A to international structuring and the resolution
              of distressed or disputed matters. <br /> <br /> We work alongside
              our clients&apos; existing professional teams — their lawyers,
              accountants, bankers, and investment managers — ensuring
              alignment, identifying gaps, and resolving issues that fall
              between the cracks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheFirm;
