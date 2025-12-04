"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react"

const announcements = [
  "Phase 4 Applications submitted but not installed as on 01.04.2025 are ineligible for CFA and have been deleted from database.",
  "New update: Modified guidelines for subsidy calculation released.",
  "Important: Check your application status on the portal.",
]

export function AnnouncementStrip() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => setCurrent((prev) => (prev - 1 + announcements.length) % announcements.length)
  const handleNext = () => setCurrent((prev) => (prev + 1) % announcements.length)

  return (
    <div className="w-full bg-[#E9F6FF] border-b border-[#0A6FB0] border-opacity-20">
      <div className="px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center gap-3">
          <AlertCircle className="text-[#0A6FB0] flex-shrink-0" size={28} />

          <div className="flex-1 overflow-hidden">
            <div className="flex gap-2 items-center">
              <span className="text-sm md:text-base font-semibold text-[#083B63] whitespace-nowrap">Announcement</span>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm md:text-base text-[#0B2130] font-medium line-clamp-2 md:line-clamp-1">
                  {announcements[current]}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-1 ml-auto flex-shrink-0">
            <button
              onClick={handlePrev}
              className="p-1 hover:bg-white hover:bg-opacity-50 rounded transition"
              aria-label="Previous announcement"
            >
              <ChevronLeft size={18} className="text-[#0A6FB0]" />
            </button>
            <button
              onClick={handleNext}
              className="p-1 hover:bg-white hover:bg-opacity-50 rounded transition"
              aria-label="Next announcement"
            >
              <ChevronRight size={18} className="text-[#0A6FB0]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
