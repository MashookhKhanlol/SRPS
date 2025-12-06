import { ImageSwiper } from "@/components/ui/image-swiper"

const missionImages = [
  '/mission-engineer-1.jpg',
  '/mission-engineer-2.jpg',
  '/mission-engineer-3.jpg',
]

export function MissionSection() {
  return (
    <section id="mission" className="bg-[var(--color-card)] py-12 md:py-20 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-stretch">
        <div className="md:col-span-2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">Mission</h2>
          <div className="w-full">
            <p className="text-[var(--color-muted-foreground)] text-base md:text-lg leading-relaxed mb-4">
              Our mission is to make clean, reliable solar energy accessible to every home and business.
              We deliver high-quality, innovative solar solutions designed for long-term performance.
              Our products empower customers to reduce costs and embrace sustainable living.
              We focus on efficiency, durability, and cutting-edge solar technology.
              Every solution is crafted to support a cleaner, greener planet.
              Together, we inspire a brighter and more sustainable tomorrow.
            </p>
            <p className="text-[var(--color-muted-foreground)] text-base md:text-lg leading-relaxed">
              We are dedicated to transforming the way the world generates and consumes energy.
              By offering advanced solar products, we help homes and businesses achieve true energy independence.
            </p>
          </div>
        </div>
        <div className="md:col-span-1 w-full h-64 md:h-80">
          <ImageSwiper images={missionImages} />
        </div>
      </div>
    </section>
  )
}

