"use client"
import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

type Meter = {
  name: string
  summary: string
  description: string
  features: string[]
  uses: string[]
  image: string
}

const meters: Meter[] = [
  {
    name: "Analog Meter",
    summary: "Traditional needle-and-dial meter for basic electrical measurements.",
    description:
      "An analog meter is a traditional electrical measuring instrument that displays readings using a moving pointer (needle) and a printed scale. It is widely used to measure electrical parameters like voltage (V), current (A), and resistance (Ω) in homes, industries, and solar power systems.",
    features: [
      "Needle & Dial Display: Easy visual indication of measurements",
      "Simple & Durable: Reliable with fewer electronic components",
      "Real-Time Response: Needle moves instantly with changing values",
      "No Power Needed: Basic analog meters can work without external power",
    ],
    uses: [
      "Measuring voltage, current, and resistance in electrical systems",
      "Testing and troubleshooting circuits",
      "Monitoring solar system parameters (with appropriate meter type)",
    ],
    image: "/Analog Meter.jpg",
  },
  {
    name: "Digital Meter",
    summary: "Modern numeric-display meter for accurate electrical readings.",
    description:
      "A digital meter is a modern electrical measuring instrument that displays readings in numerical form on an LCD or LED screen. It is widely used to measure voltage (V), current (A), power (kW), and energy (kWh) in residential, commercial, industrial, and solar power systems.",
    features: [
      "Clear Digital Display: Easy-to-read numeric values",
      "High Accuracy: Precise measurements of electrical parameters",
      "Multi-Parameter Measurement: Voltage, current, power, and energy",
      "User-Friendly: Ideal for both basic and advanced diagnostics",
    ],
    uses: [
      "Monitoring electrical loads in homes and offices",
      "Measuring power and energy consumption",
      "Checking performance of solar inverters and systems",
    ],
    image: "/Digital Meter.webp",
  },
  {
    name: "Smart Meter",
    summary: "Advanced digital meter with remote monitoring and data logging.",
    description:
      "A smart meter is an advanced digital electricity meter that measures power consumption and automatically records, stores, and transmits data to the utility or monitoring system. It is widely used in modern solar power systems, smart homes, and commercial installations for accurate energy tracking and billing.",
    features: [
      "Real-Time Energy Monitoring: Tracks electricity usage instantly",
      "Two-Way Communication: Sends and receives data remotely",
      "High Accuracy: Precise measurement of energy consumption and generation",
      "Solar Compatible: Supports net metering and bidirectional energy flow",
      "Remote Reading & Data Logging: Enables detailed analysis and optimization",
    ],
    uses: [
      "Residential and commercial electricity billing",
      "Solar rooftop systems with net metering",
      "Smart grids and advanced utility management",
      "Energy monitoring and load management",
    ],
    image: "/Smart Meter.webp",
  },
  {
    name: "Net Meter",
    summary: "Bi-directional meter for on-grid solar with net metering.",
    description:
      "A net meter is a special type of electricity meter used in grid-connected (on-grid) solar systems. It records both the electricity consumed from the grid and the surplus solar power exported back to the grid, enabling accurate billing under the net metering system.",
    features: [
      "Bi-Directional Measurement: Measures import and export energy",
      "Accurate Billing: Ensures you pay only for net electricity used",
      "Solar Compatible: Essential for on-grid rooftop solar systems",
      "Utility Approved: Installed as per DISCOM and government norms",
    ],
    uses: [
      "Residential rooftops with on-grid solar systems",
      "Commercial buildings using net metering",
      "Industrial solar installations tied to the utility grid",
    ],
    image: "/Net Meter.webp",
  },
  {
    name: "TOD Meter",
    summary: "Time-of-day meter for variable tariffs and load management.",
    description:
      "A TOD (Time of Day) meter is an advanced electricity meter that records power consumption based on different time slots of the day. The electricity tariff varies according to peak, normal, and off-peak hours, helping utilities manage load and consumers optimize energy usage.",
    features: [
      "Time-Based Measurement: Records usage in different time periods",
      "Different Tariff Slabs: Higher rates during peak hours, lower during off-peak",
      "High Accuracy: Digital meter with precise energy recording",
      "Solar Compatible: Used with on-grid and commercial solar systems",
    ],
    uses: [
      "Commercial buildings and industries with TOD tariff",
      "High-load consumers optimizing electricity costs",
      "Solar rooftop systems as per DISCOM rules",
    ],
    image: "/TOD Meter.webp",
  },
  {
    name: "Trivector Meter",
    summary: "Three-in-one meter for kWh, kVArh, and kVAh measurement.",
    description:
      "A trivector meter is a specialized electricity meter used mainly in commercial and industrial power systems. It measures Active Energy (kWh), Reactive Energy (kVArh), and Apparent Energy (kVAh), making it essential for accurate billing and power quality monitoring.",
    features: [
      "Three-in-One Measurement: kWh, kVArh, and kVAh",
      "High Accuracy: Designed for HT/LT commercial and industrial connections",
      "Solar Compatible: Used with large on-grid and net-metered solar systems",
      "Power Factor Monitoring: Helps control penalties and improve efficiency",
    ],
    uses: [
      "Industries and large commercial buildings",
      "Substations and HT/LT consumers",
      "Large solar EPC and utility-scale projects",
    ],
    image: "/Trivector Meter.webp",
  },
  {
    name: "LICT / HICT Meter",
    summary: "CT/PT-based meters for high-capacity HT/LT power systems.",
    description:
      "LICT (Low-Income Current Transformer) and HICT (High-Income Current Transformer) meters are specialized energy meters used in high-voltage (HT) and low-voltage (LT) industrial or commercial power connections. They work with current transformers (CT) and potential transformers (PT) to accurately measure electricity in large-scale power systems.",
    features: [
      "High Accuracy: Measures energy precisely for HT/LT connections",
      "CT/PT Compatible: Works with external transformers for large currents",
      "Digital / Smart Versions: Support advanced monitoring and analytics",
      "Power Factor & Demand Monitoring: Ensures correct billing and efficiency",
    ],
    uses: [
      "Large industries and factories",
      "Commercial buildings with high power loads",
      "HT/LT solar power plants and EPC projects",
      "Substations and utility monitoring",
    ],
    image: "/LICT HICT Meter.webp",
  },
]

export function MeterDescriptionSection() {
  const [active, setActive] = useState<Meter | null>(null)

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-block bg-[#E9F6FF] px-6 py-2 rounded-full mb-4">
            <span className="text-[#0A6FB0] font-semibold text-sm md:text-base">Meters for Every Solar Need</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3">Meters</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Professional-grade meters for monitoring, billing, and optimizing your solar and electrical systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meters.map((meter) => (
            <div
              key={meter.name}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col"
            >
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-100">
                <Image src={meter.image} alt={meter.name} fill className="object-contain" />
              </div>
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-800 leading-snug">{meter.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-1 line-clamp-3">{meter.summary}</p>
              </div>
              <div className="mt-auto">
                <button
                  onClick={() => setActive(meter)}
                  className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-[#0A6FB0] text-white text-sm font-semibold rounded-md hover:bg-[#083B63] transition w-full"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{active.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{active.summary}</p>
              </div>
              <button
                aria-label="Close"
                onClick={() => setActive(null)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
                {/* Left Side - Description */}
                <div className="p-5 md:p-6 space-y-4 overflow-y-auto">
                  {/* Mobile Image */}
                  <div className="md:hidden relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <Image src={active.image} alt={active.name} fill className="object-contain" />
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">{active.description}</p>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features &amp; Benefits</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2">
                      {active.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Common Uses</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2">
                      {active.uses.map((use) => (
                        <li key={use}>{use}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="hidden md:flex items-center justify-center p-5 md:p-6 bg-gray-50">
                  <div className="relative w-full h-full min-h-[320px] rounded-lg overflow-hidden">
                    <Image src={active.image} alt={active.name} fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5 py-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setActive(null)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


