import Link from "next/link"
import { Grid, Home, Building2, Zap } from "lucide-react"

export function ProjectsSection() {
  const projectTypes = [
    {
      icon: Grid,
      title: "On-Grid Project",
      description: "On-grid solar systems are connected to the main electricity grid, allowing you to use solar power during the day and draw from the grid when needed. Excess energy can be fed back to the grid, potentially earning you credits or reducing your electricity bills significantly.",
    },
    {
      icon: Zap,
      title: "OFF-GRID PROJECTS",
      description: "Off-grid solar systems operate independently from the main electricity grid, making them ideal for remote locations or areas with unreliable power supply. These systems include battery storage to ensure continuous power availability, even during nighttime or cloudy days.",
    },
    {
      icon: Home,
      title: "RESIDENTIAL PROJECTS",
      description: "We design and install customized solar solutions for homes, helping homeowners reduce electricity costs and achieve energy independence. Our residential projects include rooftop solar installations, solar water heaters, and complete home solar power systems tailored to your energy needs.",
    },
    {
      icon: Building2,
      title: "COMMERCIAL PROJECTS",
      description: "Our commercial solar solutions help businesses and industries reduce operational costs while demonstrating environmental responsibility. We handle large-scale installations for offices, factories, warehouses, and commercial buildings, ensuring maximum energy efficiency and ROI.",
    },
  ]

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">Our Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projectTypes.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-[#0A6FB0] rounded-lg flex items-center justify-center mb-4">
                <project.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/projects?status=ongoing"
            className="px-8 py-3 bg-[#0A6FB0] text-white rounded-lg font-semibold hover:bg-[#083B63] transition text-center"
          >
            Ongoing Projects
          </Link>
          <Link
            href="/projects?status=completed"
            className="px-8 py-3 bg-[#0A6FB0] text-white rounded-lg font-semibold hover:bg-[#083B63] transition text-center"
          >
            Completed Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

