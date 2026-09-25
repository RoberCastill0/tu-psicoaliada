// ═══════════════════════════════════════════════════════════════
//  TEXTOS DE LA PÁGINA (excepto servicios, que están en services.js)
//  Cambia aquí títulos, subtítulos, párrafos y textos de botones.
//  Los iconos vienen de https://lucide.dev/icons (se importan por nombre).
// ═══════════════════════════════════════════════════════════════

import {
  Presentation,
  HandHeart,
  GraduationCap,
  BookOpen,
  Baby,
  Brain,
  BrainCircuit,
  MessagesSquare,
  Waypoints,
  Users,
  Heart,
  ClipboardCheck,
  ShieldCheck,
  Handshake,
  MessageCircle,
  Lightbulb,
  CalendarCheck,
} from 'lucide-react'

// ─── HERO (primera pantalla) ───────────────────────────────────
export const hero = {
  eyebrow: 'Psicoeducación · Talleres · Orientación',
  // El título se divide en partes para resaltar una palabra con color.
  titleStart: 'Acompaño, escucho y ',
  titleHighlight: 'transformo',
  titleEnd: ' vidas',
  subtitle:
    'Psicoeducación, talleres y orientación para adolescentes, familias y docentes.',
  primaryCta: 'Escríbeme por WhatsApp',
  secondaryCta: 'Ver servicios',
  // Las 4 áreas que aparecen en la portada del catálogo.
  highlights: [
    { icon: Presentation, label: 'Talleres' },
    { icon: HandHeart, label: 'Orientación' },
    { icon: GraduationCap, label: 'Capacitación' },
    { icon: BookOpen, label: 'Materiales' },
  ],
}

// ─── SOBRE MÍ / MI PERFIL ──────────────────────────────────────
export const profile = {
  eyebrow: 'Mi perfil',
  title: 'Hola, soy Fátima',
  intro: 'Bachiller en Psicología con experiencia en el ámbito educativo.',
  trainingTitle: 'Formación y experiencia',
  training: [
    { icon: Baby, text: 'Especialización en Estimulación Temprana y Psicomotricidad.' },
    { icon: Brain, text: 'Especialización en Modificación de Conducta en niños con TEA y TDAH.' },
    { icon: BrainCircuit, text: 'Diplomado en Abordaje Cognitivo Conductual en niños y adolescentes.' },
    { icon: MessagesSquare, text: 'Diplomado en Terapia de Lenguaje.' },
    { icon: Waypoints, text: 'Formación en Neuro-rehabilitación y Estimulación Sensorial.' },
    { icon: Users, text: 'Experiencia en orientación psicológica, talleres y acompañamiento socioemocional.' },
  ],
}

// ─── MI ENFOQUE ────────────────────────────────────────────────
export const approach = {
  title: 'Mi enfoque',
  items: [
    { icon: Heart, label: 'Empatía' },
    { icon: ClipboardCheck, label: 'Estrategias prácticas' },
    { icon: ShieldCheck, label: 'Prevención' },
    { icon: Handshake, label: 'Acompañamiento' },
  ],
}

// ─── CÓMO TRABAJAR CONMIGO ─────────────────────────────────────
export const process = {
  eyebrow: 'Paso a paso',
  title: '¿Cómo trabajar conmigo?',
  subtitle: 'Un proceso simple y cercano para encontrar juntos la mejor opción.',
  steps: [
    { icon: MessageCircle, title: 'Escríbeme', text: 'Inicia tu primer contacto.' },
    { icon: Heart, title: 'Cuéntame qué necesitas', text: 'Te escucho con atención.' },
    { icon: Lightbulb, title: 'Te propongo la mejor opción', text: 'Diseñamos juntos el plan ideal.' },
    { icon: CalendarCheck, title: 'Agendamos', text: 'Organizamos el día y comenzamos.' },
  ],
  cta: 'Dar el primer paso',
}

// ─── AVISOS IMPORTANTES ────────────────────────────────────────
export const notices = {
  scope: 'Servicios psicoeducativos. No incluye psicoterapia ni diagnóstico clínico.',
  pricing:
    'Brindo servicios psicoeducativos, talleres, orientación y materiales. Los precios son referenciales y pueden variar según modalidad y personalización.',
}

// ─── PREGUNTAS FRECUENTES ──────────────────────────────────────
// Respuestas construidas únicamente con información del catálogo.
export const faq = {
  eyebrow: 'Resolvemos tus dudas',
  title: 'Preguntas frecuentes',
  items: [
    {
      q: '¿A quién están dirigidos los servicios?',
      a: 'A adolescentes, padres y familias, docentes y colegios. Hay servicios individuales, talleres grupales, charlas, capacitaciones y materiales psicoeducativos.',
    },
    {
      q: '¿Brindas psicoterapia o diagnóstico clínico?',
      a: 'No. Son servicios psicoeducativos: orientación, talleres, capacitación y materiales. No incluyen psicoterapia ni diagnóstico clínico.',
    },
    {
      q: '¿Los precios son fijos?',
      a: 'Los precios son referenciales ("desde") y pueden variar según la modalidad y el nivel de personalización. Escríbeme y te propongo la opción que mejor se adapte.',
    },
    {
      q: '¿Las charlas y capacitaciones son virtuales o presenciales?',
      a: 'Los servicios para colegios y docentes se ofrecen en modalidad virtual o presencial, con tarifas distintas para cada una.',
    },
    {
      q: '¿Cómo empiezo?',
      a: 'Escríbeme por WhatsApp o correo, cuéntame qué necesitas, te propongo la mejor opción y agendamos el día para comenzar.',
    },
  ],
}

// ─── CONTACTO ──────────────────────────────────────────────────
export const contactSection = {
  eyebrow: 'Contacto y redes',
  title: 'Estoy aquí para escucharte, orientarte y acompañarte',
  subtitle: 'Conversemos y encuentra tu mejor opción.',
  formTitle: 'Déjame tu mensaje',
  formNote:
    'Al enviar, se abrirá WhatsApp con tu mensaje ya escrito para que solo tengas que presionar "Enviar".',
  formNoteWithEndpoint: 'Tu mensaje llegará directamente a mi correo. Te responderé lo antes posible.',
}
