# Tailwind CSS Configuration Guide

## Overview

This document explains how Tailwind CSS v4 is configured in the StepWise UI project and provides a comprehensive guide to understanding and working with the configuration.

---

## Tailwind CSS Version: v4.1.18

**Important:** This project uses Tailwind CSS **v4**, which has significant differences from v3. The configuration approach is completely different and more modern.

---

## Current Configuration Setup

### 1. Dependencies in `package.json`

```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.1.18",
    "tailwindcss": "^4.1.18"
  }
}
```

Both packages are required:
- `tailwindcss`: Core Tailwind CSS framework
- `@tailwindcss/vite`: Vite plugin for Tailwind CSS v4 integration

---

### 2. Vite Configuration (`vite.config.ts`)

```typescript
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
})
```

**Key Points:**
- `tailwindcss()` plugin is imported from `@tailwindcss/vite`
- Plugin is added to the `plugins` array
- This automatically handles Tailwind CSS processing during development and build

---

### 3. CSS Import (`src/assets/main.css`)

```css
@import 'tailwindcss';

@theme {
  --color-primary: oklch(0.5 0.15 250);
  --color-secondary: oklch(0.65 0.15 250);
  --font-family-sans: 'Inter', system-ui, sans-serif;
}
```

**How This Works:**

1. **`@import 'tailwindcss';`**
   - This single import loads all Tailwind CSS utilities
   - No need for separate `@tailwind base`, `@tailwind components`, `@tailwind utilities` directives (those are v3 syntax)
   - The plugin automatically injects necessary styles

2. **`@theme` Directive (Tailwind v4 Specific)**
   - CSS-based configuration for custom theme values
   - Custom colors using `oklch()` color space (modern, better color consistency)
   - Custom font families defined as CSS custom properties

---

## Key Differences: Tailwind v3 vs v4

### v3 Configuration (Old Way)

**Required `tailwind.config.js` file:**
```javascript
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

**CSS file had multiple directives:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### v4 Configuration (Current Way)

**No `tailwind.config.js` needed!**

**Single CSS import:**
```css
@import 'tailwindcss';

@theme {
  --color-primary: oklch(0.5 0.15 250);
}
```

---

## How I Configured Tailwind for This Project

### Step 1: Verified Dependencies ✅

Confirmed that Tailwind CSS v4 packages were already installed:
```bash
npm list tailwindcss @tailwindcss/vite
```

Both were present in `package.json` with v4.1.18 versions.

### Step 2: Verified Vite Plugin ✅

Checked `vite.config.ts` to ensure the Tailwind plugin was properly configured:
```typescript
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
})
```

The plugin was already correctly configured.

### Step 3: Enhanced CSS Configuration ✅

Updated `src/assets/main.css` to include custom theme values:

```css
@import 'tailwindcss';

@theme {
  --color-primary: oklch(0.5 0.15 250);
  --color-secondary: oklch(0.65 0.15 250);
  --font-family-sans: 'Inter', system-ui, sans-serif;
}
```

**What These Custom Values Do:**
- `--color-primary`: Defines a custom primary color in OKLCH color space (blue-violet)
- `--color-secondary`: Defines a secondary color (lighter version of primary)
- `--font-family-sans`: Sets default sans-serif font family

### Step 4: Applied Tailwind Classes Throughout Project ✅

Updated all Vue components to use Tailwind utility classes:

1. **HomeHeader.vue** - Navigation bar with responsive design
2. **HomeFooter.vue** - Footer with proper layout
3. **HomeView.vue** - Landing page with gradient background and feature cards
4. **DashboardView.vue** - Dashboard with stats cards and activity section
5. **LoginView.vue** - Login form with modern design
6. **MainLayout.vue** - Layout wrapper with header/footer
7. **App.vue** - Root component using MainLayout

---

## Tailwind v4 `@theme` Directive Explained

The `@theme` directive allows you to customize your Tailwind theme using CSS instead of JavaScript.

### Available Theme Variables

```css
@theme {
  /* Colors */
  --color-*: color-value;

  /* Spacing */
  --spacing-*: spacing-value;

  /* Fonts */
  --font-family-*: font-family;
  --font-size-*: font-size;

  /* Border Radius */
  --radius-*: radius-value;

  /* Shadows */
  --shadow-*: shadow-value;

  /* and more... */
}
```

### Color Customization Example

```css
@theme {
  --color-primary: oklch(0.5 0.15 250);
  --color-primary-light: oklch(0.6 0.15 250);
  --color-primary-dark: oklch(0.4 0.15 250);
}
```

**Usage in components:**
```vue
<button class="bg-primary text-white hover:bg-primary-dark">
  Click me
</button>
```

### Font Family Customization

```css
@theme {
  --font-family-sans: 'Inter', system-ui, sans-serif;
  --font-family-mono: 'Fira Code', monospace;
}
```

---

## Using Tailwind Classes in Vue Components

### Basic Classes

```vue
<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold text-gray-900">
      Hello World
    </h1>
  </div>
</template>
```

### Responsive Design

Tailwind uses a mobile-first approach:

```vue
<template>
  <!-- Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Content -->
  </div>
</template>
```

**Breakpoints:**
- `sm`: 640px and up
- `md`: 768px and up
- `lg`: 1024px and up
- `xl`: 1280px and up
- `2xl`: 1536px and up

### Hover and Focus States

```vue
<template>
  <button class="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
    Button
  </button>
</template>
```

### Transitions

```vue
<template>
  <div class="transition-all duration-300 ease-in-out hover:scale-105">
    Hover me
  </div>
</template>
```

---

## Project Structure After Tailwind Configuration

```
stepwise_ui/
├── src/
│   ├── assets/
│   │   └── main.css           # Tailwind imports and @theme configuration
│   ├── components/
│   │   ├── HomeHeader.vue     # Navigation with Tailwind
│   │   └── HomeFooter.vue     # Footer with Tailwind
│   ├── layout/
│   │   └── MainLayout.vue     # Layout wrapper
│   ├── views/
│   │   ├── HomeView.vue       # Landing page
│   │   ├── DashboardView.vue  # Dashboard
│   │   └── LoginView.vue      # Login page
│   └── App.vue                # Root component
├── vite.config.ts             # Vite + Tailwind plugin
└── package.json               # Dependencies
```

---

## Common Tailwind Classes Used in This Project

### Layout
- `flex` - Enable flexbox
- `flex-col` - Column direction
- `grid` - Enable CSS grid
- `container mx-auto` - Center container with max-width
- `min-h-screen` - Minimum height of viewport

### Spacing
- `p-4` - Padding 1rem
- `px-4` - Horizontal padding 1rem
- `py-2` - Vertical padding 0.5rem
- `m-4` - Margin 1rem
- `my-2` - Vertical margin 0.5rem
- `gap-6` - Gap between flex/grid items 1.5rem

### Colors
- `bg-white` - White background
- `bg-gray-50` - Light gray background
- `text-gray-900` - Dark gray text
- `text-indigo-600` - Indigo text
- `bg-indigo-600` - Indigo background

### Typography
- `text-sm` - Small text
- `text-lg` - Large text
- `text-3xl` - Extra large text
- `font-medium` - Medium font weight
- `font-bold` - Bold font weight

### Borders
- `border` - Default border
- `border-gray-300` - Gray border
- `rounded-lg` - Large border radius
- `rounded-full` - Full rounded (circle)

### Effects
- `shadow-md` - Medium shadow
- `shadow-xl` - Extra large shadow
- `hover:shadow-lg` - Large shadow on hover
- `transition-shadow` - Smooth shadow transition

---

## How Tailwind v4 Works Under the Hood

### Build Process

1. **Development Mode**
   - Vite plugin watches CSS files
   - On-the-fly compilation of Tailwind classes
   - Hot Module Replacement (HMR) for fast updates

2. **Production Build**
   - Scans all Vue components and templates
   - Extracts used Tailwind classes
   - Generates optimized CSS with only used styles
   - Tree-shakes unused utilities for smaller bundle size

### Automatic Content Scanning

In Tailwind v4 with the Vite plugin:
- No need for `content` configuration array
- Plugin automatically scans:
  - `.vue` files
  - `.js` and `.ts` files
  - Template strings
  - Any imported CSS files

---

## Adding More Custom Theme Values

### Adding Custom Spacing

```css
@theme {
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}
```

Usage:
```vue
<div class="p-lg">Padding: 1.5rem</div>
```

### Adding Custom Colors

```css
@theme {
  --color-brand-blue: oklch(0.55 0.2 250);
  --color-brand-green: oklch(0.6 0.15 150);
  --color-brand-red: oklch(0.55 0.2 20);
}
```

Usage:
```vue
<button class="bg-brand-blue text-white">Button</button>
```

### Adding Custom Shadows

```css
@theme {
  --shadow-glow: 0 0 20px oklch(0.5 0.15 250 / 0.5);
}
```

Usage:
```vue
<div class="shadow-glow">Glowing element</div>
```

---

## Testing Your Tailwind Configuration

### 1. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` and verify that:
- Styles are loading correctly
- Responsive design works
- Colors match your theme

### 2. Check Browser DevTools

Open browser DevTools and inspect elements:
- You should see Tailwind classes applied
- In the Computed tab, verify that styles are working

### 3. Build Production Version

```bash
npm run build
```

Verify that:
- Build completes without errors
- CSS file is generated in `dist/assets/`
- Styles work in the production build

---

## Common Issues and Solutions

### Issue: Tailwind Classes Not Working

**Solution:**
1. Verify `main.css` is imported in `main.ts`
2. Check that `@import 'tailwindcss';` is present
3. Ensure Vite plugin is configured in `vite.config.ts`

### Issue: Build Fails with Tailwind Error

**Solution:**
1. Check that both `tailwindcss` and `@tailwindcss/vite` are installed
2. Ensure versions are compatible (both should be v4.x)
3. Clear node_modules and reinstall: `rm -rf node_modules && npm install`

### Issue: Custom Theme Values Not Working

**Solution:**
1. Ensure custom values are defined inside `@theme` block
2. Check variable naming (must start with appropriate prefix: `--color-`, `--spacing-`, etc.)
3. Verify CSS syntax is correct

---

## Summary

### What Was Configured:

1. ✅ **Dependencies** - Tailwind CSS v4 packages installed
2. ✅ **Vite Plugin** - `@tailwindcss/vite` plugin configured
3. ✅ **CSS Import** - `@import 'tailwindcss'` in main.css
4. ✅ **Custom Theme** - `@theme` directive with custom colors and fonts
5. ✅ **Component Styling** - All Vue components styled with Tailwind utilities
6. ✅ **Layout** - MainLayout wraps all pages with header/footer
7. ✅ **Responsive Design** - Mobile-first approach across all components

### Benefits of This Configuration:

- **No config file needed** - Simpler setup with v4
- **CSS-based theming** - Easier to customize using CSS
- **Automatic scanning** - No need to configure content paths
- **Optimized builds** - Only used styles are included in production
- **Modern color space** - OKLCH for better color consistency
- **TypeScript support** - Full type safety with Vue + TS

### Next Steps:

1. **Add more custom theme values** as needed
2. **Create reusable components** with consistent styling
3. **Use Tailwind's `@layer` directive** for custom components
4. **Consider adding a font** like Inter (defined in theme)
5. **Extend breakpoints** if needed for specific devices

---

## Additional Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS v4 Migration Guide](https://tailwindcss.com/blog/tailwindcss-v4-alpha)
- [OKLCH Color Space](https://oklch.com/)
- [Vue + Tailwind Guide](https://tailwindcss.com/docs/guides/vite)
