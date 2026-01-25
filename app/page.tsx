import { Header } from "@/components/header"
import { AnnouncementStrip } from "@/components/announcement-strip"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MissionSection } from "@/components/mission-section"
import { VisionSection } from "@/components/vision-section"
import { Footer } from "@/components/footer"
import { WhoWeAreSection } from "@/components/who-we-are-section"
import { SolarSimpleStepsSection } from "@/components/solar-simple-steps-section"
import { ProjectsSection } from "@/components/projects-section"
import { GovernmentSubsidySection } from "@/components/government-subsidy-section"
import { WhyChooseUsHomeSection } from "@/components/why-choose-us-home-section"
import { BusinessPartnerSection } from "@/components/business-partner-section"
import { StatsSection } from "@/components/stats-section"
import { SolarSavingsCalculator } from "@/components/solar-savings-calculator"
import { SolarServicesCTASection } from "@/components/solar-services-cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AnnouncementStrip />
      <AboutSection />
      <MissionSection />
      <VisionSection />
      <WhoWeAreSection />
      <SolarSimpleStepsSection />
      <ProjectsSection />
      <GovernmentSubsidySection />
      <WhyChooseUsHomeSection />
      {/* <BusinessPartnerSection /> */}
      <StatsSection />
      <SolarSavingsCalculator />
      <SolarServicesCTASection />
      <Footer />
    </main>
  )
}
