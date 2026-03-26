import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/industries", label: "Industries" },
  { href: "/presence", label: "Presence" },
  { href: "/client-login", label: "Client Login" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto bg-[#25211B] text-white">
      <div className="mx-3.75 md:mx-auto max-w-7xl border-l border-r border-white/10 px-4 py-12 md:py-16">
        {/* Logo + Company name */}
        <div className="flex items-center gap-4 md:gap-8 mb-10">
          <Image
            src="/logo.png"
            alt="Ladd & Co. logo"
            width={24}
            height={24}
          />
          <span className="text-lg font-medium tracking-tight">
            Ladd &amp; Co.
          </span>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-10">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-[13px] font-mono uppercase text-white/60 transition-colors hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Divider + Copyright */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-[13px] font-mono text-white/40">
            &copy; {new Date().getFullYear()} Ladd &amp; Co. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
