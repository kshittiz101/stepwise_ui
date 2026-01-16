Cool — you’re basically one line away. The idea is:

- **localhost** should use `/`
- **production** should use `/your-subfolder/` (only if you deploy under a subpath), or `/` if you deploy at the domain root
- you control that with `base` in Vite, and it becomes `import.meta.env.BASE_URL`

Here’s the “works in dev + prod” setup using an env var.

## 1) Update your `vite.config.ts`

```ts
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '') // loads .env, .env.production, etc.

  return {
    // Default "/" for localhost; override in production with VITE_BASE
    base: env.VITE_BASE ?? '/',

    plugins: [vue(), vueDevTools(), tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 3000,
    },
  }
})
```

## 2) Create env files

**.env** (for dev / localhost)

```env
VITE_BASE=/
```

**.env.production** (for production)

- If your site is at `https://example.com/`:

```env
VITE_BASE=/
```

- If your site is at `https://example.com/myapp/`:

```env
VITE_BASE=/myapp/
```

✅ Now `import.meta.env.BASE_URL` will be `/` on localhost and `/myapp/` in prod.

## 3) How to use it (short + sweet)

Use it whenever you need a path that works in both environments:

**Public assets (in `/public`)**

```ts
const logo = `${import.meta.env.BASE_URL}logo.png`
```

**Router (important for subfolder deploys)**

```ts
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})
```

### Tiny rule

- Deploy at root? `VITE_BASE=/`
- Deploy in subfolder? `VITE_BASE=/subfolder/` (keep the trailing `/`)

If you tell me your production URL format (root domain vs subfolder vs GitHub Pages), I’ll tell you the exact `VITE_BASE` value to use.
