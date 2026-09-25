import { School } from 'lucide-react'
import { schoolServices } from '../data/services.js'
import { whatsappLink } from '../utils/whatsapp.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Reveal from '../components/Reveal.jsx'
import './Services.css'

export default function SchoolServices() {
  return (
    <section id="colegios" className="section section--tint services" aria-labelledby="colegios-title">
      <div className="container">
        <SectionHeading
          id="colegios-title"
          eyebrow={schoolServices.eyebrow}
          title={schoolServices.title}
          subtitle={schoolServices.subtitle}
        />

        <div className="services__grid">
          {schoolServices.services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i + 1}
              accent={i % 2 === 0 ? 'coral' : 'teal'}
              delay={(i % 2) * 100}
            />
          ))}
        </div>

        <Reveal className="includes">
          <h3 className="includes__title">{schoolServices.includesTitle}</h3>
          <ul className="includes__list">
            {schoolServices.includes.map(({ icon: Icon, label }) => (
              <li key={label}>
                <span className="includes__icon">
                  <Icon size={26} aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
          <a
            className="btn btn--primary includes__cta"
            href={whatsappLink(schoolServices.ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <School size={20} aria-hidden="true" /> {schoolServices.cta}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
