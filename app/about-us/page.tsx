"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Settings, Users, Wrench, Truck, Monitor, Hammer } from "lucide-react"

export default function AboutUsPage() {
  const expertiseAreas = [
    {
      icon: Settings,
      title: "Design & Engineering",
    },
    {
      icon: Users,
      title: "Project Manager",
    },
    {
      icon: Hammer,
      title: "Erection and Commissioning",
    },
    {
      icon: Wrench,
      title: "Operation and Maintenance",
    },
    {
      icon: Truck,
      title: "Supply of Material",
    },
    {
      icon: Monitor,
      title: "Monitoring System",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Header Section with Background */}
      <section className="relative w-full h-64 md:h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#083B63]/90"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">ABOUT US</h1>
        </div>
      </section>

      {/* About Company Section */}
      <section className="bg-gradient-to-b from-[#E9F6FF] to-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Image/Graphic */}
            <div className="w-full">
              <div className="bg-[#083B63] rounded-lg p-8 md:p-12 text-white">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">It's time for SOLAR ENERGY</h3>
                  <div className="text-4xl md:text-5xl font-bold">SOLAR ENERGY</div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="bg-white/20 rounded-lg p-4 flex items-center justify-center aspect-square"
                    >
                      <div className="text-2xl">
                        {item === 1 && "🏠"}
                        {item === 2 && "🌬️"}
                        {item === 3 && "🌱"}
                        {item === 4 && "♻️"}
                        {item === 5 && "☀️"}
                        {item === 6 && "⚡"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">About Company</h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  APN Solar Energy Pvt. Ltd. is a JV Manufacturer, Energy consultant, and EPC company 
                  dedicated to making renewable energy economically viable for everyone. Established in 
                  Mumbai in 2017, we have grown to become a leading player in the solar energy sector.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  With a manufacturing capacity of 2 GWPA (Gigawatt Per Annum), we are committed to 
                  delivering high-quality solar solutions. Our business franchise platform enables 
                  partners across India to offer sustainable energy solutions to their communities.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  We focus on residential, commercial, and industrial power solutions, ensuring that 
                  every project meets the highest standards of quality, efficiency, and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Side - Text */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">WHO WE ARE ?</h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  APN Solar Energy Pvt. Ltd. is a leading solar energy company driven by a team of 
                  passionate professionals dedicated to transforming the renewable energy landscape. 
                  Our expertise spans solar technology, engineering, and project management.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  We are proud to be ISO 9001 & 2015, ISO 45001:2018, ISO 14001: 2015 certified, 
                  and an OEM Manufacture TUV-Rhineland & BIS Certified company. These certifications 
                  reflect our commitment to quality, safety, and environmental responsibility.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Our mission is to create a sustainable future by reducing carbon footprint through 
                  innovative solar solutions. We believe in making clean energy accessible and affordable 
                  for everyone, contributing to a greener planet.
                </p>
              </div>
            </div>

            {/* Right Side - Expertise Icons */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Our Area Of Expertise</h2>
              <div className="grid grid-cols-3 gap-6">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0A6FB0] rounded-lg flex items-center justify-center mx-auto mb-3">
                      <area.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <p className="text-sm md:text-base font-semibold text-gray-800">{area.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OEM Manufacture Section */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Side - Text */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">OEM Manufacture</h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  We are proud partners with "Contendre" Panels, our OEM manufacturing partner. Our 
                  MNRE-authorised manufacturing factory is located in Bhiwandi, Maharashtra, with a 
                  capacity of 70 MW. Our panels are rated A+ for performance and reliability.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  We focus on efficiency throughout the entire product value chain, from silicon 
                  extraction to our TM-Series® solar panels. Our commitment to excellence ensures 
                  that every panel meets the highest standards of quality and performance.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Our motivations are clear: high performance, superior quality, respect for the 
                  environment, and profitability for our partners. We believe that sustainable 
                  energy solutions should be both effective and economically viable.
                </p>
              </div>
            </div>

            {/* Right Side - Video Player */}
            <div className="w-full h-64 md:h-80 bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="text-center text-gray-400">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-sm">Video Player</p>
                <p className="text-xs mt-2 text-gray-500">0:15 / 0:15</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Certification Section */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-[#0A6FB0] text-sm md:text-base mb-2">DOCUMENTS</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">OUR CERTIFICATION</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "MAKE IN INDIA Commission", color: "bg-blue-100" },
              { name: "Central Vigilance Commission", color: "bg-blue-100" },
              { name: "MSME", color: "bg-blue-100" },
              { name: "TCA International", color: "bg-blue-100" },
              { name: "Management System", color: "bg-green-100" },
              { name: "Certified Environment", color: "bg-green-100" },
            ].map((cert, index) => (
              <div
                key={index}
                className={`${cert.color} rounded-lg p-6 flex items-center justify-center h-32 md:h-40`}
              >
                <p className="text-xs md:text-sm text-gray-700 text-center font-semibold">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

