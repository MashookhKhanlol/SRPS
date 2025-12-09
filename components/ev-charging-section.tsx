export function EVChargingSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.jpg')",
          filter: "blur(2px)",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">EV CHARGING</h2>
        <button className="px-8 py-3 bg-[#0A6FB0] text-white rounded-lg font-semibold hover:bg-[#083B63] transition">
          READ MORE
        </button>
      </div>
    </section>
  )
}

