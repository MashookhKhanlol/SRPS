export function InTheNewsSection() {
  return (
    <section className="bg-gradient-to-b from-[#E9F6FF] to-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">In the News</h2>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 bg-[#FFB43B] rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

