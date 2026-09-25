// Iconos simples propios (lucide-react no incluye logos de marcas).
// Si prefieres los logos oficiales puedes instalar "react-icons".

export function WhatsAppIcon({ size = 22, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z" />
      <path d="M9 8.8c0 3.3 2.9 6.2 6.2 6.2l1.3-1.5-2-1-1 .8a4.6 4.6 0 0 1-2.8-2.8l.8-1-1-2z" />
    </svg>
  )
}

export function TikTokIcon({ size = 22, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 3c.4 2.6 2.2 4.4 5 4.7" />
    </svg>
  )
}
