import { defineConfig } from 'vite';

export default defineConfig({
  // Vite configuration for vanilla JS project
  // Similar to how C++ build systems (CMake/Make) configure compilation
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});

