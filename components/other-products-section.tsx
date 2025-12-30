export function OtherProductsSection() {
  const items = [
    "RAFFER & PURLIN",
    "LEG AND BASE PLATE",
    "STRUCTURE NUT AND BOLTS",
    "LIGHTNING ARRESTER",
    "EARTHING BUCKET AND EARTHING ROD",
    "EARTHING POWDER AND CHEMICAL",
    "EARTHING WIRE",
    "AC WIRE",
    "DC WIRE",
    "CABLE TRAY",
    "FASTENERS",
    "DCDB",
    "ACDB",
    "PIPES",
    "ELBOW TEE",
    "CABLE TIE",
    "ELECTRICAL TAPE",
    "MC-4 CONNECTOR",
    "J-HOOK",
    "FIXTURE CHEMICAL",
  ]

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-[#E9F6FF] px-6 py-2 rounded-full mb-4">
            <span className="text-[#0A6FB0] font-semibold text-sm md:text-base">Other Products</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">Balance of System & Accessories</h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            High-quality supporting components that complete and protect your solar installation.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#E9F6FF]/60 transition"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0A6FB0] text-white text-xs font-bold">
                  •
                </span>
                <span className="text-sm md:text-base font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


