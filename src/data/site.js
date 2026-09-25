// ═══════════════════════════════════════════════════════════════
//  DATOS GENERALES DEL SITIO
//  Aquí se cambian: nombre, contacto, WhatsApp, redes y menú.
//  Todo lo que modifiques aquí se actualiza en toda la página.
// ═══════════════════════════════════════════════════════════════

export const brand = {
  name: 'Tu PsicoAliada',
  owner: 'Rosa Fátima Martínez Changana',
  ownerShort: 'Fátima Martínez',
  title: 'Bachiller en Psicología',
  tagline: 'Acompaño, escucho y transformo vidas',
  closingPhrase: 'Aprender, orientar y crecer con herramientas prácticas.',
}

export const contact = {
  // WhatsApp: código de país + número, SOLO dígitos (Perú = 51).
  whatsappNumber: '51924792859',
  // Cómo se muestra el número en pantalla.
  whatsappDisplay: '924 792 859',
  // Mensaje que aparece escrito al abrir WhatsApp desde los botones generales.
  whatsappDefaultMessage:
    'Hola Fátima, vi tu página Tu PsicoAliada y me gustaría recibir información sobre tus servicios.',

  email: 'tupsicoaliada2025@gmail.com',

  tiktokUser: '@rosafatima_psico',
  tiktokUrl: 'https://www.tiktok.com/@rosafatima_psico',
}

// Menú de navegación. "id" debe coincidir con el id de cada sección.
export const navLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'familias', label: 'Familias' },
  { id: 'colegios', label: 'Colegios' },
  { id: 'como-trabajo', label: 'Cómo trabajo' },
  { id: 'preguntas', label: 'Preguntas' },
  { id: 'contacto', label: 'Contacto' },
]
