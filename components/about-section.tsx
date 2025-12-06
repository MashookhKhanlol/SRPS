"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"

const aboutImages = [
  "/solar-about-us-1.jpg",
  "/solar-about-us-2.jpg",
  "/solar-about-us-3.jpg",
  "/solar-about-us-4.jpg",
]

export function AboutSection() {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef<number | null>(null)
  const hoverRef = useRef(false)

  useEffect(() => {
    startAutoPlay()
    return stopAutoPlay
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function startAutoPlay() {
    stopAutoPlay()
    // auto-advance every 4s
    intervalRef.current = window.setInterval(() => {
      if (!hoverRef.current) setIndex((i) => (i + 1) % aboutImages.length)
    }, 4000)
  }

  function stopAutoPlay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  function goPrev() {
    setIndex((i) => (i - 1 + aboutImages.length) % aboutImages.length)
  }

  function goNext() {
    setIndex((i) => (i + 1) % aboutImages.length)
  }

  return (
    <section id="about-us" className="bg-[var(--color-card)] py-12 md:py-20 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-stretch">
        <div
          className="md:col-span-1 w-full h-64 md:h-80 relative overflow-hidden rounded-lg"
          onMouseEnter={() => (hoverRef.current = true)}
          onMouseLeave={() => (hoverRef.current = false)}
        >
          {/* Slides */}
          {aboutImages.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image src={src} alt={`About ${i + 1}`} fill style={{ objectFit: "cover" }} />
            </div>
          ))}

          {/* Controls */}
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/60 focus:outline-none"
          >
            ‹
          </button>
          <button
            onClick={goNext}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/60 focus:outline-none"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {aboutImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">About Us</h2>
          <div className="w-full">
            <p className="text-[var(--color-muted-foreground)] text-base md:text-lg leading-relaxed mb-4">
              Sun Radiation Power Solutions is committed to delivering reliable and sustainable solar energy
              solutions. We offer a premium range of solar products including solar inverters, solar panels,
              solar batteries, and other related solar equipment to meet residential, commercial, and
              industrial energy needs.
            </p>
            <p className="text-[var(--color-muted-foreground)] text-base md:text-lg leading-relaxed">
              With a focus on quality, effective solutions, and timely delivery, we ensure our customers
              receive the best in clean energy technology backed by professional service and long-term
              support. Our mission is to promote renewable energy and help build a greener and more
              energy-independent future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
