/// <reference types="vite/client" />

// Permite importar assets de imagen (png/jpg/gif/webp/svg) desde TypeScript.
// Vite normalmente lo cubre, pero algunos proyectos no incluyen el archivo por defecto.

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

