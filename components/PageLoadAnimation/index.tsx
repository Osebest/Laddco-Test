"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import hero1 from "@/assets/images/hero1-large.jpg";
import hero2 from "@/assets/images/hero2-large.jpg";
import hero3 from "@/assets/images/hero3-large.jpg";

export function PageLoadAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const handleImageLoad = useCallback(() => {
    setImagesLoaded((prev) => {
      const next = prev + 1;
      if (next >= 3 && tlRef.current) {
        tlRef.current.play();
      }
      return next;
    });
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        paused: true,
        onComplete: () => setDone(true),
      });

      // Animate text in from the left
      tl.to(".loader-text", {
        x: 0,
        duration: 1,
      });

      // Hold for a moment
      tl.to({}, { duration: 0.5 });

      // Fade out text and slide images simultaneously
      tl.to(".loader-text", {
        opacity: 0,
        duration: 0.6,
      });

      tl.to(".loader-col-1", { yPercent: -100, duration: 1.2 }, "-=0.4");
      tl.to(".loader-col-2", { yPercent: 100, duration: 1.2 }, "<");
      tl.to(".loader-col-3", { yPercent: -100, duration: 1.2 }, "<");

      tlRef.current = tl;

      // If images already loaded before timeline was created
      if (imagesLoaded >= 3) {
        tl.play();
      }
    },
    { scope: containerRef },
  );

  if (done) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-99999 flex overflow-hidden"
    >
      {/* Three equal columns with hero images */}
      <div className="loader-col-1 relative w-1/3 h-full">
        <Image src={hero1} alt="" fill className="object-cover" sizes="33vw" quality={80} priority onLoad={handleImageLoad} />
      </div>
      <div className="loader-col-2 relative w-1/3 h-full">
        <Image src={hero2} alt="" fill className="object-cover" sizes="33vw" quality={80} priority onLoad={handleImageLoad} />
      </div>
      <div className="loader-col-3 relative w-1/3 h-full">
        <Image src={hero3} alt="" fill className="object-cover" sizes="33vw" quality={80} priority onLoad={handleImageLoad} />
      </div>

      {/* Centered text overlay — starts off-screen left via CSS to prevent flash */}
      <div className="loader-text absolute inset-0 flex items-center justify-center pointer-events-none -translate-x-[200%]">
        <h1 className="text-white text-4xl md:text-7xl font-medium tracking-tight drop-shadow-lg">
          Ladd &amp; Co.
        </h1>
      </div>
    </div>
  );
}
