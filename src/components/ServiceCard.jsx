import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../utils/whatsapp.js'
import Reveal from './Reveal.jsx'
import './ServiceCard.css'

/**
 * Tarjeta de servicio. Recibe un objeto de src/data/services.js.
 * accent: 'teal' | 'coral' (color de la tarjeta)
 */
export default function ServiceCard({ service, index, accent = 'teal', delay = 0 }) {
  const { icon: Icon, title, description, prices, extra, whatsappMessage } = service

  return (
    <Reveal as="article" delay={delay} className={`service-card service-card--${accent}`}>
      <div className="service-card__top">
        <span className="service-card__icon">
          <Icon size={30} aria-hidden="true" />
        </span>
        <span className="service-card__index" aria-hidden="true">
          {index}
        </span>
      </div>

      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>

      <div className="service-card__price">
        <span className="service-card__from">Desde</span>
        <ul>
          {prices.map((p) => (
            <li key={p.amount + p.unit}>
              <strong>{p.amount}</strong> <span>{p.unit}</span>
            </li>
          ))}
        </ul>
        {extra && <p className="service-card__extra">{extra}</p>}
      </div>

      <a
        className="service-card__cta"
        href={whatsappLink(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Consultar por WhatsApp sobre: ${title}`}
      >
        <MessageCircle size={18} aria-hidden="true" /> Consultar
      </a>
    </Reveal>
  )
}
