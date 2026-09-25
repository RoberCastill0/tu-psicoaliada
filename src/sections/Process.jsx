import { Info } from 'lucide-react'
import { process, notices } from '../data/content.js'
import { whatsappLink } from '../utils/whatsapp.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { WhatsAppIcon } from '../components/icons.jsx'
import './Process.css'

export default function Process() {
  return (
    <section id="como-trabajo" className="section process" aria-labelledby="process-title">
      <div className="container">
        <SectionHeading id="process-title" eyebrow={process.eyebrow} title={process.title} subtitle={process.subtitle} />

        <ol className="process__steps">
          {process.steps.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 120} className="process__step">
              <span className="process__icon">
                <Icon size={32} aria-hidden="true" />
                <span className="process__num">{i + 1}</span>
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="process__cta">
          <a className="btn btn--whatsapp" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={20} /> {process.cta}
          </a>
        </Reveal>

        <Reveal className="process__notice" role="note">
          <span className="process__notice-icon">
            <Info size={26} aria-hidden="true" />
          </span>
          <div>
            <strong>Importante</strong>
            <p>{notices.pricing}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
