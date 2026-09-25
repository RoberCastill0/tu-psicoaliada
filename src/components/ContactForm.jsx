import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { contactSection } from '../data/content.js'
import { serviceOptions } from '../data/services.js'
import { contact } from '../data/site.js'
import { whatsappLink } from '../utils/whatsapp.js'
import './ContactForm.css'

/*
  FORMULARIO DE CONTACTO – cómo funciona
  ─────────────────────────────────────
  • Sin configurar nada: al enviar, abre WhatsApp con los datos ya escritos
    (no necesita servidor y funciona desde el primer día).
  • Con Formspree: crea el archivo .env con VITE_FORM_ENDPOINT=https://formspree.io/f/xxxx
    y el formulario enviará los datos por correo (ver README.md).
*/
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT?.trim()

const initialValues = { nombre: '', telefono: '', correo: '', interes: '', mensaje: '' }

function validate(v) {
  const errors = {}
  if (!v.nombre.trim()) errors.nombre = 'Escribe tu nombre.'
  if (!v.telefono.trim() && !v.correo.trim()) errors.telefono = 'Déjame un teléfono o un correo para responderte.'
  if (v.telefono.trim() && !/^[+\d\s()-]{6,20}$/.test(v.telefono.trim())) errors.telefono = 'Revisa el número de teléfono.'
  if (v.correo.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.correo.trim())) errors.correo = 'Revisa el correo electrónico.'
  if (!v.mensaje.trim()) errors.mensaje = 'Cuéntame brevemente qué necesitas.'
  return errors
}

function buildWhatsAppText(v) {
  const lines = [
    'Hola Fátima, te escribo desde la web Tu PsicoAliada.',
    '',
    `*Nombre:* ${v.nombre.trim()}`,
    v.telefono.trim() ? `*Teléfono:* ${v.telefono.trim()}` : null,
    v.correo.trim() ? `*Correo:* ${v.correo.trim()}` : null,
    v.interes ? `*Me interesa:* ${v.interes}` : null,
    '',
    v.mensaje.trim(),
  ]
  return lines.filter((l) => l !== null).join('\n')
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | whatsapp | error
  const [waHref, setWaHref] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      const first = e.currentTarget.querySelector(`[name="${Object.keys(found)[0]}"]`)
      first?.focus()
      return
    }

    // Opción A: sin servicio externo → WhatsApp
    if (!FORM_ENDPOINT) {
      const href = whatsappLink(buildWhatsAppText(values))
      setWaHref(href)
      window.open(href, '_blank', 'noopener,noreferrer')
      setStatus('whatsapp')
      return
    }

    // Opción B: Formspree (u otro servicio compatible)
    try {
      setStatus('sending')
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, _subject: 'Nuevo mensaje desde la web Tu PsicoAliada' }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('sent')
      setValues(initialValues)
    } catch {
      setStatus('error')
    }
  }

  const fieldProps = (name) => ({
    id: `cf-${name}`,
    name,
    value: values[name],
    onChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `cf-${name}-error` : undefined,
  })

  const errorMsg = (name) =>
    errors[name] ? (
      <span className="cf__error" id={`cf-${name}-error`}>
        {errors[name]}
      </span>
    ) : null

  return (
    <form className="cf" onSubmit={onSubmit} noValidate aria-labelledby="cf-title">
      <h3 id="cf-title" className="cf__title">
        {contactSection.formTitle}
      </h3>

      <div className="cf__row">
        <div className="cf__field cf__field--full">
          <label htmlFor="cf-nombre">
            Nombre <span aria-hidden="true">*</span>
          </label>
          <input type="text" autoComplete="name" required {...fieldProps('nombre')} />
          {errorMsg('nombre')}
        </div>

        <div className="cf__field">
          <label htmlFor="cf-telefono">Teléfono / WhatsApp</label>
          <input type="tel" autoComplete="tel" inputMode="tel" {...fieldProps('telefono')} />
          {errorMsg('telefono')}
        </div>

        <div className="cf__field">
          <label htmlFor="cf-correo">Correo</label>
          <input type="email" autoComplete="email" {...fieldProps('correo')} />
          {errorMsg('correo')}
        </div>

        <div className="cf__field cf__field--full">
          <label htmlFor="cf-interes">¿Qué servicio te interesa?</label>
          <select {...fieldProps('interes')}>
            <option value="">Selecciona una opción (opcional)</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="cf__field cf__field--full">
          <label htmlFor="cf-mensaje">
            Mensaje <span aria-hidden="true">*</span>
          </label>
          <textarea rows={4} required {...fieldProps('mensaje')} />
          {errorMsg('mensaje')}
        </div>
      </div>

      <button type="submit" className="btn btn--primary btn--block" disabled={status === 'sending'}>
        <Send size={18} aria-hidden="true" />
        {status === 'sending' ? 'Enviando…' : FORM_ENDPOINT ? 'Enviar mensaje' : 'Enviar por WhatsApp'}
      </button>

      <p className="cf__note">{FORM_ENDPOINT ? contactSection.formNoteWithEndpoint : contactSection.formNote}</p>

      <div aria-live="polite">
        {status === 'whatsapp' && (
          <p className="cf__status cf__status--ok">
            <CheckCircle2 size={20} aria-hidden="true" />
            <span>
              Se abrió WhatsApp con tu mensaje. Si no se abrió,{' '}
              <a href={waHref} target="_blank" rel="noopener noreferrer">
                haz clic aquí
              </a>
              .
            </span>
          </p>
        )}
        {status === 'sent' && (
          <p className="cf__status cf__status--ok">
            <CheckCircle2 size={20} aria-hidden="true" /> ¡Gracias! Tu mensaje fue enviado. Te responderé pronto.
          </p>
        )}
        {status === 'error' && (
          <p className="cf__status cf__status--error">
            <AlertCircle size={20} aria-hidden="true" />
            <span>
              No se pudo enviar el mensaje. Escríbeme directamente a{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> o por{' '}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              .
            </span>
          </p>
        )}
      </div>
    </form>
  )
}
