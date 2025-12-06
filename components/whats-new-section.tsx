"use client"

import Image from "next/image"
import { Chip } from "./chip"
import { whatsNewData } from "@/data/whats-new"

export function WhatsNewSection() {
  return (
    <section className="bg-white py-12 md:py-20 border-t border-gray-100 px-4 md:px-8">
      <div className="mb-12">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
            What's <span className="text-[var(--color-secondary)]">New</span>
          </h2>
          <a href="#" className="text-[var(--color-secondary)] font-semibold text-sm md:text-base hover:underline">
            View More
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {/* Left column - Officials */}
          <div className="space-y-4">
            {whatsNewData.officials?.slice(0, 2).map((official, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                <div className="relative w-14 h-14 flex-shrink-0">
                  <Image
                    src="/placeholder.svg?key=glabl"
                    alt={official.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm text-[var(--color-primary)]">{official.name}</p>
                  <p className="text-xs text-[var(--color-muted-foreground)]">{official.position}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column - News items */}
          <div className="md:col-span-2 space-y-4">
            {whatsNewData.notices?.map((notice, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                <div className="flex-shrink-0">
                  <div className="flex flex-col items-center justify-center w-12 h-12 bg-[var(--color-muted)] rounded-lg">
                    <span className="text-xs font-bold text-[var(--color-secondary)]">{notice.date.split(" ")[0]}</span>
                    <span className="text-xs text-[var(--color-muted-foreground)]">{notice.date.split(" ")[1]}</span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[var(--color-primary)] mb-2">{notice.title}</p>
                  <div className="flex gap-2 flex-wrap">
                    {notice.tags?.map((tag, tagIdx) => (
                      <Chip key={tagIdx} label={tag} variant="outlined" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
