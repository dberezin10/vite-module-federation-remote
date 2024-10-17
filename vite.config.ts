import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
        name: 'remoteApp',
        filename: 'remoteEntry.js',
        exposes: {
          './RemoteComponent': './src/RemoteComponent',
        },
        remotes: {
            hostApp: 'http://localhost:6500/assets/remoteEntry.js',
        },
        shared: ['react', 'react-dom'],
      }),
  ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },
})
