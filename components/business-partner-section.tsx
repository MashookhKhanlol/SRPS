export function BusinessPartnerSection() {
  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">Become Our Business Partner</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Join us as a business partner and be part of the renewable energy revolution. 
              We offer comprehensive support, training, and resources to help you succeed in 
              the solar energy business.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              As our partner, you'll benefit from our extensive experience, proven business 
              model, and ongoing support. We provide everything you need to establish and 
              grow a successful solar energy business.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Our partnership program includes marketing support, technical training, product 
              knowledge, and access to our network of suppliers and resources. Together, we 
              can build a sustainable future while creating profitable business opportunities.
            </p>
            <button className="mt-6 px-8 py-3 bg-[#0A6FB0] text-white rounded-lg font-semibold hover:bg-[#083B63] transition">
              JOIN US
            </button>
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
      </div>
    </section>
  )
}

