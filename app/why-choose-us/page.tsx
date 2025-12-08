'use client'

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Award, Shield, Users, Clock, Zap } from "lucide-react"
import { TestimonialCarousel } from "@/components/ui/testimonial"

export default function WhyChooseUsPage() {
  useEffect(() => {
    // Handle smooth scroll to hash when navigating from another page
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])
  const testimonials = [
    {
      id: 1,
      quote: "Sun Radiation Power Solutions installed a complete solar system for our home. The installation was professional, and we've seen significant savings on our electricity bills. Highly recommended!",
      name: "Rajesh Kumar",
      role: "Homeowner",
      company: "Residential Customer",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
      rating: 5
    },
    {
      id: 2,
      quote: "Excellent service and quality products. The team was knowledgeable and guided us through the entire process. Our solar panels are working perfectly and we're very satisfied with the results.",
      name: "Priya Sharma",
      role: "Business Owner",
      company: "Sharma Industries",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
      rating: 5
    },
    {
      id: 3,
      quote: "The maintenance service provided by SRPS is outstanding. They regularly check our system and ensure everything runs smoothly. Great customer support and reliable service.",
      name: "Amit Patel",
      role: "Facility Manager",
      company: "GreenTech Solutions",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
      rating: 5
    },
    {
      id: 4,
      quote: "We installed solar panels for our factory and the results exceeded our expectations. The ROI has been excellent and the team's expertise made the whole process seamless.",
      name: "Vikram Singh",
      role: "Operations Director",
      company: "Manufacturing Corp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
      rating: 5
    },
    {
      id: 5,
      quote: "Professional installation, quality products, and excellent after-sales support. SRPS has been our trusted partner for solar energy solutions. Very happy with their service!",
      name: "Anjali Mehta",
      role: "Property Developer",
      company: "Mehta Constructions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
      rating: 5
    },
    {
      id: 6,
      quote: "The consultation service helped us choose the perfect solar solution for our needs. The team was patient, explained everything clearly, and the installation was completed on time.",
      name: "Suresh Reddy",
      role: "CEO",
      company: "TechStart India",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100",
      rating: 5
    },
  ]
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

      {/* Customer Reviews Section */}
      <section id="customer-reviews" className="bg-[var(--color-muted)] py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Customer Reviews
            </h2>
            <p className="text-sm md:text-base text-[var(--color-muted-foreground)]">
              See what our satisfied customers have to say about our products and services
            </p>
          </div>

          <TestimonialCarousel 
            testimonials={testimonials} 
            autoScrollInterval={4000}
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}

