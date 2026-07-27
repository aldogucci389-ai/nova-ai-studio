import { useEffect } from 'react'
import PageTransition from '../components/ui/PageTransition.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import ContactSection from '../components/sections/ContactSection.jsx'

export default function Contact() {
  useEffect(() => {
    document.title = 'Контакты — NOVA STUDIO'
  }, [])

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Контакты"
        title="Обсудим ваш проект"
        description="Расскажите, что хотите создать — предложим план, сроки и стоимость в течение рабочего дня."
      />
      <ContactSection />
    </PageTransition>
  )
}
