import { ArrowRight, GraduationCap } from 'lucide-react'
import { hero } from '../data/content.js'
import { brand } from '../data/site.js'
import { images } from '../data/images.js'
import { whatsappLink } from '../utils/whatsapp.js'
import { WhatsAppIcon } from '../components/icons.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--teal" />
        <span className="hero__blob hero__blob--coral" />
        <span className="hero__dots" />
      </div>

      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            {hero.titleStart}
            <span className="hero__highlight">{hero.titleHighlight}</span>
            {hero.titleEnd}
          </h1>
          <p className="hero__subtitle">{hero.subtitle}</p>

          <div className="hero__person">
            <p className="hero__name">{brand.owner}</p>
            <span className="hero__badge">
              <GraduationCap size={18} aria-hidden="true" /> {brand.title}
            </span>
          </div>

          <div className="hero__actions">
            <a className="btn btn--whatsapp" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={20} /> {hero.primaryCta}
            </a>
            <a className="btn btn--outline" href="#familias">
              {hero.secondaryCta} <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo">
            <img
              src={images.hero.src}
              alt={images.hero.alt}
              width="442"
              height="765"
              fetchpriority="high"
            />
          </div>
          <img className="hero__logo" src={images.logo.src} alt={images.logo.alt} width="120" height="125" />
        </div>
      </div>

      <div className="container">
        <ul className="hero__highlights" aria-label="Áreas de trabajo">
          {hero.highlights.map(({ icon: Icon, label }) => (
            <li key={label}>
              <span className="hero__highlight-icon">
                <Icon size={24} aria-hidden="true" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
