# Global S1 Corporate Web

Web corporativa enterprise-grade para Global S1, construida con Next.js 14+, TypeScript, TailwindCSS y Framer Motion.

## 🚀 Requisitos Previos

- Node.js 18.17 o superior
- npm

## 🛠️ Instalación y Ejecución

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Correr en modo desarrollo:**
    ```bash
    npm run dev
    ```
    Visita [http://localhost:3000](http://localhost:3000)

3.  **Construir para producción:**
    ```bash
    npm run build
    npm start
    ```

## 🌐 Internacionalización (i18n)

El proyecto soporta **Español (es)**, **Inglés (en)**, **Portugués (pt)**, **Francés (fr)** y **Japonés (ja)**.

### Agregar o Editar Textos
Todos los textos visibles están en `src/messages/{idioma}.json`. No hardcodear texto en los componentes.

**Ejemplo (`src/messages/es.json`):**
```json
{
  "home": {
    "hero": {
      "title": "Nuevo Título"
    }
  }
}
```

### Agregar un Nuevo Idioma
1.  Agregar el código del idioma en `src/i18n/routing.ts` (`locales` array).
2.  Crear el archivo correspondiente en `src/messages/` (ej: `de.json`).

## 📝 Gestión de Contenido

El contenido estructurado (productos, servicios, equipo) se encuentra en la carpeta `src/content/`.
Esto permite actualizar la información del negocio sin tocar la lógica de los componentes.

- `src/content/products.ts`: Lista de productos SaaS.
- `src/content/services.ts`: Lista de servicios.
- `src/content/team.ts`: Miembros del equipo.

## 🎨 Estilos y Tema

- **TailwindCSS**: Utilizado para todo el estilado.
- **Variables CSS**: Definidas en `src/styles/globals.css` para manejar los colores de marca y el modo oscuro.
- **Modo Oscuro**: Soportado nativamente mediante `next-themes`.

## ✅ Calidad de Código

- **Linting**: `npm run lint`
- **TypeScript**: Strict mode activado.
