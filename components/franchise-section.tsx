export function FranchiseSection() {
  const franchisePlans = [
    {
      name: "Micro Franchise",
      price: "₹48,000",
      features: [
        "10 KW Solar Panel",
        "10 KW Inverter",
        "10 KW Battery",
        "Installation Support",
        "Training & Support",
      ],
    },
    {
      name: "Advance Franchise",
      price: "₹1,37,000",
      features: [
        "25 KW Solar Panel",
        "25 KW Inverter",
        "25 KW Battery",
        "1 EV Charger",
        "Installation Support",
        "Training & Support",
      ],
    },
    {
      name: "Super Franchise",
      price: "₹2,84,000",
      features: [
        "50 KW Solar Panel",
        "50 KW Inverter",
        "50 KW Battery",
        "2 EV Charger",
        "1000 Sq. Ft. Office",
        "Installation Support",
        "Training & Support",
      ],
    },
    {
      name: "Master Franchise",
      price: "₹5,38,000",
      features: [
        "100 KW Solar Panel",
        "100 KW Inverter",
        "100 KW Battery",
        "4 EV Charger",
        "2000 Sq. Ft. Office",
        "Installation Support",
        "Training & Support",
      ],
    },
  ]

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">Join Our Business Franchise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {franchisePlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="bg-[#0A6FB0] text-white p-4 text-center">
                <h3 className="text-xl font-bold">{plan.name}</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-gray-800">{plan.price}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-[#0A6FB0] mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-[#0A6FB0] text-white rounded-lg font-semibold hover:bg-[#083B63] transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

