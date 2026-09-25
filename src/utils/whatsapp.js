import { contact } from '../data/site.js'

/**
 * Crea un enlace de WhatsApp compatible con móvil y escritorio.
 * Formato oficial: https://wa.me/<número>?text=<mensaje codificado>
 * El número se toma de src/data/site.js (contact.whatsappNumber).
 */
export function whatsappLink(message = contact.whatsappDefaultMessage) {
  const number = String(contact.whatsappNumber).replace(/\D/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
