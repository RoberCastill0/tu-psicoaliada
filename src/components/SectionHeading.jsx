import Reveal from './Reveal.jsx'
import './SectionHeading.css'

/** Encabezado estándar de sección: etiqueta + título + subtítulo. */
export default function SectionHeading({ eyebrow, title, subtitle, id, align = 'center', light = false }) {
  return (
    <Reveal className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </Reveal>
  )
}
