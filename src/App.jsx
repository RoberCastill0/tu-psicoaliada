// ═══════════════════════════════════════════════════════════════
//  ESTRUCTURA DE LA PÁGINA
//  El orden de las secciones se define aquí. Cada sección está en
//  src/sections/ y sus textos en src/data/.
// ═══════════════════════════════════════════════════════════════

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import FamilyServices from './sections/FamilyServices.jsx'
import SchoolServices from './sections/SchoolServices.jsx'
import Process from './sections/Process.jsx'
import Faq from './sections/Faq.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />            {/* id="inicio" */}
        <About />           {/* id="sobre-mi" */}
        <FamilyServices />  {/* id="familias" */}
        <SchoolServices />  {/* id="colegios" */}
        <Process />         {/* id="como-trabajo" */}
        <Faq />             {/* id="preguntas" */}
        <Contact />         {/* id="contacto" */}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
