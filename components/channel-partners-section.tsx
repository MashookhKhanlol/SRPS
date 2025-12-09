"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState } from "react"

export function ChannelPartnersSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "The best company to work with. Their support and guidance have been invaluable in growing our business.",
      author: "Partner Name",
      rating: 5,
    },
    {
      quote: "Excellent products and outstanding service. Highly recommended for anyone looking to enter the solar energy business.",
      author: "Partner Name",
      rating: 5,
    },
    {
      quote: "Professional team and comprehensive support. Our partnership has been very successful.",
      author: "Partner Name",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">Our Business Channel Partners</h2>
        
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white p-8 md:p-12 rounded-lg border border-gray-200 shadow-lg max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-gray-700 italic mb-4">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <p className="text-gray-600 font-semibold">- {testimonials[currentTestimonial].author}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-[#0A6FB0] text-white rounded-full flex items-center justify-center hover:bg-[#083B63] transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-[#0A6FB0] text-white rounded-full flex items-center justify-center hover:bg-[#083B63] transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-[#0A6FB0] text-white rounded-lg font-semibold hover:bg-[#083B63] transition">
            VIEW ALL TESTIMONIALS
          </button>
        </div>
      </div>
    </section>
  )
}

