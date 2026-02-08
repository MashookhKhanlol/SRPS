"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const aboutImages = ["/1 (1).jpg", "/1 (2).jpg", "/1 (3).jpg", "/1 (4).jpg"]

interface AboutCompanyImageSlideProps {
  /** Optional class for the slide container (e.g. height overrides). Default: h-64 md:h-96 */
  className?: string
}

export function AboutCompanyImageSlide({ className = "h-64 md:h-96" }: AboutCompanyImageSlideProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full">
      <div className={`relative w-full rounded-lg overflow-hidden bg-gray-100 ${className}`}>
        {aboutImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image}
              alt={`About us image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {aboutImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
