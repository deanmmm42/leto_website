import Header from "@/components/header"
import HeroGeometric from "@/components/kokonutui/hero-geometric"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import FeaturesSection from "@/components/features-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroGeometric />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
