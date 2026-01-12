export function GovernmentSubsidySection() {
  const subsidyData = [
    {
      kilowatt: "1 Kw",
      centralGovt: "30,000",
      stateGovt: "15,000",
      total: "45,000",
    },
    {
      kilowatt: "2 Kw",
      centralGovt: "60,000",
      stateGovt: "30,000",
      total: "90,000",
    },
    {
      kilowatt: "3 Kw",
      centralGovt: "78,000",
      stateGovt: "30,000",
      total: "1,08,000",
    },
    {
      kilowatt: "3 Kw+ (Above 3 Kw)",
      centralGovt: "78,000",
      stateGovt: "30,000",
      total: "1,08,000",
    },
  ]

  return (
    <section id="government-subsidy" className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Government Subsidy Available</h2>
        <p className="text-xl md:text-2xl text-[#0A6FB0] font-semibold mb-12">PM Surya Ghar: Muft Bijli Yojana (Residential Solar)</p>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#0A6FB0] text-white">
                <th className="px-6 py-4 text-left font-semibold text-base md:text-lg">Kilo watt</th>
                <th className="px-6 py-4 text-left font-semibold text-base md:text-lg">Central Govt.</th>
                <th className="px-6 py-4 text-left font-semibold text-base md:text-lg">C.G State Govt.</th>
                <th className="px-6 py-4 text-left font-semibold text-base md:text-lg">Total</th>
              </tr>
            </thead>
            <tbody>
              {subsidyData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="px-6 py-4 text-gray-800 font-medium text-base md:text-lg">
                    {row.kilowatt}
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-base md:text-lg">
                    {row.centralGovt}
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-base md:text-lg">
                    {row.stateGovt}
                  </td>
                  <td className="px-6 py-4 text-gray-800 font-semibold text-base md:text-lg">
                    {row.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-gray-700 text-sm md:text-base">
            <span className="font-semibold">Note:</span> Subsidy available for only residential solar
          </p>
        </div>
      </div>
    </section>
  )
}

