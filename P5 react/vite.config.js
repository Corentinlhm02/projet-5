import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Spécifie le port sur lequel Vite écoutera
    open: true, // Ouvre automatiquement le navigateur lorsque le serveur démarre
    watch: {
      usePolling: true // Utilisez le polling pour surveiller les modifications dans certains environnements (optionnel)
    }
  }
});

