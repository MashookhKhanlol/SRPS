import { Leaf, Handshake } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Leaf,
      value: "5+",
      label: "Years",
    },
    {
      icon: Handshake,
      value: "10+",
      label: "Projects",
    },
  ]

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.jpg')",
          filter: "blur(3px)",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 text-center">OUR STATS</h2>
        
        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg md:text-xl text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

