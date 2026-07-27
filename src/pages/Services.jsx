import { useEffect } from 'react'
import PageTransition from '../components/ui/PageTransition.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import ServicesSection from '../components/sections/ServicesSection.jsx'
import ContactSection from '../components/sections/ContactSection.jsx'

export default function Services() {
  useEffect(() => {
    document.title = 'Услуги — NOVA STUDIO'
  }, [])

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Услуги"
        title="Всё, что нужно для запуска цифрового продукта"
        description="От первого прототипа до масштабирования — веб-разработка, боты, AI и автоматизация в одной команде."
      />
      <ServicesSection />
      <ContactSection />
    </PageTransition>
  )
}
