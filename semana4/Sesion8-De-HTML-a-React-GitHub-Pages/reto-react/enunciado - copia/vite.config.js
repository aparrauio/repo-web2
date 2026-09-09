import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// El "base" debe coincidir EXACTO con el nombre del repositorio de GitHub
// para que la app funcione correctamente en GitHub Pages.
// Ejemplo: si tu repo es "consultoria-react", usa "/consultoria-react/".
export default defineConfig({
  plugins: [react()],
  base: "/consultoria-react/",
});
