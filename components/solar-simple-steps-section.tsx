import { Sun, Zap, Home, Grid, DollarSign } from "lucide-react"

export function SolarSimpleStepsSection() {
  const steps = [
    {
      icon: Sun,
      title: "Sunlight falls on panels",
      description: "Solar panels capture sunlight throughout the day",
    },
    {
      icon: Zap,
      title: "Panels produce electricity",
      description: "The panels convert sunlight into clean electricity",
    },
    {
      icon: Home,
      title: "Power runs your home",
      description: "Electricity powers all your appliances and devices",
    },
    {
      icon: Grid,
      title: "Extra power goes to grid",
      description: "Surplus energy is sent back to the electricity grid",
    },
    {
      icon: DollarSign,
      title: "You save money every month",
      description: "Lower electricity bills and potential earnings from excess power",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-[#E9F6FF] py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Solar in Simple Steps
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Understanding solar energy doesn't have to be complicated. Here's how it works in simple terms:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition text-center flex flex-col"
            >
              <div className="w-16 h-16 bg-[#0A6FB0] rounded-full flex items-center justify-center mb-4 mx-auto">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <div className="mb-3">
                <span className="text-xl font-bold text-[#0A6FB0] mr-2">{index + 1}.</span>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 inline">{step.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
