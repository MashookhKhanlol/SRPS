"use client"

import Image from "next/image"
import { processStepsData } from "@/data/process-steps"

export function RegistrationStepper() {
  return (
    <section className="bg-white py-12 md:py-20 border-t border-gray-100 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--color-primary)]">
        Consumer <span className="text-[var(--color-secondary)]">Registration Process</span>
      </h2>

      <p className="text-center text-[var(--color-muted-foreground)] mb-12 max-w-2xl mx-auto text-sm md:text-base">
        Follow these simple steps to register for the PM Surya Ghar Mufti Bijli Yojana
      </p>

      {/* Stepper container - scrollable on mobile */}
      <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex gap-4 md:gap-6 min-w-max md:min-w-0 md:grid md:grid-cols-6">
          {processStepsData.steps?.map((step, idx) => (
            <div key={idx} className="flex-shrink-0 w-48 md:w-auto">
              {/* Step card */}
              <div className="bg-gradient-to-b from-[var(--color-muted)] to-[var(--color-card)] rounded-2xl border-2 border-[var(--color-secondary)] p-6 md:p-4 h-96 md:h-80 flex flex-col items-center text-center hover:shadow-lg transition">
                {/* Icon area */}
                <div className="w-20 h-20 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                  <Image
                    src={`/.jpg?key=tf6nr&height=64&width=64&query=${step.icon}`}
                    alt={step.title}
                    width={64}
                    height={64}
                    className="w-full h-full"
                  />
                </div>

                {/* Step number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-xs font-bold text-[var(--color-primary)]">
                  {step.step}
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-base font-bold text-[var(--color-primary)] mb-2">{step.title}</h3>

                <p className="text-xs md:text-sm text-[var(--color-muted-foreground)] leading-relaxed flex-1 overflow-hidden">
                  {step.description}
                </p>

                {/* Connector line indicator for desktop */}
                {idx < processStepsData.steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-6 h-0.5 bg-gradient-to-r from-[var(--color-secondary)] to-transparent"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile scroll indicator */}
      <p className="md:hidden text-center text-xs text-[#516C7A] mt-4">Scroll right to see all steps →</p>
    </section>
  )
}
