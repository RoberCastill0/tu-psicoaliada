import { ShieldCheck } from 'lucide-react'
import { familyServices } from '../data/services.js'
import { notices } from '../data/content.js'
import { images } from '../data/images.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Reveal from '../components/Reveal.jsx'
import './Services.css'

export default function FamilyServices() {
  return (
    <section id="familias" className="section services" aria-labelledby="familias-title">
      <div className="container">
        <SectionHeading
          id="familias-title"
          eyebrow={familyServices.eyebrow}
          title={familyServices.title}
          subtitle={familyServices.subtitle}
        />

        <div className="services__grid">
          {familyServices.services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i + 1}
              accent={i % 2 === 0 ? 'teal' : 'coral'}
              delay={(i % 2) * 100}
            />
          ))}
        </div>

        <Reveal className="services__banner">
          <img src={images.families.src} alt={images.families.alt} width="695" height="250" loading="lazy" />
          <p className="services__notice">
            <ShieldCheck size={22} aria-hidden="true" />
            {notices.scope}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
