import { useEffect } from 'react'
import PageTransition from '../components/ui/PageTransition.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import PortfolioSection from '../components/sections/PortfolioSection.jsx'
import ContactSection from '../components/sections/ContactSection.jsx'

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Портфолио — NOVA STUDIO'
  }, [])

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Портфолио"
        title="Проекты, которыми мы гордимся"
        description="Каждый продукт запускался с фокусом на метрики бизнеса — от первой строки кода до релиза."
      />
      <PortfolioSection />
      <ContactSection />
    </PageTransition>
  )
}
