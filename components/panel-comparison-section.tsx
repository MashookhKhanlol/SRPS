export function PanelComparisonSection() {
  const rows = [
    { type: "Mono", efficiency: "High", cost: "MED", lifespan: "LONG", bestFor: "HOME" },
    { type: "Poly", efficiency: "Med", cost: "LOW", lifespan: "MED", bestFor: "BUDGET USER" },
    { type: "Thin-film", efficiency: "Low", cost: "MED", lifespan: "LOW", bestFor: "PORTABLE USE" },
    { type: "Bifacial", efficiency: "High", cost: "MED", lifespan: "LONG", bestFor: "COMMERCIAL" },
    { type: "PERC", efficiency: "High", cost: "MED", lifespan: "LONG", bestFor: "HOME/INDUSTRY" },
    { type: "TOPCON", efficiency: "High", cost: "MED", lifespan: "LONG", bestFor: "LATEST SYSTEM" },
    { type: "HIT", efficiency: "Highest", cost: "HIGH", lifespan: "LONGEST", bestFor: "PREMIUM USER" },
  ]

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0A6FB0] mb-8 text-center italic">
          LEARN EASY WITH TABLE-
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#0A6FB0] text-white">
                <th className="px-6 py-4 text-left font-semibold text-base md:text-lg">Panel Type</th>
                <th className="px-6 py-4 text-left font-semibold text-base md:text-lg">Efficiency</th>
                <th className="px-6 py-4 text-left font-semibold text-base md:text-lg">Cost</th>
                <th className="px-6 py-4 text-left font-semibold text-base md:text-lg">Lifespan</th>
                <th className="px-6 py-4 text-left font-semibold text-base md:text-lg">Best for</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.type}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="px-6 py-4 text-gray-800 font-medium text-sm md:text-base">{row.type}</td>
                  <td className="px-6 py-4 text-gray-700 text-sm md:text-base">{row.efficiency}</td>
                  <td className="px-6 py-4 text-gray-700 text-sm md:text-base">{row.cost}</td>
                  <td className="px-6 py-4 text-gray-700 text-sm md:text-base">{row.lifespan}</td>
                  <td className="px-6 py-4 text-gray-800 text-sm md:text-base">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}


