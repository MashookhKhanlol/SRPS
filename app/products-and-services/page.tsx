"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDescriptionSection } from "@/components/product-description-section"
import { PanelComparisonSection } from "@/components/panel-comparison-section"
import { InverterDescriptionSection } from "@/components/inverter-description-section"
import { MeterDescriptionSection } from "@/components/meter-description-section"
import { OtherProductsSection } from "@/components/other-products-section"
import { ServicesSRPSSection } from "@/components/services-srps-section"

export default function ProductsAndServicesPage() {
  const executionImages = ["/11 (1).jpg", "/11 (2).jpg", "/11 (3).jpg", "/11 (4).jpg"]
  const [currentExecutionImage, setCurrentExecutionImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExecutionImage((prev) => (prev + 1) % executionImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [executionImages.length])

  const products = [
    {
      title: "Ongrid Solar",
      description: "Grid-tied solar systems that connect to the utility grid, allowing you to sell excess energy back to the grid and reduce your electricity bills.",
    },
    {
      title: "OFF Grid Solar Systems",
      description: "Standalone solar systems that operate independently from the utility grid, perfect for remote locations and areas with unreliable grid power.",
    },
    {
      title: "Hybrid Solar Systems",
      description: "Advanced systems that combine grid-tied and off-grid features, providing flexibility and reliability with battery backup capabilities.",
    },
    {
      title: "Solar Water Pumps",
      description: "Efficient solar-powered water pumping systems that connect to the utility grid, ideal for agricultural and irrigation applications.",
    },
    {
      title: "Solar Lights",
      description: "Standalone off-grid solar LED parking and street light systems that provide reliable illumination without grid dependency.",
    },
    {
      title: "Solar Water Heater",
      description: "Energy-efficient devices that use solar radiation to heat water, providing hot water for residential and commercial use while reducing energy costs.",
    },
  ]

  const processSteps = [
    {
      step: "Step 1",
      title: "Site Visit",
      description: "Our team conducts a comprehensive site visit to assess your location, energy requirements, and installation feasibility.",
    },
    {
      step: "Step 2",
      title: "Design and Documentation",
      description: "We create detailed system designs and prepare all necessary documentation including technical specifications and project plans.",
    },
    {
      step: "Step 3",
      title: "Fabrication & Installation",
      description: "Our skilled technicians fabricate and install the solar system with precision, ensuring optimal performance and safety standards.",
    },
    {
      step: "Step 4",
      title: "Commissioning & Net Meter",
      description: "We complete system commissioning, perform quality checks, and assist with net metering setup for grid-connected systems.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Header Section with Background Image */}
      <section className="relative w-full h-64 md:h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/Solar Bg.png')",
            backgroundAttachment: "fixed",
          }}
        >
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white uppercase">PRODUCTS & SERVICES</h1>
        </div>
      </section>

      {/* Top-Notch Quality Products Section */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Quality Guaranteed Banner */}
          <div className="text-center mb-4">
            <div className="inline-block bg-[#E9F6FF] px-6 py-2 rounded-full mb-6">
              <span className="text-[#0A6FB0] font-semibold text-sm md:text-base">Quality Guaranteed</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
            Top-Notch Quality Products
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Product Execution Process Section */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">Our Product Execution Process</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Image Carousel */}
            <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden bg-gray-100">
              {executionImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentExecutionImage ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Execution process image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {executionImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentExecutionImage(index)}
                    className={`w-2 h-2 rounded-full transition ${
                      index === currentExecutionImage ? "bg-white w-6" : "bg-white/50"
                    }`}
                    aria-label={`Go to execution image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-6">
              {processSteps.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#0A6FB0] rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-sm font-semibold text-[#0A6FB0]">{item.step}</span>
                      <span className="text-lg font-bold text-gray-800">{item.title}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Descriptions with pop-up details */}
      <ProductDescriptionSection />

      {/* Panel comparison table (Learn Easy with Table) */}
      <PanelComparisonSection />

      {/* Meter product descriptions */}
      <MeterDescriptionSection />

      {/* Inverter descriptions with pop-up details */}
      <InverterDescriptionSection />

      {/* Other supporting products */}
      <OtherProductsSection />

      {/* Services provided by SRPS */}
      <ServicesSRPSSection />

      <Footer />
    </main>
  )
}
