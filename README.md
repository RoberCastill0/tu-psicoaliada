# Tu PsicoAliada – Página web

Página web de **Tu PsicoAliada** (Rosa Fátima Martínez Changana, Bachiller en Psicología):
psicoeducación, talleres y orientación para adolescentes, familias y docentes.

Hecha con **React + Vite**, con CSS normal (sin frameworks de estilos). No depende de ninguna plataforma de IA.

---

## Requisitos

- **Node.js 20.19 o superior** (recomendado: la versión LTS de https://nodejs.org).
  Para comprobarlo: `node -v`

## Instalación

```bash
npm install
```

## Ejecutar localmente

```bash
npm run dev
```

Abre en el navegador: **http://localhost:5173**

## Crear versión de producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para publicar.

## Ver la versión de producción en tu computadora

```bash
npm run preview
```

Abre: **http://localhost:4173**

---

## ¿Dónde se cambia cada cosa?

| Quiero cambiar…                                   | Archivo                                   |
| ------------------------------------------------- | ----------------------------------------- |
| Número de WhatsApp, correo, TikTok, mensaje inicial de WhatsApp | `src/data/site.js` (objeto `contact`) |
| Nombre de la marca, frase principal, frase final | `src/data/site.js` (objeto `brand`)       |
| Opciones del menú                                 | `src/data/site.js` (lista `navLinks`)     |
| Textos: portada, perfil, enfoque, pasos, avisos, preguntas frecuentes, contacto | `src/data/content.js` |
| Servicios, precios y descripciones                | `src/data/services.js`                    |
| Imágenes (y sus textos alternativos)              | `src/assets/images/` + `src/data/images.js` |
| Colores y tipografías                             | `src/styles/theme.css`                    |
| Estilos generales y botones                       | `src/styles/global.css`                   |
| Orden de las secciones                            | `src/App.jsx`                             |
| Título de la pestaña, descripción SEO, Open Graph | `index.html`                              |
| Favicon e imagen para compartir en redes          | `public/`                                 |

### Estructura del proyecto

```text
tu-psicoaliada/
├── index.html                ← SEO, favicon, Open Graph
├── public/                   ← favicon, og-image.jpg, robots.txt
├── src/
│   ├── main.jsx              ← punto de entrada (carga fuentes y estilos)
│   ├── App.jsx               ← orden de las secciones
│   ├── data/                 ← TODOS LOS TEXTOS Y DATOS
│   │   ├── site.js           ← marca, contacto, WhatsApp, menú
│   │   ├── content.js        ← textos de cada sección
│   │   ├── services.js       ← servicios y precios
│   │   └── images.js         ← qué imagen se usa en cada lugar
│   ├── sections/             ← una sección = un archivo .jsx + .css
│   │   ├── Hero.jsx          ← portada (#inicio)
│   │   ├── About.jsx         ← Mi perfil + Mi enfoque (#sobre-mi)
│   │   ├── FamilyServices.jsx← Servicios para familias y adolescentes (#familias)
│   │   ├── SchoolServices.jsx← Servicios para colegios y docentes (#colegios)
│   │   ├── Process.jsx       ← ¿Cómo trabajar conmigo? + Importante (#como-trabajo)
│   │   ├── Faq.jsx           ← Preguntas frecuentes (#preguntas)
│   │   └── Contact.jsx       ← Contacto, redes y formulario (#contacto)
│   ├── components/           ← piezas reutilizables
│   │   ├── Header.jsx        ← menú superior y menú móvil
│   │   ├── Footer.jsx        ← pie de página
│   │   ├── ServiceCard.jsx   ← tarjeta de servicio
│   │   ├── ContactForm.jsx   ← formulario de contacto
│   │   ├── WhatsAppFloat.jsx ← botón flotante de WhatsApp
│   │   ├── SectionHeading.jsx, Reveal.jsx, icons.jsx
│   ├── hooks/                ← animaciones y menú activo
│   ├── utils/whatsapp.js     ← genera los enlaces https://wa.me/...
│   ├── styles/theme.css      ← COLORES y fuentes
│   └── styles/global.css     ← estilos base y botones
└── .env.example              ← variables de entorno de ejemplo
```

### Cambiar el número de WhatsApp

En `src/data/site.js`:

```js
whatsappNumber: '51934578509',   // código de país (51 = Perú) + número, solo dígitos
whatsappDisplay: '934 578 509',  // cómo se ve en pantalla
```

Todos los botones de WhatsApp de la página usan este número.

### Agregar un servicio

En `src/data/services.js`, copia un bloque `{ ... }` completo dentro de `services: [ ... ]`
y cambia `title`, `description`, `prices` y `whatsappMessage`. Los iconos se eligen en
https://lucide.dev/icons y se importan por su nombre en la primera línea del archivo.

### Reemplazar una imagen

1. Copia la imagen nueva en `src/assets/images/` (formatos: .jpg, .png, .webp).
2. En `src/data/images.js`, cambia el nombre del archivo en la línea `import` correspondiente.
3. Actualiza su texto `alt`.

---

## Formulario de contacto

El formulario **no necesita servidor**:

- **Sin configurar nada:** al presionar "Enviar por WhatsApp", se abre WhatsApp con los datos
  del formulario ya escritos. La persona solo tiene que presionar "Enviar".
- **Si quieres recibir los mensajes por correo** (opcional), usa [Formspree](https://formspree.io) (plan gratuito):
  1. Crea una cuenta en formspree.io y un formulario nuevo con el correo `tupsicoaliada2025@gmail.com`.
  2. Copia la URL del formulario (ejemplo: `https://formspree.io/f/abcdwxyz`).
  3. Copia `.env.example` como `.env` y completa:
     ```bash
     VITE_FORM_ENDPOINT=https://formspree.io/f/abcdwxyz
     ```
  4. Reinicia `npm run dev`. El botón cambiará a "Enviar mensaje" y los mensajes llegarán a tu correo.
  5. Al publicar (Vercel/Netlify), agrega la misma variable en la configuración del proyecto.

> El archivo `.env` no se sube a GitHub (está en `.gitignore`).

---

## Subir a GitHub

```bash
git init
git add .
git commit -m "Primera versión de la página"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/tu-psicoaliada.git
git push -u origin main
```

(Primero crea un repositorio vacío llamado `tu-psicoaliada` en https://github.com/new, sin README.)

## Publicar en Vercel (recomendado)

1. Crea una cuenta en https://vercel.com con "Continue with GitHub".
2. **Add New… → Project** → elige el repositorio `tu-psicoaliada` → **Import**.
3. Configuración (Vercel la detecta sola):
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. (Opcional) **Environment Variables**: `VITE_FORM_ENDPOINT` = tu URL de Formspree.
5. **Deploy**. Obtendrás una URL como `https://tu-psicoaliada.vercel.app`.
6. Cada `git push` a `main` vuelve a publicar la web automáticamente.

Después de publicar, reemplaza `https://TU-DOMINIO.com` en `index.html` (etiquetas `og:url` y `og:image`)
por tu URL real, para que la vista previa al compartir en WhatsApp/Facebook muestre la imagen.

---

## Créditos de contenido

Contenido, precios, fotografías y logotipo tomados del *Catálogo de Servicios Tu PsicoAliada*.
Iconos: [Lucide](https://lucide.dev) (licencia ISC). Fuentes: Poppins, Nunito y Dancing Script (licencia OFL, vía Fontsource).
