import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Award, Shield, Users, Clock, Zap } from "lucide-react"

export default function WhyChooseUsPage() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality Products",
      description: "We offer only the highest quality solar panels, inverters, and batteries from trusted manufacturers with industry-leading warranties.",
      color: "text-yellow-500"
    },
    {
      icon: Shield,
      title: "Expert Installation",
      description: "Our certified technicians ensure professional installation with attention to detail, maximizing your system's efficiency and lifespan.",
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Years of experience in solar energy solutions with a team of skilled professionals dedicated to your success.",
      color: "text-green-500"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and ensure prompt delivery and installation of all solar systems.",
      color: "text-orange-500"
    },
    {
      icon: Zap,
      title: "Cost-Effective Solutions",
      description: "Reduce your electricity bills significantly with our efficient solar systems designed to maximize your return on investment.",
      color: "text-purple-500"
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Support",
      description: "24/7 customer support and regular maintenance services to keep your solar system running at peak performance.",
      color: "text-red-500"
    },
  ]

  const stats = [
    { number: "1000+", label: "Happy Customers" },
    { number: "500+", label: "Projects Completed" },
    { number: "25+", label: "Years Warranty" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Sun Radiation Power Solutions is your trusted partner for reliable, efficient, and sustainable solar energy solutions. 
            We combine quality products, expert service, and exceptional support to deliver the best solar experience.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[var(--color-card)] py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-[var(--color-muted-foreground)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-12 text-center">
            What Sets Us Apart
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="bg-[var(--color-card)] rounded-lg p-6 md:p-8 border border-[var(--color-border)] hover:shadow-lg transition-shadow"
                >
                  <div className={`${feature.color} mb-4`}>
                    <IconComponent size={40} />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="bg-[var(--color-muted)] py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-8 text-center">
            Our Commitment to You
          </h2>
          
          <div className="space-y-6">
            <div className="bg-[var(--color-card)] rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
                Quality Assurance
              </h3>
              <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                Every product we offer undergoes rigorous quality checks. We partner with leading manufacturers to ensure 
                you receive only the best solar equipment that meets international standards and certifications.
              </p>
            </div>

            <div className="bg-[var(--color-card)] rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
                Customized Solutions
              </h3>
              <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                We understand that every home and business has unique energy needs. Our team works closely with you to 
                design and implement solar solutions tailored to your specific requirements and budget.
              </p>
            </div>

            <div className="bg-[var(--color-card)] rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
                Long-Term Partnership
              </h3>
              <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                Our relationship doesn't end after installation. We provide ongoing maintenance, monitoring, and support 
                to ensure your solar system continues to perform optimally for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

