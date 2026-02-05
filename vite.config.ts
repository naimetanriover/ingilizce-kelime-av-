import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Fix for __dirname not being defined in ES modules (Line 21 error)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(() => {
  return {
    base: '/',   // 👈 KRİTİK SATIR

    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    // Following @google/genai guidelines: Removed manual definition of process.env.API_KEY.
    // The SDK expects this variable to be pre-configured and injected by the environment.
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
