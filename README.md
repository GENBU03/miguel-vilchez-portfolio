# Portfolio React + Tailwind

Portfolio profesional moderno para Miguel Ángel Vilchez Meneses, diseñado como un proyecto React con Tailwind CSS y preparado para despliegues rápidos.

## Estructura del proyecto
- `index.html` - Entrada principal para Vite.
- `package.json` - Dependencias y scripts.
- `vite.config.js` - Configuración del servidor de desarrollo.
- `tailwind.config.js` - Configuración de Tailwind.
- `postcss.config.js` - Configuración de PostCSS.
- `src/main.jsx` - Punto de entrada de React.
- `src/App.jsx` - Componentes y estructura del portafolio.
- `src/index.css` - Estilos base y background.
- `favicon.svg` - Icono del sitio.

## Ejecutar localmente
1. Abre PowerShell en la carpeta del proyecto:
   ```powershell
   cd C:\Users\migue\miguel-vilchez-portfolio
   ```
2. Instala dependencias:
   ```powershell
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```powershell
   npm run dev
   ```
4. Abre la URL que muestra la terminal (por ejemplo, `http://127.0.0.1:5173`).

## Build de producción
```powershell
npm run build
```

## Despliegue fácil
### GitHub Pages
1. Crea un repositorio nuevo en GitHub.
2. Sube todos los archivos del proyecto.
3. En `Settings > Pages`, selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda y espera unos minutos.

### Netlify
1. En Netlify, importa el repositorio desde Git.
2. Selecciona la rama `main`.
3. No necesitas comando de build extra para un proyecto estático con Vite.
4. Publica y usa la URL generada.

### Vercel
1. Importa el repositorio en Vercel.
2. Selecciona la rama `main`.
3. Vercel detecta automáticamente el proyecto React/Vite.
4. Despliega y usa la URL de preview.

## Notas adicionales
- El diseño es adecuado para un perfil junior/practicante.
- Mantiene una estética profesional, minimalista y moderna.
- Incluye animaciones suaves, glassmorphism ligero y una navegación clara.
