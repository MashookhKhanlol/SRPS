"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectsSection } from "@/components/projects-section"
import { AboutCompanyImageSlide } from "@/components/about-company-image-slide"
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
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/Solar Bg.png')",
            backgroundAttachment: "fixed",
          }}
        >
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">ABOUT US</h1>
        </div>
      </section>

      {/* About Company Section */}
      <section className="bg-gradient-to-b from-[#E9F6FF] to-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Auto-scrolling Image Gallery (shared component) */}
            <AboutCompanyImageSlide />

            {/* Right Side - Text */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">About Company</h2>
              <div className="space-y-4">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Sun Radiation Power Solutions is committed to delivering reliable and sustainable solar energy solutions. We offer a
                premium range of solar products including solar inverters, solar panels, solar batteries, and other related solar equipment to
                meet residential, commercial, and industrial energy needs.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                With a focus on quality, effective solutions, and timely delivery, we ensure our customers receive the best in clean energy
                technology backed by professional service and long-term support. Our mission is to promote renewable energy and help
                build a greener and more energy-independent future.
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

      {/* Projects Section (same as Home page) */}
      <ProjectsSection />

      <Footer />
    </main>
  )
}

