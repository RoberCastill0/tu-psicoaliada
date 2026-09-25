// ═══════════════════════════════════════════════════════════════
//  SERVICIOS Y PRECIOS
//  Para agregar un servicio, copia un bloque { ... } completo dentro
//  de la lista "services" que corresponda y cambia sus textos.
//
//  Campos de cada servicio:
//   - icon:        icono de https://lucide.dev/icons (importarlo arriba)
//   - title:       nombre del servicio
//   - description: descripción corta
//   - prices:      lista de precios [{ amount: 'S/ 70', unit: 'por sesión' }]
//   - extra:       (opcional) línea adicional, por ejemplo un paquete
//   - whatsappMessage: mensaje que se escribe al pulsar "Consultar"
// ═══════════════════════════════════════════════════════════════

import {
  Users,
  Smile,
  Brain,
  ClipboardList,
  HeartHandshake,
  Presentation,
  Star,
  FileText,
  PenTool,
  MonitorSmartphone,
} from 'lucide-react'

// ─── SERVICIOS PARA FAMILIAS Y ADOLESCENTES ────────────────────
export const familyServices = {
  eyebrow: 'Servicios para',
  title: 'Familias y adolescentes',
  subtitle: 'Acompañamos el desarrollo y bienestar en cada etapa.',
  services: [
    {
      icon: Users,
      title: 'Orientación psicoeducativa para padres y familias',
      description:
        'Espacio de orientación sobre conducta, emociones, hábitos y acompañamiento en casa.',
      prices: [{ amount: 'S/ 70', unit: 'por sesión' }],
      whatsappMessage:
        'Hola Fátima, me interesa la Orientación psicoeducativa para padres y familias. ¿Me brindas más información?',
    },
    {
      icon: Smile,
      title: 'Talleres focalizados para adolescentes',
      description:
        'Bienestar emocional, autoestima, habilidades sociales, hábitos y proyecto de vida.',
      prices: [{ amount: 'S/ 150', unit: 'por taller grupal' }],
      whatsappMessage:
        'Hola Fátima, me interesan los Talleres focalizados para adolescentes. ¿Me brindas más información?',
    },
    {
      icon: Brain,
      title: 'Talleres de estimulación cognitiva',
      description: 'Atención, memoria, organización y funciones ejecutivas.',
      prices: [{ amount: 'S/ 80', unit: 'por sesión individual' }],
      extra: 'Paquete de 4 sesiones: S/ 280',
      whatsappMessage:
        'Hola Fátima, me interesan los Talleres de estimulación cognitiva. ¿Me brindas más información?',
    },
    {
      icon: ClipboardList,
      title: 'Programa de hábitos y acompañamiento personal',
      description: 'Rutinas, motivación, seguimiento y herramientas prácticas.',
      prices: [{ amount: 'S/ 120', unit: 'por paquete semanal' }],
      whatsappMessage:
        'Hola Fátima, me interesa el Programa de hábitos y acompañamiento personal. ¿Me brindas más información?',
    },
  ],
}

// ─── SERVICIOS PARA COLEGIOS, DOCENTES Y MATERIALES ────────────
export const schoolServices = {
  eyebrow: 'Servicios para',
  title: 'Colegios, docentes y materiales',
  subtitle: 'Servicios psicoeducativos para colegios y docentes, en modalidad virtual o presencial.',
  services: [
    {
      icon: HeartHandshake,
      title: 'Charla para padres',
      description: 'Temas de crianza, emociones, límites, hábitos y bienestar.',
      prices: [
        { amount: 'S/ 180', unit: 'virtual' },
        { amount: 'S/ 250', unit: 'presencial' },
      ],
      whatsappMessage:
        'Hola Fátima, escribo de una institución educativa. Nos interesa una Charla para padres. ¿Nos brindas más información?',
    },
    {
      icon: Presentation,
      title: 'Capacitación para docentes',
      description: 'TEA, TDAH, inclusión, manejo conductual y estrategias en aula.',
      prices: [
        { amount: 'S/ 220', unit: 'virtual' },
        { amount: 'S/ 300', unit: 'presencial' },
      ],
      whatsappMessage:
        'Hola Fátima, escribo de una institución educativa. Nos interesa una Capacitación para docentes. ¿Nos brindas más información?',
    },
    {
      icon: Star,
      title: 'Programas o talleres para estudiantes',
      description: 'Convivencia, prevención, emociones, atención y habilidades sociales.',
      prices: [{ amount: 'S/ 200', unit: 'por grupo' }],
      whatsappMessage:
        'Hola Fátima, escribo de una institución educativa. Nos interesan los Programas o talleres para estudiantes. ¿Nos brindas más información?',
    },
    {
      icon: FileText,
      title: 'Elaboración de materiales y recursos psicoeducativos',
      description: 'Fichas, boletines, cartillas, dinámicas y recursos digitales.',
      prices: [{ amount: 'S/ 10 a S/ 45', unit: '' }],
      whatsappMessage:
        'Hola Fátima, me interesa la Elaboración de materiales y recursos psicoeducativos. ¿Me brindas más información?',
    },
  ],
  includesTitle: 'Incluye',
  includes: [
    { icon: FileText, label: 'Material de apoyo' },
    { icon: PenTool, label: 'Diseño personalizado' },
    { icon: MonitorSmartphone, label: 'Modalidad virtual o presencial' },
  ],
  cta: 'Solicitar propuesta para mi institución',
  ctaMessage:
    'Hola Fátima, escribo de una institución educativa y quisiera solicitar una propuesta de charla, capacitación o taller.',
}

// Lista usada en el selector del formulario de contacto.
export const serviceOptions = [
  ...familyServices.services.map((s) => s.title),
  ...schoolServices.services.map((s) => s.title),
  'Otro / aún no lo sé',
]
