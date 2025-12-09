import { Settings, Recycle, Shield, CheckSquare, Trophy, Users } from "lucide-react"

export function WhyChooseUsHomeSection() {
  const reasons = [
    {
      icon: Settings,
      title: "Easy Installation & Care",
      description: "Our systems are designed for easy installation and minimal maintenance, ensuring hassle-free operation for years to come.",
    },
    {
      icon: Recycle,
      title: "Sustainable & Eco-Friendly",
      description: "We provide clean, renewable energy solutions that significantly reduce your carbon footprint and environmental impact.",
    },
    {
      icon: Shield,
      title: "Safety & Reliability",
      description: "All our products meet the highest safety standards and are built to provide reliable performance in all conditions.",
    },
    {
      icon: CheckSquare,
      title: "World-Class Quality",
      description: "We use only premium components and materials, ensuring superior quality and long-lasting performance.",
    },
    {
      icon: Trophy,
      title: "Durable and Long-Lasting",
      description: "Our products are engineered for durability, designed to withstand harsh weather conditions and provide decades of service.",
    },
    {
      icon: Users,
      title: "Expert Installation",
      description: "Our certified technicians ensure professional installation, optimal system performance, and comprehensive support.",
    },
  ]

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">WHY CHOOSE US</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-[#0A6FB0] rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

