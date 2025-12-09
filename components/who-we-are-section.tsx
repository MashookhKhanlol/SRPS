"use client"

import { Zap, Globe, TrendingUp, DollarSign, Car, Lightbulb } from "lucide-react"

export function WhoWeAreSection() {
  const features = [
    {
      icon: Zap,
      title: "Highly Experienced Team",
    },
    {
      icon: Globe,
      title: "Significant Reduction in Environmental Effects",
    },
    {
      icon: TrendingUp,
      title: "Model Elevating the Scale of Progress",
    },
    {
      icon: DollarSign,
      title: "Highly Rewarding Revenue Streams",
    },
    {
      icon: Car,
      title: "Super Support of EV Charger for profitable and commercially",
    },
    {
      icon: Lightbulb,
      title: "Highly Profitable and Sustainable Business Model with 100% ROI in 2-3 years",
    },
  ]

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">WHO WE ARE?</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We are a leading energy company with a team of experienced professionals dedicated to 
              reducing carbon footprint and providing sustainable energy solutions. Our commitment 
              to excellence and innovation drives us to deliver the best solar energy solutions for 
              residential, commercial, and industrial needs.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              With years of experience in the solar energy industry, we have established ourselves 
              as a trusted partner for businesses and individuals looking to transition to clean, 
              renewable energy. Our comprehensive range of products and services ensures that we 
              can meet the diverse needs of our customers.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We believe in creating a sustainable future through innovative technology and 
              exceptional service. Our team works tirelessly to provide solutions that are not 
              only environmentally friendly but also economically viable for our clients.
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <p className="text-sm">Video Player</p>
            </div>
          </div>
        </div>

        {/* Experience Counter */}
        <div className="mb-12">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-6xl md:text-8xl font-bold text-[#0A6FB0]">10</span>
            <span className="text-xl md:text-2xl text-gray-700 font-semibold">Years of Experience</span>
          </div>
          <button className="px-8 py-3 bg-[#0A6FB0] text-white rounded-lg font-semibold hover:bg-[#083B63] transition">
            READ MORE
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-[#0A6FB0] rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

