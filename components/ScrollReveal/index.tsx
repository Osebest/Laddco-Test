"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type RevealDirection = "up" | "left" | "right";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  stagger?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.9,
  distance = 60,
  stagger = 0.12,
  once = false,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const targets = el.querySelectorAll(":scope > *");
      if (targets.length === 0) return;

      const fromVars: gsap.TweenVars = {
        opacity: 0,
        y: direction === "up" ? distance : 0,
        x:
          direction === "left"
            ? -distance
            : direction === "right"
              ? distance
              : 0,
        filter: "blur(4px)",
      };

      const toVars: gsap.TweenVars = {
        opacity: 1,
        y: 0,
        x: 0,
        filter: "blur(0px)",
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          end: "bottom 15%",
          toggleActions: once
            ? "play none none none"
            : "play reverse play reverse",
        },
      };

      gsap.fromTo(targets, fromVars, toVars);
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
