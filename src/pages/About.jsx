import { useEffect } from 'react'
import PageTransition from '../components/ui/PageTransition.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import AboutSection from '../components/sections/AboutSection.jsx'
import ContactSection from '../components/sections/ContactSection.jsx'

export default function About() {
  useEffect(() => {
    document.title = 'О нас — NOVA STUDIO'
  }, [])

  return (
    <PageTransition>
      <PageHeader
        eyebrow="О студии"
        title="Команда, которая доводит продукты до результата"
        description="Мы объединяем инженерию, дизайн и AI-экспертизу, чтобы каждый проект работал на бизнес-цели клиента."
      />
      <AboutSection />
      <ContactSection />
    </PageTransition>
  )
}
