"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import menuIcon from "@/assets/icons/menu.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import SquareDot from "../Dot";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/industries", label: "Industries" },
  { href: "/presence", label: "Presence" },
] as const;

const desktopNavLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/industries", label: "Industries" },
  { href: "/presence", label: "Presence" },
  { href: "/client-login", label: "Client Login" },
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-4 md:mx-auto flex h-15 max-w-7xl border-l border-r md:border-r-0 items-center justify-between pr-4">
        {/* Logo + Company name */}
        <Link href="/" className="flex items-center md:gap-8">
          <div className="w-14 mx-auto h-15 flex items-center justify-center md:border-r md:border-border">
            <Image
              src="/logo.png"
              alt="Ladd & Co. logo"
              width={24}
              height={24}
              priority
            />
          </div>
          <span className="text-lg font-medium tracking-tight">
            Ladd &amp; Co.
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:gap-10 md:flex">
          {desktopNavLinks.map(({ href, label }, index) => (
            <li key={href}>
              <Link
                href={href}
                className={`rounded-md px-3 py-2 text-[13px] font-mono uppercase transition-colors hover:bg-foreground/5
                  ${index === desktopNavLinks.length - 1 ? "font-semibold" : ""}
                  ${pathname === href ? "text-accent-red" : "text-text-secondary"}
                `}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden" />
            }
          >
            <Image src={menuIcon} alt="menu" width={24} height={24} priority />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>

          <SheetContent
            side="top"
            className="h-dvh w-full bg-background gap-0"
            showCloseButton={false}
          >
            <nav className="flex h-15 border-l border-r items-center justify-between pr-4">
              <Link href="/" className="flex items-center gap-8">
                <Image
                  src="/logo.png"
                  alt="Ladd & Co. logo"
                  width={36}
                  height={36}
                  className="h-15 w-auto px-4 py-4 border-r border-border"
                  priority
                />
                <span className="text-lg font-medium tracking-tight">
                  Ladd &amp; Co.
                </span>
              </Link>

              <SheetClose render={<Button variant="ghost" size="icon" />}>
                <Image src={menuIcon} alt="Close menu" width={24} height={24} />
              </SheetClose>
            </nav>

            {/* Centered nav links */}
            <ul className="flex flex-col bg-[#C5CAAA] h-full items-center gap-6">
              <div
                className={`w-full cursor-pointer flex items-center justify-between gap-8 bg-linear-to-r from-[#C5CAAA] to-text-primary/70`}
              >
                <div
                  className={`h-11 w-19.75 flex items-center justify-center border-x border-border`}
                >
                  <SquareDot />
                </div>
                <h1 className="font-medium w-full">
                  Request an Introduction →
                </h1>
              </div>
              <p className="text-[13px] font-mono uppercase text-text-secondary ">
                Firm
              </p>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <SheetClose
                    render={
                      <Link
                        href={href}
                        className={`text-[15px] py-1 font-geist tracking-wide transition-colors hover:text-foreground ${
                          pathname === href ? "text-accent-red" : ""
                        }`}
                      />
                    }
                  >
                    {label}
                  </SheetClose>
                </li>
              ))}
              <p className="text-[13px] mt-2 font-mono uppercase text-text-secondary ">
                Contact
              </p>
              <div className="text-[15px] py-1 font-geist tracking-wide transition-colors hover:text-foreground">
                <a href="mailto:office@laddco.com">office@laddco.com</a>
              </div>
              <SheetClose
                render={
                  <Link
                    href="/client-login"
                    className="text-[13px] font-mono uppercase border-t border-border pt-6 cursor-pointer w-full text-center"
                  />
                }
              >
                Client Login
              </SheetClose>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
