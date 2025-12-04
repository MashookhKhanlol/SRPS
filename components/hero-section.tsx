import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-white pt-12 md:pt-16 pb-12 md:pb-20 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
        {/* Left column - Text content */}
        <div className="md:col-span-2 pt-4 md:pt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            PM Surya Ghar: <span className="text-[#0A6FB0]">Mufti Bijli Yojana</span>
          </h1>

          <p className="text-base md:text-lg text-[#516C7A] leading-relaxed mb-8 max-w-2xl">
            In order to further sustainable development and people's well-being, we are launching the PM Surya Ghar
            Mufti Bijli Yojana. This project, with an investment of over Rs. 75,000 crores, aims to light up 1 crore
            households by providing up to 300 units of free electricity every month.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <button className="px-6 md:px-8 py-3 md:py-4 bg-[#0A6FB0] text-white rounded-lg font-semibold hover:bg-[#083B63] transition text-sm md:text-base">
              Register Now
            </button>
            <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-[#0A6FB0] border-2 border-[#0A6FB0] rounded-lg font-semibold hover:bg-[#F2FAFF] transition text-sm md:text-base">
              Learn More
            </button>
          </div>
        </div>

        {/* Right column - Portrait */}
        <div className="md:col-span-1 relative flex justify-center">
          <div className="w-full max-w-[1152px]">
            <Image
              src="/modiji-saiji-1.png"
              alt="PM Modi - Shri Narendra Modi, Hon'ble Prime Minister of India"
              width={1152}
              height={856}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
