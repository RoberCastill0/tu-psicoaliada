import { useEffect, useState } from 'react'
import { whatsappLink } from '../utils/whatsapp.js'
import { WhatsAppIcon } from './icons.jsx'
import './WhatsAppFloat.css'

/** Botón flotante de WhatsApp (aparece después de bajar un poco). */
export default function WhatsAppFloat() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      className={`wa-float ${show ? 'is-visible' : ''}`}
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      tabIndex={show ? 0 : -1}
    >
      <WhatsAppIcon size={28} />
      <span className="wa-float__label">¿Conversamos?</span>
    </a>
  )
}
