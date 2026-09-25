import { Mail, GraduationCap } from 'lucide-react'
import { brand, contact } from '../data/site.js'
import { contactSection } from '../data/content.js'
import { whatsappLink } from '../utils/whatsapp.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { WhatsAppIcon, TikTokIcon } from '../components/icons.jsx'
import './Contact.css'

// Canales de contacto (los datos se editan en src/data/site.js)
const channels = [
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: contact.whatsappDisplay,
    href: whatsappLink(),
    external: true,
    color: 'green',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: contact.email,
    href: `mailto:${contact.email}?subject=${encodeURIComponent('Consulta desde la web Tu PsicoAliada')}`,
    color: 'coral',
  },
  {
    icon: TikTokIcon,
    label: 'TikTok',
    value: contact.tiktokUser,
    href: contact.tiktokUrl,
    external: true,
    color: 'navy',
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          eyebrow={contactSection.eyebrow}
          title={contactSection.title}
          subtitle={contactSection.subtitle}
        />

        <div className="contact__grid">
          <Reveal className="contact__info">
            <div className="contact__card-person">
              <p className="contact__person">{brand.owner}</p>
              <p className="contact__role">
                <GraduationCap size={18} aria-hidden="true" /> {brand.title}
              </p>
            </div>

            <ul className="contact__channels">
              {channels.map(({ icon: Icon, label, value, href, external, color }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`contact__channel contact__channel--${color}`}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className="contact__channel-icon">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <span>
                      <small>{label}</small>
                      <strong>{value}</strong>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="contact__form-wrap">
            <ContactForm />
          </Reveal>
        </div>
      </div>

      <div className="contact__closing">
        <p className="container">{brand.closingPhrase}</p>
      </div>
    </section>
  )
}
