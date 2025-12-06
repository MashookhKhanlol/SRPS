import { Header } from "@/components/header"
import { AnnouncementStrip } from "@/components/announcement-strip"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MissionSection } from "@/components/mission-section"
import { VisionSection } from "@/components/vision-section"
import { RegistrationStepper } from "@/components/registration-stepper"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AnnouncementStrip />
      <AboutSection />
      <MissionSection />
      <VisionSection />
      <RegistrationStepper />
      <Footer />
    </main>
  )
}
