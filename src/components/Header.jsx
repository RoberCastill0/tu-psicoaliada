import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { brand, navLinks } from '../data/site.js'
import { images } from '../data/images.js'
import { whatsappLink } from '../utils/whatsapp.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { WhatsAppIcon } from './icons.jsx'
import './Header.css'

const sectionIds = navLinks.map((l) => l.id)

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)

  // Sombra del menú al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquea el scroll del fondo con el menú móvil abierto y cierra con Escape
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Cierra el menú móvil si la pantalla pasa a tamaño escritorio
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="header__brand" onClick={() => setOpen(false)}>
          <img src={images.logo.src} alt="" width="48" height="50" />
          <span>
            <strong>{brand.name}</strong>
            <small>{brand.ownerShort}</small>
          </span>
        </a>

        <nav
          id="menu-principal"
          className={`header__nav ${open ? 'is-open' : ''}`}
          aria-label="Menú principal"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id ? 'is-active' : ''}
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn--whatsapp header__cta-mobile"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={20} /> Escríbeme por WhatsApp
          </a>
        </nav>

        <a
          className="btn btn--primary btn--small header__cta"
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={18} /> Agenda por WhatsApp
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && <div className="header__backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}
    </header>
  )
}
