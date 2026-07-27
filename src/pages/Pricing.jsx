import { useEffect } from 'react'
import PageTransition from '../components/ui/PageTransition.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import PricingSection from '../components/sections/PricingSection.jsx'
import ContactSection from '../components/sections/ContactSection.jsx'

export default function Pricing() {
  useEffect(() => {
    document.title = 'Цены — NOVA STUDIO'
  }, [])

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Цены"
        title="Прозрачные тарифы под любую задачу"
        description="Выбирайте пакет под масштаб проекта или обсудите индивидуальные условия для Enterprise."
      />
      <PricingSection />
      <ContactSection />
    </PageTransition>
  )
}
