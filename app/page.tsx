import { AboutSection } from "@/components/about-section"
import { HeroSection } from "@/components/hero-section"
import { WorksContainer } from "@/components/works-container"
import { PriceSection } from "@/components/price-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Works Section */}
      <WorksContainer />

      {/* Price Section */}
      <PriceSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

