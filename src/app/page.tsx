import { ContactSection } from "@/components/landing/contact-section";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { ProductSection } from "@/components/landing/product-section";
import { TeamSection } from "@/components/landing/team-section";
import { ComplianceSection } from "@/components/landing/compliance-section";
import { VisionMissionSection } from "@/components/landing/vision-mission-section";
import Waves from "@/components/ui/waves";

export default function Home() {
  return (
    <div className="relative isolate flex min-h-dvh flex-col bg-background">
      <Waves
        className="pointer-events-none absolute inset-0 -z-10"
        lineColor="rgba(255,255,255,0.16)"
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        xGap={12}
        yGap={36}
      />
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* Card group: Products + Vision/Mission */}
        <div className="section-card-bleed">
          <div className="section-card overflow-hidden py-10 md:py-16">
            <div aria-hidden className="section-curve" />
            <ProductSection />
            <ComplianceSection />
            <VisionMissionSection />
          </div>
        </div>

        {/* Card group: Team + Compliance */}
        <div className="section-card-bleed">
          <div className="section-card overflow-hidden py-10 md:py-16">
            <div aria-hidden className="section-curve" />
            <TeamSection />
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
