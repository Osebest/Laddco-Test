import Link from "next/link";
import Image from "next/image";
import { BsTwitterX, BsLinkedin } from "react-icons/bs";

const firmLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/industries", label: "Industries" },
  { href: "/presence", label: "Presence" },
] as const;

const offices = [
  { value: "New York" },
  { value: "Palm Beach" },
  { value: "London" },
  { value: "George Town" },
  { value: "Zürich" },
  { value: "Dubai" },
  { value: "Singapore" },
  { value: "Hong Kong" },
  { value: "Sydney" },
] as const;

export function Footer() {
  return (
    <footer className="bg-text-primary text-white border-t border-[#F3F1EF0F] pt-8 md:pt-0">
      <div className="mx-auto max-w-7xl flex items-center">
        <div className="w-15 hidden self-stretch md:flex justify-center pt-16.5 border-l border-[#F3F1EF0F]">
          <Image
            src="/logo.png"
            alt="Ladd & Co. logo"
            width={24}
            height={24}
            className="h-6"
          />
        </div>
        <div className="md:border-x border-[#F3F1EF0F] text-[13px] w-full flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-0">
          <div className="p-6 md:p-16 w-full">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Ladd & Co. logo"
                width={24}
                height={24}
                className="block md:hidden"
              />
              <span className="text-xl font-medium tracking-tight">
                Ladd &amp; Co.
              </span>
            </div>
            <p className="font-mono uppercase text-accent-red mb-6 max-w-92.5">
              Advisory and execution for families, principals, and private
              institutions with interests that demand discretion.
            </p>
            <Link
              href={"/client-login"}
              className="font-mono uppercase hover:text-[#F3F1EF80]"
            >
              Client Login
            </Link>
            <div className="mt-16 md:mt-47 flex items-center gap-6">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <BsTwitterX className="w-5 h-5 text-[#F3F1EF80] hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <BsLinkedin className="w-5 h-5 text-[#F3F1EF80] hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="p-6 md:p-16 w-full border-t border-[#F3F1EF0F] md:border-t-0 md:border-l md:border-r flex flex-row items-start gap-8 justify-between">
            <div>
              <p className="uppercase font-mono text-text-secondary mb-6">
                Firm
              </p>
              <ul className="flex flex-col gap-3">
                {firmLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[15px] font-geist text-[#F3F1EF80] hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pr-16">
              <div>
                <p className="uppercase font-mono text-text-secondary mb-6">
                  Contact
                </p>
                <ul className="flex flex-col gap-4">
                  <li className="text-[15px] font-geist text-[#F3F1EF80] hover:text-white">
                    <a href="mailto:office@laddco.com">office@laddco.com</a>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <p className="uppercase font-mono text-text-secondary mb-6">
                  Offices
                </p>
                <ul className="flex flex-col gap-4">
                  {offices.map(({ value }) => (
                    <li key={value}>
                      <p className="text-[15px] font-geist text-[#F3F1EF80]">
                        {value}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CopyWrite section */}
      <div className="border-t border-[#F3F1EF0F]">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="w-15 hidden self-stretch md:flex border-l border-[#F3F1EF0F]"></div>
          <div className="border-x border-[#F3F1EF0F] w-full uppercase text-[13px] text-text-secondary font-mono p-6 md:p-8 md:px-16 flex flex-col md:flex-row-reverse md:items-center justify-between gap-4">
            <p className="cursor-pointer">Legal</p>
            <p>
              Copyright &copy; {new Date().getFullYear()} Ladd &amp; Co. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
