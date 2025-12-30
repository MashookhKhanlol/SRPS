import Link from "next/link"
import { Sun, Home, Battery, Network, FileCheck, Wrench, ClipboardList, Compass } from "lucide-react"

export function ServicesSRPSSection() {
  const services = [
    {
      icon: Home,
      title: "Rooftop Solar Power Systems",
      description: "Design and installation of efficient on-grid and off-grid rooftop solar systems tailored to your roof, load, and budget.",
    },
    {
      icon: Sun,
      title: "Solar Panel Supply & Installation",
      description: "Supply of high-quality solar panels with professional mounting and wiring for maximum power generation and safety.",
    },
    {
      icon: Battery,
      title: "Solar Inverters & Batteries",
      description: "Reliable inverters and long-life battery solutions for uninterrupted, stable power in homes, businesses, and industries.",
    },
    {
      icon: Network,
      title: "On-Grid & Off-Grid Solar Solutions",
      description: "Customized system design for grid-tied, off-grid, and hybrid configurations based on site conditions and energy needs.",
    },
    {
      icon: FileCheck,
      title: "Net Metering Support",
      description: "Complete assistance for documentation, approvals, and coordination with DISCOMs for net metering and grid connectivity.",
    },
    {
      icon: ClipboardList,
      title: "Government Subsidy Assistance",
      description: "End-to-end guidance for applying and availing eligible government solar subsidies for residential and commercial projects.",
    },
    {
      icon: Wrench,
      title: "Operation & Maintenance (O&M)",
      description: "Regular inspection, cleaning, performance checks, and preventive maintenance to keep your system running efficiently.",
    },
    {
      icon: Compass,
      title: "Solar Consultancy & Site Survey",
      description: "Expert site surveys, energy assessment, feasibility studies, and detailed system design by experienced professionals.",
    },
  ]

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block bg-[#E9F6FF] px-6 py-2 rounded-full mb-4">
            <span className="text-[#0A6FB0] font-semibold text-sm md:text-base">
              Services Provided by Sun Radiation Power Solutions
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            Sun Radiation Power Solutions offers end-to-end solar energy services for residential, commercial, and industrial
            customers—from design and installation to long-term operation and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0A6FB0]/10 flex items-center justify-center mb-4">
                <service.icon className="w-5 h-5 text-[#0A6FB0]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="text-sm md:text-base font-semibold text-[#0A6FB0] hover:text-[#083B63] underline underline-offset-4"
          >
            Subsidy details available
          </Link>
        </div>
      </div>
    </section>
  )
}


