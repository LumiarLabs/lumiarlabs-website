import { ContactSection } from "@/components/landing/contact-section";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { LumiPactShowcase } from "@/components/landing/lumipact-showcase";
import { LumiPactFeatures } from "@/components/landing/lumipact-features";
import { ProductSection } from "@/components/landing/product-section";
import { TeamSection } from "@/components/landing/team-section";

// Waves are mounted inside specific sections (Hero, Contact)

export default function Home() {
  return (
    <div id="home" className="relative isolate flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* Card group: LumiPact + Vision/Mission */}
        <div className="section-card-bleed">
          <div className="section-card overflow-hidden py-10 md:py-16">
            <div aria-hidden className="section-curve" />
            <LumiPactShowcase />
            <LumiPactFeatures />
            <ProductSection />
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
