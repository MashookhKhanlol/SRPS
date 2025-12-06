'use client'

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Gallery images from public folder - gallery (1) to gallery (26)
  const galleryImages = Array.from({ length: 26 }, (_, i) => {
    const imageNumber = i + 1
    return {
      src: `/gallery (${imageNumber}).jpg`,
      category: "Project",
      alt: `Gallery project ${imageNumber}`
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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Gallery
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Recent Work Photos - Previous and Ongoing Projects
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="bg-[var(--color-card)] py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <p className="text-[var(--color-muted-foreground)] text-lg">
              Explore our portfolio of successful solar installations, team work, and project highlights
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-[var(--color-muted)]"
                onClick={() => openModal(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{image.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Gallery Button */}
          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] px-8 py-6 text-lg"
              onClick={() => {
                // Scroll to top of gallery or implement full gallery view
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              View Full Gallery
            </Button>
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
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Gallery image"
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

