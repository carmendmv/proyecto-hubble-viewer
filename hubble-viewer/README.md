# Hubble Viewer

Hubble Viewer es una aplicación web interactiva que muestra imágenes y datos del Telescopio Espacial Hubble, consumiendo la API de la NASA. La interfaz está diseñada para ser responsive y dinámica, utilizando React con Vite, y se beneficia de animaciones con Framer Motion y estilos con Tailwind CSS (y Bootstrap en algunos casos).

## Funcionalidades

- **Consumo de API externa:** Se obtienen imágenes del telescopio Hubble mediante peticiones asíncronas (axios y fetch) a la API de la NASA.
- **Gestión de errores:** Si la solicitud falla, se muestra un mensaje de error adecuado.
- **Interfaz responsive:** El diseño se adapta a dispositivos móviles y de escritorio utilizando Tailwind CSS y clases de Bootstrap.
- **Actualización dinámica:** La interfaz se actualiza en tiempo real con React (hooks useState y useEffect), sin necesidad de recargar la página.
- **Navegación preparada:** Se ha integrado React Router para facilitar futuras expansiones a múltiples rutas, aunque actualmente se usa una única ruta.
- **Componentes de terceros:** Se usan librerías como Framer Motion para animaciones, react-icons para íconos y otros componentes para enriquecer la UI.
- **Despliegue:** El proyecto se construye con Vite y se puede desplegar en servidores externos como Vercel o GitHub Pages.
- **Control de versiones:** Se han realizado múltiples commits con mensajes claros, respetando las buenas prácticas de git (se conserva el historial original del código base).

## Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/carmendmv/proyecto-hubble-viewer.git
   cd proyecto-hubble-viewer

