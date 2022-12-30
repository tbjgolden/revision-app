import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/revision-app/",
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        index: new URL(`./index.html`, import.meta.url).href.slice(7),
        load: new URL(`./load.html`, import.meta.url).href.slice(7),
        setup: new URL(`./setup.html`, import.meta.url).href.slice(7),
      },
    },
  },
});
