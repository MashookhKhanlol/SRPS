export function ProjectsSection() {
  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">PROJECTS</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Video Placeholder */}
          <div className="w-full h-64 md:h-80 bg-gray-900 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <p className="text-sm">Video Player</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Our team has successfully completed numerous solar energy projects across various 
              sectors. We specialize in designing and implementing comprehensive solar solutions 
              that meet the unique requirements of each client.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              From residential installations to large-scale commercial and industrial projects, 
              we bring years of expertise and a commitment to excellence. Our project management 
              approach ensures timely delivery, quality workmanship, and optimal performance.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We take pride in our track record of successful project completions and the 
              satisfaction of our clients. Each project is executed with precision and attention 
              to detail, ensuring long-term reliability and maximum energy efficiency.
            </p>

            {/* Project Counter */}
            <div className="mt-8">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-6xl md:text-8xl font-bold text-[#0A6FB0]">65</span>
                <span className="text-xl md:text-2xl text-gray-700 font-semibold">MW PROJECTS COMPLETED</span>
              </div>
              <button className="px-8 py-3 bg-[#0A6FB0] text-white rounded-lg font-semibold hover:bg-[#083B63] transition">
                VIEW ALL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

