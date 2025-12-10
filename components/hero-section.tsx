"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cursor } from "@/components/ui/inverted-cursor";

export function HeroSection() {
  const [showCursor, setShowCursor] = useState(false);
  const [isOverText, setIsOverText] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white pt-12 md:pt-16 pb-0 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-stretch">
        {/* Left column - Text content (with map background) */}
        <div
          ref={textRef}
          className="md:col-span-2 pt-4 md:pt-0 relative overflow-hidden h-full flex flex-col justify-center"
          data-cursor-ignore="true"
          style={{ cursor: "auto" }}
          style={{
            backgroundImage: "url('/map-image.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "calc(100% - 590px) calc(50% + 50px)",
            backgroundSize: "55%",
          }}
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => {
            setShowCursor(false);
            setIsOverText(false);
          }}
        >
          {showCursor && (
            <Cursor
              size={50}
              scale={isOverText ? 1.5 : 0.8}
              containerRef={textRef}
            />
          )}

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            onMouseEnter={() => setIsOverText(true)}
            onMouseLeave={() => setIsOverText(false)}
          >
            Sun Radiation Power Solutions
          </h1>

          <p
            className="text-base md:text-lg text-[#516C7A] leading-relaxed mb-8 max-w-2xl"
            onMouseEnter={() => setIsOverText(true)}
            onMouseLeave={() => setIsOverText(false)}
          >
            Sun Radiation Power Solutions delivers premium, sustainable solar technology built for performance and durability.
            From high-efficiency solar panels and inverters to advanced batteries and complete energy systems — we cater to residential, commercial, and industrial needs.
            Experience smarter, cleaner, and more cost-effective energy for every project.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#0A6FB0] text-white rounded-lg font-semibold hover:bg-[#083B63] transition text-sm md:text-base"
            >
              Register Now
            </Link>
          </div>
        </div>

        {/* Right column - Portrait */}
        <div className="md:col-span-1 relative flex justify-center items-center h-full">
          <div className="w-full max-w-[1152px]">
            <Image
              src="/modiji-saiji-1.png"
              alt="PM Modi - Shri Narendra Modi, Hon'ble Prime Minister of India"
              width={1152}
              height={856}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
