import { useEffect } from 'react'
import PageTransition from '../components/ui/PageTransition.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import ServicesSection from '../components/sections/ServicesSection.jsx'
import PortfolioSection from '../components/sections/PortfolioSection.jsx'
import PricingSection from '../components/sections/PricingSection.jsx'
import AboutSection from '../components/sections/AboutSection.jsx'
import ContactSection from '../components/sections/ContactSection.jsx'

export default function Home() {
  useEffect(() => {
    document.title = 'NOVA STUDIO — AI-продукты, сайты и Telegram-боты под ключ'
  }, [])

  return (
    <PageTransition>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
    </PageTransition>
  )
}
