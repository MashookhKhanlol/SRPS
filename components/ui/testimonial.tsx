'use client'

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  company: string
  avatar: string
  rating: number
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoScrollInterval?: number
  className?: string
}

export function TestimonialCarousel({ 
  testimonials, 
  autoScrollInterval = 3000,
  className 
}: TestimonialCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const scrollPositionRef = useRef(0)

  useEffect(() => {
    if (isHovered || !scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const scrollWidth = container.scrollWidth
    const clientWidth = container.clientWidth
    const maxScroll = scrollWidth - clientWidth

    const interval = setInterval(() => {
      if (scrollPositionRef.current >= maxScroll) {
        // Reset to start
        scrollPositionRef.current = 0
        container.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        // Scroll forward
        scrollPositionRef.current += clientWidth
        container.scrollTo({ 
          left: scrollPositionRef.current, 
          behavior: 'smooth' 
        })
      }
    }, autoScrollInterval)

    return () => clearInterval(interval)
  }, [isHovered, autoScrollInterval])

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      scrollPositionRef.current = scrollContainerRef.current.scrollLeft
    }
  }

  return (
    <div 
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
        {/* Duplicate for seamless loop */}
        {testimonials.map((testimonial) => (
          <TestimonialCard key={`duplicate-${testimonial.id}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="w-80 flex-shrink-0 flex flex-col items-start border border-[var(--color-border)] p-5 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* Quote Icon */}
      <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203" 
          fill="#2563EB"
        />
      </svg>

      {/* Star Rating */}
      <div className="flex items-center justify-center mt-3 gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg 
            key={i} 
            width="16" 
            height="15" 
            viewBox="0 0 16 15" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" 
              fill="#FF532E"
            />
          </svg>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-sm mt-3 text-[var(--color-muted-foreground)] leading-relaxed">
        {testimonial.quote}
      </p>

      {/* User Info */}
      <div className="flex items-center gap-3 mt-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg text-[var(--color-primary)] font-medium">
            {testimonial.name}
          </h2>
          <p className="text-sm text-[var(--color-muted-foreground)]">
            {testimonial.role} @ {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}

