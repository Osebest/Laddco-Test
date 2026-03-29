import SectionMarker from "@/components/SectionMarker";
import Image from "next/image";
import heroLarge from "@/assets/images/hero3-large.jpg";
import heroSmall from "@/assets/images/her03-small.jpg";
import { services, otherServices } from "./data";

const ServiceSection = () => {
  return (
    <div className="border-b border-border">
      <div className="flex flex-col md:flex-row md:gap-8 max-w-7xl mx-auto border-x border-border">
        <SectionMarker
          showDot
          number="02"
          showHash={false}
          className="px-6 md:px-0 md:py-18 hidden md:flex"
        />
        <SectionMarker
          showDot
          number="02"
          description="Services"
          className="px-6 md:px-0 md:py-18 md:hidden"
        />

        {/* Text content */}
        <div className="flex-1 mx-4 md:mx-0 px-8 py-8 md:py-16 border-x md:border-x-0 md:border-r border-border">
          <div className="flex flex-col gap-8">
            <p className="hidden md:block font-mono text-[13px] uppercase tracking-widest text-text-secondary">
              Services
            </p>
            <p className="text-[32px] md:text-[48px] leading-[130%]">
              Advisory <br />& Execution
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:max-w-150.5 md:shrink md:min-w-0 border-x border-border">
          <Image
            src={heroSmall}
            alt="ServiceSection"
            className="block md:hidden w-full h-auto object-cover"
            sizes="100vw"
            quality={80}
          />
          <Image
            src={heroLarge}
            alt="ServiceSection"
            className="hidden md:block w-full h-auto object-cover my-8"
            sizes="(max-width: 768px) 0px, 600px"
            quality={80}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto border-x border-border">
        <SectionMarker
          showDot={false}
          showHash={true}
          description="Services"
          className="px-6 md:px-0 md:py-22 hidden md:flex"
        />

        {/* Text content */}
        <div>
          <div className="flex-1 mx-4 md:mx-0 md:border-t border-x md:border-x-0 border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 -mb-px -mr-px">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="grid md:grid-cols-[auto_1fr] p-6 md:py-12 md:pl-18 md:pr-8 gap-4 md:gap-8 border-b border-r border-border"
                >
                  <p className="text-2xl uppercase tracking-widest text-accent-red w-8">
                    {service.number}
                  </p>
                  <div>
                    <p className="text-[22px] mb-2 md:mb-5 md:text-2xl leading-[140%]">
                      {service.title}
                    </p>
                    <p className="font-geist text-[15px] text-text-secondary">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 mx-4 md:mx-0 md:border-t border-x md:border-x-0 border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 -mb-px -mr-px">
              {otherServices.map((service, index) => (
                <div
                  key={index}
                  className="p-6 md:py-12 font-geist text-[15px] md:pl-18 md:pr-8 md:border-b md:border-r border-border"
                >
                  <p className="md:mb-2 font-medium leading-[140%]">
                    {service.title}
                  </p>
                  <p className="text-text-secondary">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
