# Portfolio React + Tailwind

Portfolio profesional moderno para Miguel Ángel Vilchez Meneses, estudiante de Ingeniería de Sistemas en Perú. Diseñado como un proyecto React con Tailwind CSS, enfocado en prácticas profesionales y primer empleo IT.

## Características
- Diseño moderno y minimalista para portfolio junior
- Responsive para móvil, tablet y PC
- Modo oscuro elegante
- Animaciones suaves y efectos glassmorphism
- Navbar fija con scroll suave
- Secciones: Hero, Sobre mí, Educación, Certificaciones, Habilidades, Proyectos, Objetivos, Contacto
- Optimizado para GitHub Pages, Netlify y Vercel

## Tecnologías utilizadas
- React 18
- Tailwind CSS
- Vite
- HTML5, CSS3, JavaScript

## Ejecutar localmente
1. Asegúrate de tener Node.js instalado (versión 16 o superior).
2. Abre PowerShell en la carpeta del proyecto:
   ```powershell
   cd C:\Users\migue\miguel-vilchez-portfolio
   ```
3. Instala dependencias:
   ```powershell
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```powershell
   npm run dev
   ```
5. Abre la URL que muestra la terminal (por ejemplo, `http://127.0.0.1:5173`).

## Build de producción
```powershell
npm run build
```
Esto genera la carpeta `dist` con los archivos optimizados.

## Despliegue
### GitHub Pages
1. Crea un repositorio nuevo en GitHub llamado `miguel-vilchez-portfolio` (o similar).
2. Sube todos los archivos del proyecto al repositorio.
3. Ve a `Settings > Pages` en el repositorio.
4. Selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda los cambios. GitHub Pages generará la URL (ej: `https://tuusuario.github.io/miguel-vilchez-portfolio`).

### Netlify
1. Ve a [Netlify](https://netlify.com) y crea una cuenta.
2. Importa el repositorio desde Git (GitHub, GitLab, etc.).
3. Selecciona la rama `main`.
4. Netlify detectará automáticamente que es un proyecto Vite y configurará el build.
5. Publica y obtén la URL generada.

### Vercel
1. Ve a [Vercel](https://vercel.com) y crea una cuenta.
2. Importa el repositorio desde Git.
3. Selecciona la rama `main`.
4. Vercel detectará automáticamente el framework (React/Vite) y configurará el despliegue.
5. Publica y obtén la URL generada.

## Estructura del proyecto
- `index.html` - Entrada principal para Vite con meta tags SEO.
- `package.json` - Dependencias y scripts.
- `vite.config.js` - Configuración del servidor de desarrollo.
- `tailwind.config.js` - Configuración de Tailwind CSS.
- `postcss.config.js` - Configuración de PostCSS.
- `src/main.jsx` - Punto de entrada de React.
- `src/App.jsx` - Componentes y estructura del portafolio.
- `src/index.css` - Estilos base, variables CSS y background.
- `favicon.svg` - Icono del sitio.

## Personalización
- Edita `src/App.jsx` para cambiar contenido personal.
- Modifica colores en `tailwind.config.js` o directamente en clases.
- Agrega más secciones o proyectos según necesites.

## Licencia
Este proyecto es personal y no tiene licencia específica.
2. Selecciona la rama `main`.
3. Vercel detecta automáticamente el proyecto React/Vite.
4. Despliega y usa la URL de preview.

## Notas adicionales
- El diseño es adecuado para un perfil junior/practicante.
- Mantiene una estética profesional, minimalista y moderna.
- Incluye animaciones suaves, glassmorphism ligero y una navegación clara.
