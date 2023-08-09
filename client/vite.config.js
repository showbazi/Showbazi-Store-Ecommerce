import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig(() => {
  return {
    server: {
      port: 3001
    },
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
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
        components: `${path.resolve(__dirname, "./src/components/")}`,
        utils: `${path.resolve(__dirname, "./src/utils/")}`,
      },
    },
  };
});