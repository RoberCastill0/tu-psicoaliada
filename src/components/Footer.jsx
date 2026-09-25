import { Mail } from 'lucide-react'
import { brand, contact, navLinks } from '../data/site.js'
import { notices } from '../data/content.js'
import { images } from '../data/images.js'
import { whatsappLink } from '../utils/whatsapp.js'
import { WhatsAppIcon, TikTokIcon } from './icons.jsx'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={images.logo.src} alt={images.logo.alt} width="96" height="100" loading="lazy" />
          <div>
            <p className="footer__name">{brand.name}</p>
            <p className="footer__tagline">{brand.tagline}.</p>
          </div>
        </div>

        <nav aria-label="Enlaces del pie de página">
          <h2 className="footer__heading">Secciones</h2>
          <ul className="footer__links">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__heading">Contacto</h2>
          <ul className="footer__contact">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} /> {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>
                <Mail size={18} aria-hidden="true" /> {contact.email}
              </a>
            </li>
            <li>
              <a href={contact.tiktokUrl} target="_blank" rel="noopener noreferrer">
                <TikTokIcon size={18} /> {contact.tiktokUser}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>{notices.scope}</p>
        <p>
          © {year} {brand.name} · {brand.owner}
        </p>
      </div>
    </footer>
  )
}
