export function CertificationSection() {
  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">OUR CERTIFICATION</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-40"
            >
              <p className="text-gray-400 text-sm">Certification Logo</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

