"use client";

import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function LenisScrollTriggerSync() {
  useLenis((lenis) => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: "play reverse play reverse",
    });
  }, []);

  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5 }}>
      <LenisScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
