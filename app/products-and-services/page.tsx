import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/ui/card-21"

export default function ProductsAndServicesPage() {
  const products = [
    {
      imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&auto=format&fit=crop&q=80",
      title: "Solar Panels",
      icon: "☀️",
      stats: "High Efficiency • 25+ Years Warranty",
      href: "#",
      themeColor: "45 100% 50%", // Bright yellow/orange for solar
    },
    {
      imageUrl: "/invertor.png",
      title: "Solar Inverters",
      icon: "⚡",
      stats: "Advanced Technology • Smart Monitoring",
      href: "#",
      themeColor: "200 80% 45%", // Blue for technology
    },
    {
      imageUrl: "/battery.png",
      title: "Solar Batteries",
      icon: "🔋",
      stats: "Long Life • Energy Storage",
      href: "#",
      themeColor: "150 50% 40%", // Green for energy storage
    },
    {
      imageUrl: "/other.png",
      title: "Other Products",
      icon: "🏠",
      stats: "Complete Solutions • Turnkey Installation",
      href: "#",
      themeColor: "250 50% 40%", // Purple for complete solutions
    },
    {
      imageUrl: "/maintenance.jpg",
      title: "Maintenance Services",
      icon: "🔧",
      stats: "Regular Checkups • 24/7 Support",
      href: "#",
      themeColor: "30 80% 50%", // Orange for services
    },
    {
      imageUrl: "/mission-engineer-2.jpg",
      title: "Consultation",
      icon: "💡",
      stats: "Expert Advice • Free Assessment",
      href: "#",
      themeColor: "280 60% 50%", // Purple for consultation
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="bg-[var(--color-card)] py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4 text-center">
            Products and Services
          </h1>
          <div className="text-center text-[var(--color-muted-foreground)] text-lg mb-12">
            <p>Comprehensive solar energy solutions for your home and business</p>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div key={index} className="w-full h-[450px]">
                <ProductCard
                  imageUrl={product.imageUrl}
                  title={product.title}
                  icon={product.icon}
                  stats={product.stats}
                  href={product.href}
                  themeColor={product.themeColor}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

