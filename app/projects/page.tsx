"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TestimonialCarousel } from "@/components/ui/testimonial"
import { X } from "lucide-react"

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
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
                  APN Solar Energy Pvt. Ltd. is a JV Manufacturer, Energy consultant, and EPC provider 
                  for residential, commercial, and industrial power. We specialize in delivering 
                  comprehensive solar energy solutions that meet the diverse needs of our clients.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  APN is an ISO 9001, ISO 45001, and ISO 14001 certified company with 250+ Franchise 
                  Partners across India. Our commitment to quality, safety, and environmental standards 
                  ensures that every project we undertake meets the highest industry standards.
                </p>
              </div>
            </div>

            {/* Right Column - Video Placeholder */}
            <div className="w-full h-64 md:h-80 bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="text-center text-gray-400">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-sm">Video Player</p>
                <p className="text-xs mt-2 text-gray-500">0:00 / 0:13</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get A Solutions CTA Banner */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.jpg')",
            filter: "blur(3px)",
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

      {/* Video Gallery Section */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">Video Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Video 1 */}
            <div className="w-full h-64 md:h-80 bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="text-center text-gray-400">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-sm">Video Player</p>
                <p className="text-xs mt-2 text-gray-500">0:00 / 0:30</p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="w-full h-64 md:h-80 bg-gray-900 rounded-lg flex items-center justify-center relative">
              <div className="text-center text-gray-400">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-sm">Video Player</p>
                <p className="text-xs mt-2 text-gray-500">0:00 / 0:30</p>
              </div>
            </div>
          </div>
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
      <WhatsAppButton />
    </main>
  )
}

