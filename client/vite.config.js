import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(() => {
  return {
    define: {
      'process.env': {},
    },
    build: {
      outDir: 'build',
      commonjsOptions: {
        esmExternals: true 
     },
    },
    plugins: [
      react(),
      svgr({ svgrOptions: { icon: true } }),
    ],
  };
});