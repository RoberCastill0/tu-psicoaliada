// ═══════════════════════════════════════════════════════════════
//  IMÁGENES DEL SITIO
//  Para reemplazar una imagen:
//    1. Copia tu nueva imagen en  src/assets/images/
//    2. Cambia el nombre del archivo en la línea "import" correspondiente.
//    3. Actualiza el texto "alt" (descripción para accesibilidad y SEO).
// ═══════════════════════════════════════════════════════════════

import logo from '../assets/images/logo-tu-psicoaliada.webp'
import fatimaPrincipal from '../assets/images/fatima-principal.webp'
import fatimaPerfil from '../assets/images/fatima-perfil.webp'
import familiaAdolescentes from '../assets/images/familia-adolescentes.webp'

export const images = {
  logo: {
    src: logo,
    alt: 'Logotipo de Tu PsicoAliada – Fátima Martínez, Estimulación y Psicomotricidad, Modificación de la conducta',
  },
  hero: {
    src: fatimaPrincipal,
    alt: 'Rosa Fátima Martínez Changana, bachiller en Psicología, sonriendo',
  },
  profile: {
    src: fatimaPerfil,
    alt: 'Fátima Martínez en su espacio de trabajo con materiales educativos',
  },
  families: {
    src: familiaAdolescentes,
    alt: 'Madre conversando y sonriendo junto a tres adolescentes en casa',
  },
}
