import Link from "next/link";
import Image from "next/image";
import { XIcon } from "lucide-react";

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
    <footer className="bg-[#25211B] text-white border-t border-[#F3F1EF0F]">
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
        {/* Logo + Company name */}
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
            <p className="font-mono uppercase text-[#CD5C1C] mb-6 max-w-92.5">
              Advisory and execution for families, principals, and private
              institutions with interests that demand discretion.
            </p>
            <p className="font-mono uppercase">Client Login</p>
            <div className="mt-16 md:mt-47 flex items-center gap-6">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <XIcon className="w-5 h-5 text-[#F3F1EF80] hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-[#F3F1EF80] hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="p-6 md:p-16 w-full border-t border-[#F3F1EF0F] md:border-t-0 md:border-l md:border-r flex flex-row items-start gap-8 justify-between">
            <div>
              <p className="uppercase font-mono text-[#635A4E] mb-6">Firm</p>
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
                <p className="uppercase font-mono text-[#635A4E] mb-6">
                  Contact
                </p>
                <ul className="flex flex-col gap-4">
                  <li className="text-[15px] font-geist text-[#F3F1EF80] hover:text-white">
                    <a href="mailto:office@laddco.com">office@laddco.com</a>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <p className="uppercase font-mono text-[#635A4E] mb-6">
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
          <div className="border-x border-[#F3F1EF0F] w-full uppercase text-[13px] text-[#635A4E] font-mono p-6 md:p-8 md:px-16 flex flex-col md:flex-row-reverse md:items-center justify-between gap-4">
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
