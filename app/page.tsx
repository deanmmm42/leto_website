import Header from "@/components/header"
import HeroGeometric from "@/components/kokonutui/hero-geometric"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroGeometric badge="AI 赋能教育的未来" title1="重新定义" title2="智能教育" />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
