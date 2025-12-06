import { ImageSwiper } from "@/components/ui/image-swiper"

const visionImages = [
  '/vision-1.jpg',
  '/vision-2.jpg',
  '/vision-3.jpg',
]

export function VisionSection() {
  return (
    <section id="vision" className="bg-[var(--color-card)] py-12 md:py-20 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-stretch">
        <div className="md:col-span-1 w-full h-64 md:h-80 order-2 md:order-1">
          <ImageSwiper images={visionImages} />
        </div>
        <div className="md:col-span-2 flex flex-col justify-center order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">Vision</h2>
          <div className="w-full">
            <p className="text-[var(--color-muted-foreground)] text-base md:text-lg leading-relaxed mb-4">
              Our vision is to become a leading and trusted provider of sustainable solar energy solutions. We aim to power every community with clean, efficient, and future-ready technology. Our commitment lies in delivering reliable systems that support long-term energy needs. Through continuous innovation, we strive to make solar accessible and impactful. We believe in creating energy independence for homes, businesses, and industries alike.
            </p>
            <p className="text-[var(--color-muted-foreground)] text-base md:text-lg leading-relaxed">
              We are dedicated to transforming the way the world generates and consumes energy. By offering advanced solar products, we help homes and businesses achieve true energy independence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

