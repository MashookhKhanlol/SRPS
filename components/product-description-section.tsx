"use client"
import { useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"

type Product = {
  name: string
  summary: string
  description: string
  features: string[]
  applications: string[]
  image: string
}

const products: Product[] = [
  {
    name: "Monocrystalline Solar Panel",
    summary: "High-efficiency premium panels for maximum output in limited space.",
    description:
      "Monocrystalline solar panels are made from a single, high-purity silicon crystal, giving them a uniform dark appearance and strong efficiency, even in low-light and high-temperature conditions.",
    features: [
      "High Efficiency: Typically 18%–22%, more power in less space",
      "Long Lifespan: 25+ years of reliable performance",
      "Better Low-Light Performance: Works efficiently in cloudy or shaded conditions",
      "Space Saving: Ideal where roof area is limited",
      "Premium Quality: Higher output and durability",
    ],
    applications: [
      "Homes, offices, factories, rooftops",
      "On-grid and off-grid solar systems",
    ],
    image: "/Monocrystalline Solar Panel.png",
  },
  {
    name: "Polycrystalline Solar Panel",
    summary: "Cost-effective and reliable panels for larger rooftops and ground mounts.",
    description:
      "Polycrystalline panels are made from multiple silicon crystals, offering a dependable and economical option with a distinctive blue, speckled look.",
    features: [
      "Affordable Cost: More economical than monocrystalline",
      "Good Efficiency: Typically 15%–18%",
      "Durable & Reliable: 25+ year service life",
      "Environment Friendly: Less silicon waste during manufacturing",
      "Easy Installation: Great for large rooftops and ground-mounted systems",
    ],
    applications: [
      "Homes and commercial buildings",
      "Factories, solar parks, on-grid and off-grid systems",
    ],
    image: "/Polycrystalline Solar Panel.PNG",
  },
  {
    name: "Thin-Film Solar Panel",
    summary: "Lightweight, flexible panels suited for specialized and large-scale installs.",
    description:
      "Thin-film panels use photovoltaic layers on glass, metal, or plastic, delivering flexible, lightweight, and cost-effective power for unique mounting surfaces.",
    features: [
      "Lightweight & Flexible: Works on curved or weak roofs",
      "Better Heat Performance: Less efficiency loss at high temperatures",
      "Low-Light Efficiency: Performs well in diffused sunlight",
      "Cost-Effective: Lower manufacturing and installation cost",
      "Aesthetic Design: Uniform modern look",
    ],
    applications: [
      "Commercial rooftops, industrial sheds, warehouses",
      "Solar farms, BIPV (Building-Integrated Photovoltaics)",
    ],
    image: "/Thin Film Solar Panels.PNG",
  },
  {
    name: "Bifacial Solar Panel",
    summary: "Dual-side generation for higher yields from reflected light.",
    description:
      "Bifacial panels generate power from both sides, capturing sunlight reflected from the ground or nearby surfaces to deliver higher total energy output.",
    features: [
      "Dual-Side Power Generation: Front + rear side production",
      "Higher Energy Yield: Up to 10%–30% more output",
      "High Efficiency: Often built with mono cells",
      "Longer Lifespan: Glass-to-glass design improves durability",
      "Better Performance: Strong in high temperatures and diffused light",
    ],
    applications: [
      "Commercial & industrial projects",
      "Ground-mounted plants, rooftop systems, large EPC projects",
    ],
    image: "/Bifacial Solar Panel.PNG",
  },
  {
    name: "PERC Solar Panel",
    summary: "Enhanced mono panels with rear-cell passivation for better capture.",
    description:
      "PERC (Passivated Emitter and Rear Cell) panels add a rear passivation layer to capture more light, reducing energy loss and improving overall efficiency.",
    features: [
      "Higher Efficiency: Typically 19%–22%",
      "Improved Light Absorption: Rear passivation reflects unused light",
      "Better Low-Light Performance: Generates power in early mornings and cloudy conditions",
      "Enhanced Heat Performance: Lower power loss at high temperatures",
      "Long Lifespan: Reliable output with 25+ year warranties",
    ],
    applications: [
      "Residential rooftops, commercial buildings, industrial units",
      "On-grid and hybrid solar systems",
    ],
    image: "/PERC Solar Panel.jpg",
  },
  {
    name: "TOPCon Solar Panel",
    summary: "Next-gen high-efficiency cells with reduced degradation.",
    description:
      "TOPCon (Tunnel Oxide Passivated Contact) panels reduce electron loss and boost conversion efficiency, delivering strong performance over the long term.",
    features: [
      "Very High Efficiency: Typically 22%–24%",
      "Lower Power Degradation: Better long-term performance than PERC",
      "Excellent Heat Performance: Less efficiency loss in high temperatures",
      "Strong Low-Light Output: Works well morning, evening, and cloudy conditions",
      "Bifacial Compatible: Can gain extra power from rear reflection",
    ],
    applications: [
      "Residential rooftops, commercial & industrial projects",
      "Large solar plants, on-grid and hybrid systems",
    ],
    image: "/TOPCon Solar Panel.PNG",
  },
  {
    name: "HIT Solar Panel",
    summary: "Premium heterojunction panels combining crystalline and thin-film benefits.",
    description:
      "HIT (Heterojunction with Intrinsic Thin-layer) panels sandwich a crystalline silicon wafer between thin amorphous layers, improving efficiency and heat tolerance.",
    features: [
      "High Efficiency: Excellent conversion versus standard panels",
      "Better Heat Performance: Lower temperature coefficient reduces losses",
      "Superior Low-Light Output: Strong in mornings, evenings, and cloudy weather",
      "Long-Term Reliability: Slower degradation over the years",
      "Space-Saving: More power per square meter",
    ],
    applications: [
      "Residential rooftops, commercial buildings, industrial installations",
      "High-performance on-grid and hybrid systems",
    ],
    image: "/HIT Solar Panel.PNG",
  },
]

export function ProductDescriptionSection() {
  const [active, setActive] = useState<Product | null>(null)

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-block bg-[#E9F6FF] px-6 py-2 rounded-full mb-4">
            <span className="text-[#0A6FB0] font-semibold text-sm md:text-base">
              We Only Deal with High Quality Products
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3">Products</h2>
          <p className="text-gray-600 text-sm md:text-base">With Best Installation Team !!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col"
            >
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-800 leading-snug">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-1 line-clamp-3">
                  {product.summary}
                </p>
              </div>
              <div className="mt-auto">
                <button
                  onClick={() => setActive(product)}
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
                  {/* Mobile Image - shown only on small screens */}
                  <div className="md:hidden relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={active.image}
                      alt={active.name}
                      fill
                      className="object-contain"
                    />
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
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Applications</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2">
                      {active.applications.map((app) => (
                        <li key={app}>{app}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="hidden md:flex items-center justify-center p-5 md:p-6 bg-gray-50">
                  <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={active.image}
                      alt={active.name}
                      fill
                      className="object-contain"
                    />
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

