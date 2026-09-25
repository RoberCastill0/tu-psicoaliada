import { ChevronDown } from 'lucide-react'
import { faq } from '../data/content.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import './Faq.css'

export default function Faq() {
  return (
    <section id="preguntas" className="section section--tint faq" aria-labelledby="faq-title">
      <div className="container faq__container">
        <SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.title} />
        <div className="faq__list">
          {faq.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <details className="faq__item" open={i === 0}>
                <summary>
                  <span>{item.q}</span>
                  <ChevronDown size={22} aria-hidden="true" className="faq__chevron" />
                </summary>
                <p>{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
