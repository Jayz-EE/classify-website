import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/classify-website', //Change to Repository Name
  build: {
    chunkSizeWarningLimit: 20000, // Set chunk size warning limit to 1000 KB (1 MB)
  },
});

// export default defineConfig({
//   plugins: [react()]
// });