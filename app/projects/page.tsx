"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutCompanyImageSlide } from "@/components/about-company-image-slide"
import { TestimonialCarousel } from "@/components/ui/testimonial"
import { ProjectExperienceSection } from "@/components/ui/feature-section-with-hover-effects"
import { X, Check } from "lucide-react"

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>("dual-mode")

  const testimonials = [
    {
      id: 1,
      quote: "Sun Radiation Power Solutions installed a complete solar system for our home. The installation was professional, and we've seen significant savings on our electricity bills. Highly recommended!",
      name: "Rajesh Kumar",
      role: "Homeowner",
      company: "Residential Customer",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
      rating: 5
    },
    {
      id: 2,
      quote: "Excellent service and quality products. The team was knowledgeable and guided us through the entire process. Our solar panels are working perfectly and we're very satisfied with the results.",
      name: "Priya Sharma",
      role: "Business Owner",
      company: "Sharma Industries",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
      rating: 5
    },
    {
      id: 3,
      quote: "The maintenance service provided by SRPS is outstanding. They regularly check our system and ensure everything runs smoothly. Great customer support and reliable service.",
      name: "Amit Patel",
      role: "Facility Manager",
      company: "GreenTech Solutions",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
      rating: 5
    },
    {
      id: 4,
      quote: "We installed solar panels for our factory and the results exceeded our expectations. The ROI has been excellent and the team's expertise made the whole process seamless.",
      name: "Vikram Singh",
      role: "Operations Director",
      company: "Manufacturing Corp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
      rating: 5
    },
    {
      id: 5,
      quote: "Professional installation, quality products, and excellent after-sales support. SRPS has been our trusted partner for solar energy solutions. Very happy with their service!",
      name: "Anjali Mehta",
      role: "Property Developer",
      company: "Mehta Constructions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
      rating: 5
    },
    {
      id: 6,
      quote: "The consultation service helped us choose the perfect solar solution for our needs. The team was patient, explained everything clearly, and the installation was completed on time.",
      name: "Suresh Reddy",
      role: "CEO",
      company: "TechStart India",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100",
      rating: 5
    },
  ]

  // Gallery images from public folder - using first 15 images for the work profile grid
  const workProfileImages = Array.from({ length: 15 }, (_, i) => {
    const imageNumber = i + 1
    return {
      src: `/gallery (${imageNumber}).jpg`,
      alt: `Project ${imageNumber}`
    }
  })

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Projects Banner Section */}
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
          <h1 className="text-4xl md:text-6xl font-bold text-white">Projects</h1>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">WHO WE ARE ?</h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Sun Radiation Power Solutions is a dedicated solar energy company focused on 
                  delivering clean, reliable, and cost-effective renewable energy solutions. We 
                  specialize in the supply, installation, and maintenance of high-quality solar panels, 
                  solar inverters, solar batteries, and both on-grid and off-grid solar power systems. 
                  Our mission is to help residential, commercial, and industrial customers reduce 
                  electricity costs while contributing to a greener and more sustainable environment.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  With a strong emphasis on quality, safety, and performance, our experienced team 
                  designs customized solar solutions based on each client's energy needs. We follow 
                  industry best practices and use trusted technology to ensure long-term efficiency 
                  and durability. At Sun Radiation Power Solutions, customer satisfaction, timely 
                  project execution, and transparent service are our core values. We believe solar 
                  energy is the future, and we are committed to empowering communities by making 
                  clean energy accessible, affordable, and dependable for everyone.
                </p>
              </div>
            </div>

            {/* Right Column - About us image slide */}
            <AboutCompanyImageSlide className="h-64 md:h-80" />
          </div>
        </div>
      </section>

      {/* Get A Solutions CTA Banner */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/Solar Bg.png')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-[#083B63]/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-white text-lg md:text-xl mb-4">Don't Know What To Start With?</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Get A Solutions For All Solar Panel Services
          </h2>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10 text-center">
            Our Project Experience
          </h2>
          <ProjectExperienceSection />
        </div>
      </section>

      {/* Project Types Tabs Section */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 border-b-2 border-gray-200 pb-4">
            <button
              onClick={() => setActiveTab("dual-mode")}
              className={`px-6 py-3 text-lg font-semibold rounded-t-lg transition ${
                activeTab === "dual-mode"
                  ? "bg-[#0A6FB0] text-white border-b-2 border-[#0A6FB0]"
                  : "text-gray-600 hover:text-[#0A6FB0] hover:bg-gray-50"
              }`}
            >
              Dual-mode Solar Pump
            </button>
            <button
              onClick={() => setActiveTab("street-lights")}
              className={`px-6 py-3 text-lg font-semibold rounded-t-lg transition ${
                activeTab === "street-lights"
                  ? "bg-[#0A6FB0] text-white border-b-2 border-[#0A6FB0]"
                  : "text-gray-600 hover:text-[#0A6FB0] hover:bg-gray-50"
              }`}
            >
              Street Lights
            </button>
            <button
              onClick={() => setActiveTab("solar-hymas")}
              className={`px-6 py-3 text-lg font-semibold rounded-t-lg transition ${
                activeTab === "solar-hymas"
                  ? "bg-[#0A6FB0] text-white border-b-2 border-[#0A6FB0]"
                  : "text-gray-600 hover:text-[#0A6FB0] hover:bg-gray-50"
              }`}
            >
              Solar Hymas
            </button>
          </div>

          {/* Tab Content */}
          <div className="mb-12 min-h-[200px]">
            {activeTab === "dual-mode" && (
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    What is a Dual Pump in Solar?
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    A dual pump in solar (also called a dual-mode solar pump) is a solar water pumping system that can operate using two power sources:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-2xl">☀️</span>
                      <span>Solar power (DC from solar panels)</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="text-2xl">⚡</span>
                      <span>Grid electricity or generator (AC power)</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
                    This ensures continuous water supply, even when sunlight is low or unavailable.
                  </p>
                </div>

                <div className="bg-[#E9F6FF] rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">How a Dual Solar Pump Works</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#0A6FB0] font-bold">•</span>
                      <span>During daytime, the pump runs on solar energy.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0A6FB0] font-bold">•</span>
                      <span>At night or on cloudy days, it automatically switches to AC power (electricity or generator).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0A6FB0] font-bold">•</span>
                      <span>The changeover is managed by a solar pump controller—no manual switching needed.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Types of Dual Pumps</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">DC + AC Motor Pump</h5>
                      <p className="text-sm text-gray-600">Works directly on solar DC and grid AC.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Solar Pump with Controller (Hybrid System)</h5>
                      <p className="text-sm text-gray-600">Uses solar first, grid as backup.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Dual Pump Set</h5>
                      <p className="text-sm text-gray-600">Two separate pumps: one solar, one electric (used alternately).</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Applications of Dual Solar Pumps</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {["🌾 Agriculture & irrigation", "🏡 Homes & farmhouses", "🐄 Dairy farms", "🏭 Small industries", "🚰 Community water supply"].map((app, index) => (
                      <div key={index} className="text-center p-3 bg-white border border-gray-200 rounded-lg">
                        <p className="text-sm text-gray-700">{app}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#E9F6FF] rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Advantages of Dual Pump in Solar</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "✔ Water supply even without sunlight",
                      "✔ Lower electricity bills",
                      "✔ Reliable backup system",
                      "✔ Ideal for rural & semi-urban areas",
                      "✔ Long life and low maintenance"
                    ].map((advantage, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <span>{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeTab === "street-lights" && (
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Solar Street Lights
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    A solar street light is an outdoor lighting system used in solar projects that works completely on solar energy. It converts sunlight into electricity during the day and automatically provides lighting at night—without depending on grid electricity.
                  </p>
                </div>

                <div className="bg-[#E9F6FF] rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">How a Solar Street Light Works</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#0A6FB0] font-bold">☀️</span>
                      <span><strong>Solar Panel</strong> absorbs sunlight during daytime.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0A6FB0] font-bold">🔋</span>
                      <span><strong>Battery</strong> stores the generated electricity.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0A6FB0] font-bold">🌙</span>
                      <span>At night, the <strong>controller</strong> automatically switches ON the LED light.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0A6FB0] font-bold">🌅</span>
                      <span>At sunrise, the light turns OFF automatically.</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-4 italic">
                    This automatic operation makes solar street lights highly efficient and maintenance-friendly.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Main Components of a Solar Street Light</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Solar Panel</h5>
                      <p className="text-sm text-gray-600">Generates power from sunlight</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">LED Lamp</h5>
                      <p className="text-sm text-gray-600">Provides bright, energy-efficient lighting</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Battery</h5>
                      <p className="text-sm text-gray-600">Lithium / Tubular / Gel - Stores energy</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Charge Controller</h5>
                      <p className="text-sm text-gray-600">Controls charging & discharging</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Pole & Mounting Structure</h5>
                      <p className="text-sm text-gray-600">Supports the system</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Types of Solar Street Lights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">All-in-One Solar Street Light</h5>
                      <p className="text-sm text-gray-600">Panel, battery & light in one unit</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Semi-Integrated Solar Street Light</h5>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Standalone Solar Street Light</h5>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Smart Solar Street Light</h5>
                      <p className="text-sm text-gray-600">With sensors & remote monitoring</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Applications in Solar Projects</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "✔ Roads & highways",
                      "✔ Villages & rural areas",
                      "✔ Housing societies",
                      "✔ Industrial areas",
                      "✔ Parks & public places",
                      "✔ Government & municipal projects"
                    ].map((app, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-lg">
                        <span className="text-gray-700 text-sm">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#E9F6FF] rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Advantages of Solar Street Lights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "✔ No electricity bill",
                      "✔ Works during power cuts",
                      "✔ Automatic ON/OFF operation",
                      "✔ Environment-friendly",
                      "✔ Low maintenance cost",
                      "✔ Easy installation"
                    ].map((advantage, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <span>{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border-l-4 border-[#0A6FB0] p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Why Solar Street Lights Are Important in Projects</h4>
                  <p className="text-gray-700 leading-relaxed">
                    In solar projects, street lights improve safety, visibility, and infrastructure while reducing operational costs. They are widely used in government schemes, smart city projects, rural electrification, and commercial developments.
                  </p>
                </div>
              </div>
            )}
            {activeTab === "solar-hymas" && (
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Solar HYMAS
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Solar HYMAS stands for <strong>Hybrid Mini-grid Solar System</strong>. It is a hybrid solar power system that combines solar panels, batteries, and grid or diesel generator (DG) backup to provide reliable, continuous electricity.
                  </p>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
                    Solar HYMAS is mainly used in villages, institutions, commercial buildings, and remote areas where power supply is irregular.
                  </p>
                </div>

                <div className="bg-[#E9F6FF] rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">How a Solar HYMAS System Works</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#0A6FB0] font-bold">☀️</span>
                      <span><strong>Daytime:</strong> Solar panels generate electricity and run loads; extra power charges batteries.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0A6FB0] font-bold">🔋</span>
                      <span><strong>Battery Mode:</strong> Stored energy supplies power during night or outages.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0A6FB0] font-bold">⚡</span>
                      <span><strong>Grid/DG Backup:</strong> When solar and battery are insufficient, the system automatically switches to grid or generator.</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-4 font-semibold">
                    This ensures 24×7 power availability.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Main Components of Solar HYMAS</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Solar PV Panels</h5>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Hybrid Inverter</h5>
                      <p className="text-sm text-gray-600">Solar + Grid + Battery</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Battery Bank</h5>
                      <p className="text-sm text-gray-600">Lithium / Tubular / Gel</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Grid or Diesel Generator</h5>
                      <p className="text-sm text-gray-600">Backup</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Distribution Panel & Protection Devices</h5>
                    </div>
                  </div>
                </div>

                {/* Comparison Table */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Solar HYMAS vs Normal Solar System</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-[#0A6FB0] text-white">
                          <th className="px-6 py-4 text-left font-semibold text-base md:text-lg">Feature</th>
                          <th className="px-6 py-4 text-left font-semibold text-base md:text-lg">Normal Solar</th>
                          <th className="px-6 py-4 text-left font-semibold text-base md:text-lg">Solar HYMAS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100 transition">
                          <td className="px-6 py-4 text-gray-800 font-medium text-base md:text-lg">Power Sources</td>
                          <td className="px-6 py-4 text-gray-700 text-base md:text-lg">Solar only</td>
                          <td className="px-6 py-4 text-gray-700 text-base md:text-lg">Solar + Battery + Grid/DG</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-white hover:bg-gray-100 transition">
                          <td className="px-6 py-4 text-gray-800 font-medium text-base md:text-lg">Night Supply</td>
                          <td className="px-6 py-4 text-gray-700 text-base md:text-lg">Limited</td>
                          <td className="px-6 py-4 text-gray-700 text-base md:text-lg">Continuous</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100 transition">
                          <td className="px-6 py-4 text-gray-800 font-medium text-base md:text-lg">Reliability</td>
                          <td className="px-6 py-4 text-gray-700 text-base md:text-lg">Medium</td>
                          <td className="px-6 py-4 text-gray-700 text-base md:text-lg">High</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-white hover:bg-gray-100 transition">
                          <td className="px-6 py-4 text-gray-800 font-medium text-base md:text-lg">Application</td>
                          <td className="px-6 py-4 text-gray-700 text-base md:text-lg">Homes</td>
                          <td className="px-6 py-4 text-gray-700 text-base md:text-lg">Projects & communities</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Applications of Solar HYMAS</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      "✔ Village electrification & mini-grids",
                      "✔ Schools, hostels & hospitals",
                      "✔ Telecom towers",
                      "✔ Government & rural development projects",
                      "✔ Commercial buildings & campuses",
                      "✔ Industrial backup power systems"
                    ].map((app, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-lg">
                        <span className="text-gray-700 text-sm">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#E9F6FF] rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Advantages of Solar HYMAS</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "✔ Uninterrupted power supply",
                      "✔ Reduced diesel & electricity cost",
                      "✔ Works during power cuts",
                      "✔ Eco-friendly & sustainable",
                      "✔ Ideal for remote and rural areas",
                      "✔ Scalable system (can be expanded later)"
                    ].map((advantage, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <span>{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Status Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/#government-subsidy"
              className="px-8 py-4 bg-[#0A6FB0] text-white rounded-lg font-semibold hover:bg-[#083B63] transition text-center text-lg min-w-[200px]"
            >
              Ongoing Projects
            </a>
            <a
              href="/projects?status=completed"
              className="px-8 py-4 bg-[#0A6FB0] text-white rounded-lg font-semibold hover:bg-[#083B63] transition text-center text-lg min-w-[200px]"
            >
              Completed Projects
            </a>
          </div>
        </div>
      </section>

      {/* Project Highlights Section */}
      <section className="bg-gradient-to-b from-[#E9F6FF] to-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
            Our Project Highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left: Highlight list */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0A6FB0] rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Customized system design</h3>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0A6FB0] rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">High-quality solar panels &amp; inverters</h3>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0A6FB0] rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Safe and professional installation</h3>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0A6FB0] rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Timely project execution</h3>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-[#0A6FB0] rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Long-term performance &amp; support</h3>
                </div>
              </div>
            </div>

            {/* Right: Commitment text */}
            <div className="space-y-3 md:text-left text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A6FB0]">
                Commitment to Clean Energy
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Every project we deliver stands as a testament to our dedication to clean, renewable energy and complete
                customer satisfaction. We approach each installation with a strong focus on quality, efficiency, and
                long-term performance, ensuring our clients receive dependable solar solutions they can trust. By
                combining advanced technology with industry best practices, we create systems that are both
                environmentally responsible and economically viable. <br/><br/>Our growing portfolio reflects our ability to
                successfully execute projects across residential, commercial, and industrial sectors. As we continue to
                expand, we remain committed to providing innovative, reliable, and cost-effective solar energy solutions
                that support a sustainable and greener future for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Profile Section */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-gray-500 text-sm md:text-base mb-2">Showcasing Our Amazing Work</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">Work Profile</h2>
          
          {/* Gallery Grid - 3 rows of 5 images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {workProfileImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-200 group"
                onClick={() => openModal(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 20vw, (max-width: 768px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="customer-reviews" className="bg-[var(--color-muted)] py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Customer Reviews
            </h2>
            <p className="text-sm md:text-base text-[var(--color-muted-foreground)]">
              See what our satisfied customers have to say about our products and services
            </p>
          </div>

          <TestimonialCarousel 
            testimonials={testimonials} 
            autoScrollInterval={4000}
          />
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Project image"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}

