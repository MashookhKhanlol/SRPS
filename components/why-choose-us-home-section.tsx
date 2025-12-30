import { Award, Users, Clock, MapPin } from "lucide-react"

export function WhyChooseUsHomeSection() {
  const reasons = [
    {
      icon: Award,
      title: "High Quality Solar Products",
      description: "We offer premium-grade solar panels, inverters, and batteries from trusted manufacturers, ensuring durability, efficiency, and long-term performance for your energy needs.",
    },
    {
      icon: Users,
      title: "Expert Installation Team",
      description: "Our certified and experienced technicians provide professional installation services, ensuring optimal system configuration and maximum energy output for your property.",
    },
    {
      icon: Clock,
      title: "Effective & Timely Delivery",
      description: "We understand the importance of timely project completion. Our streamlined processes ensure efficient delivery and installation within committed timelines.",
    },
    {
      icon: MapPin,
      title: "Pan-India Support & Service",
      description: "With our extensive network across India, we provide comprehensive after-sales support, maintenance services, and technical assistance wherever you are located.",
    },
  ]

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">WHY CHOOSE US</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

