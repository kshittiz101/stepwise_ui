import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const port = Number(env.VITE_PORT || 5173);
  const target = env.VITE_API_TARGET || "http://localhost:8000";
  const prefix = env.VITE_API_PREFIX || "/api";

  return {
    base: env.VITE_BASE ?? '/',

    plugins: [vue(), vueDevTools(), tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: port,
      proxy: {
        [prefix]: {
          target: target,
          changeOrigin: true,
        },
      },
    },
  }
})
