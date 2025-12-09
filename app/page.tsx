import { Header } from "@/components/header"
import { AnnouncementStrip } from "@/components/announcement-strip"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MissionSection } from "@/components/mission-section"
import { VisionSection } from "@/components/vision-section"
import { Footer } from "@/components/footer"
import { WhoWeAreSection } from "@/components/who-we-are-section"
import { FranchiseSection } from "@/components/franchise-section"
import { EVChargingSection } from "@/components/ev-charging-section"
import { ProjectsSection } from "@/components/projects-section"
import { WhyChooseUsHomeSection } from "@/components/why-choose-us-home-section"
import { BusinessPartnerSection } from "@/components/business-partner-section"
import { StartBusinessCTASection } from "@/components/start-business-cta-section"
import { ChannelPartnersSection } from "@/components/channel-partners-section"
import { StatsSection } from "@/components/stats-section"
import { LatestNewsSection } from "@/components/latest-news-section"
import { InTheNewsSection } from "@/components/in-the-news-section"
import { CertificationSection } from "@/components/certification-section"
import { SolarServicesCTASection } from "@/components/solar-services-cta-section"
import { WhatsAppButton } from "@/components/whatsapp-button"

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
      <FranchiseSection />
      <EVChargingSection />
      <ProjectsSection />
      <WhyChooseUsHomeSection />
      <BusinessPartnerSection />
      <StartBusinessCTASection />
      <ChannelPartnersSection />
      <StatsSection />
      <LatestNewsSection />
      <InTheNewsSection />
      <CertificationSection />
      <SolarServicesCTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
