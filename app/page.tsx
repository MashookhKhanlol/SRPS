import { Header } from "@/components/header"
import { AnnouncementStrip } from "@/components/announcement-strip"
import { HeroSection } from "@/components/hero-section"
import { WhatsNewSection } from "@/components/whats-new-section"
import { BenefitsSection } from "@/components/benefits-section"
import { RegistrationStepper } from "@/components/registration-stepper"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AnnouncementStrip />
      <HeroSection />
      <WhatsNewSection />
      <BenefitsSection />
      <RegistrationStepper />
      <Footer />
    </main>
  )
}
