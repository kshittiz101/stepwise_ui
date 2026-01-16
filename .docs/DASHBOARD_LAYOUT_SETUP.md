# Dashboard Layout Setup Guide

## Overview

This document explains how a separate layout was created for the dashboard pages in the StepWise UI application. The application now uses different layouts for different sections of the app.

---

## Architecture

### Layout System

The application uses a dynamic layout system where different routes use different layouts:

1. **MainLayout** - Used for public pages (Home, About, etc.)
2. **DashboardLayout** - Used for dashboard and authenticated pages
3. **NoLayout** - Used for standalone pages (Login)

### File Structure

```
src/
├── layout/
│   ├── MainLayout.vue          # Public pages layout (header + footer)
│   └── DashboardLayout.vue     # Dashboard layout (sidebar + top bar)
├── views/
│   ├── HomeView.vue            # Uses MainLayout
│   ├── DashboardView.vue       # Uses DashboardLayout
│   └── LoginView.vue          # Uses NoLayout
├── router/
│   └── index.ts               # Route definitions with layout meta
└── App.vue                    # Dynamic layout switching
```

---

## DashboardLayout Component

### Location
`src/layout/DashboardLayout.vue`

### Features

#### 1. **Responsive Sidebar**
- Fixed sidebar on desktop (256px width)
- Collapsible sidebar on mobile with backdrop
- Smooth slide-in/out animations
- Navigation menu with active state highlighting

#### 2. **Navigation Items**
```javascript
const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Projects', href: '/dashboard/projects', icon: '📁' },
  { name: 'Tasks', href: '/dashboard/tasks', icon: '✓' },
  { name: 'Analytics', href: '/dashboard/analytics', icon: '📈' },
  { name: 'Settings', href: '/dashboard/settings', icon: '⚙️' },
]
```

#### 3. **User Section**
- User avatar with initials
- User name and email
- Logout button

#### 4. **Top Bar**
- Mobile menu toggle button
- Dynamic page title (based on route name)
- Notification icons
- Settings icon

#### 5. **Content Area**
- Scrollable main content area
- Responsive padding

### Tailwind Classes Used

#### Layout Classes
```vue
<div class="flex h-screen bg-gray-50">
  <!-- Sidebar -->
  <div class="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
  <!-- Main Content -->
  <div class="flex-1 flex flex-col md:pl-64 overflow-hidden">
```

- `h-screen` - Full viewport height
- `flex` - Flexbox layout
- `flex-1` - Takes remaining space
- `md:pl-64` - Left padding on desktop for sidebar
- `overflow-hidden` - Prevents body scroll

#### Responsive Classes
```vue
<!-- Mobile sidebar -->
<div :class="[
  sidebarOpen ? 'translate-x-0' : '-translate-x-full'
]">
```

- `-translate-x-full` - Hidden on mobile when closed
- `translate-x-0` - Visible on mobile when open
- `md:translate-x-0` - Always visible on desktop

---

## Router Configuration

### Route Meta Fields

Each route has a `meta.layout` property that specifies which layout to use:

```typescript
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'MainLayout',
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        layout: 'DashboardLayout',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        layout: 'NoLayout',
      },
    },
  ],
})
```

### Dashboard Routes

Multiple dashboard routes share the same layout:

```typescript
{
  path: '/dashboard',
  name: 'dashboard',
  component: DashboardView,
  meta: {
    layout: 'DashboardLayout',
  },
},
{
  path: '/dashboard/projects',
  name: 'projects',
  component: DashboardView,
  meta: {
    layout: 'DashboardLayout',
  },
},
{
  path: '/dashboard/tasks',
  name: 'tasks',
  component: DashboardView,
  meta: {
    layout: 'DashboardLayout',
  },
},
{
  path: '/dashboard/analytics',
  name: 'analytics',
  component: DashboardView,
  meta: {
    layout: 'DashboardLayout',
  },
},
{
  path: '/dashboard/settings',
  name: 'settings',
  component: DashboardView,
  meta: {
    layout: 'DashboardLayout',
  },
}
```

---

## App.vue - Dynamic Layout Switching

### Layout Component

The `App.vue` component dynamically selects the layout based on the route meta:

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './layout/MainLayout.vue'
import DashboardLayout from './layout/DashboardLayout.vue'

const route = useRoute()

const layout = computed(() => {
  const layoutName = route.meta.layout as string

  switch (layoutName) {
    case 'DashboardLayout':
      return DashboardLayout
    case 'NoLayout':
      return null
    case 'MainLayout':
    default:
      return MainLayout
  }
})
</script>

<template>
  <component :is="layout" v-if="layout">
    <router-view />
  </component>
  <router-view v-else />
</template>
```

### How It Works

1. **Use Route Meta** - Gets the layout name from current route's meta
2. **Switch Statement** - Returns the appropriate layout component
3. **Dynamic Component** - Uses `:is` to render the correct layout
4. **Conditional Rendering** - Handles the `NoLayout` case by rendering router-view directly

---

## Dashboard View Component

### Simplified Structure

Since DashboardLayout provides its own header and sidebar, the DashboardView is simplified:

```vue
<template>
  <div class="p-6">
    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Statistics</h3>
        <div class="text-4xl font-bold text-indigo-600">1,234</div>
        <p class="text-gray-600 text-sm mt-1">Total users</p>
      </div>
      <!-- More cards... -->
    </div>

    <!-- Recent Activity -->
    <div class="mt-8 bg-white rounded-lg shadow-md p-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <p class="text-gray-600">
        <!-- Content... -->
      </p>
    </div>
  </div>
</template>
```

### Changes Made

**Before:**
```vue
<div class="bg-gray-50 py-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900">Dashboard</h1>
      <p class="mt-2 text-gray-600">Welcome back! Here's your overview.</p>
    </div>
    <!-- Content... -->
  </div>
</div>
```

**After:**
```vue
<div class="p-6">
  <!-- Direct content without header -->
</div>
```

**Reason:** The header is now provided by DashboardLayout's top bar, which shows the route name dynamically.

---

## Layout Comparison

### MainLayout (Public Pages)

**Components:**
- HomeHeader (Navigation with logo and menu)
- Router-view slot
- HomeFooter (Copyright and links)

**Used For:**
- Home page (`/`)
- About page
- Services page
- Contact page

**Features:**
- Full-width header navigation
- Sticky footer
- Clean, minimal design

### DashboardLayout (Authenticated Pages)

**Components:**
- Sidebar (Fixed navigation)
- Top bar (Mobile menu, page title, icons)
- User section (Profile, logout)
- Router-view slot (Content area)

**Used For:**
- Dashboard (`/dashboard`)
- Projects (`/dashboard/projects`)
- Tasks (`/dashboard/tasks`)
- Analytics (`/dashboard/analytics`)
- Settings (`/dashboard/settings`)

**Features:**
- Sidebar navigation with active states
- Responsive design (collapsible sidebar on mobile)
- User profile section
- Notification icons
- Dynamic page titles

### NoLayout (Standalone Pages)

**Components:**
- None (direct router-view)

**Used For:**
- Login page (`/login`)

**Features:**
- Full-screen design
- No header/footer/sidebar
- Focused content

---

## Responsive Design

### Desktop View (≥768px)
```
┌─────────────┬─────────────────────────────────┐
│             │  Top Bar (Page Title, Icons)    │
│  Sidebar    ├─────────────────────────────────┤
│  (256px)    │                                 │
│  - Logo     │                                 │
│  - Nav      │         Content Area             │
│  - User     │         (Scrollable)             │
│             │                                 │
└─────────────┴─────────────────────────────────┘
```

### Mobile View (<768px)
```
┌─────────────────────────────────────────┐
│ ☰  [Page Title]         🔔 ⚙️       │ ← Top Bar
├─────────────────────────────────────────┤
│                                         │
│                                         │
│           Content Area                    │
│           (Scrollable)                   │
│                                         │
│                                         │
└─────────────────────────────────────────┘

Sidebar (when open):
┌─────────────────────────┐
│ StepWise          ✕   │
├─────────────────────────┤
│ 📊  Dashboard         │
│ 📁  Projects          │
│ ✓   Tasks             │
│ 📈  Analytics         │
│ ⚙️  Settings          │
├─────────────────────────┤
│ [Avatar] John Doe     │
│          logout       │
└─────────────────────────┘
```

---

## Adding New Dashboard Pages

### Step 1: Create View Component

Create a new view in `src/views/`:

```vue
<!-- src/views/ProjectsView.vue -->
<script setup lang="ts"></script>

<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Projects</h2>
    <!-- Content -->
  </div>
</template>
```

### Step 2: Add Route

Add the route in `src/router/index.ts`:

```typescript
import ProjectsView from '../views/ProjectsView.vue'

// Add to routes array
{
  path: '/dashboard/projects',
  name: 'projects',
  component: ProjectsView,
  meta: {
    layout: 'DashboardLayout',
  },
}
```

### Step 3: Add Navigation Item (Optional)

Add to navigation in `DashboardLayout.vue`:

```javascript
const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Projects', href: '/dashboard/projects', icon: '📁' }, // Already exists
  // ...
]
```

---

## Adding New Layouts

### Step 1: Create Layout Component

Create a new layout in `src/layout/`:

```vue
<!-- src/layout/CustomLayout.vue -->
<script setup lang="ts"></script>

<template>
  <div class="custom-layout">
    <header>Custom Header</header>
    <main>
      <router-view />
    </main>
    <footer>Custom Footer</footer>
  </div>
</template>
```

### Step 2: Import in App.vue

```vue
<script setup lang="ts">
import CustomLayout from './layout/CustomLayout.vue'

const layout = computed(() => {
  switch (layoutName) {
    case 'CustomLayout':
      return CustomLayout
    // ... other cases
  }
})
</script>
```

### Step 3: Use in Routes

```typescript
{
  path: '/custom',
  name: 'custom',
  component: CustomView,
  meta: {
    layout: 'CustomLayout',
  },
}
```

---

## Testing the Dashboard Layout

### 1. Start Development Server

```bash
npm run dev
```

### 2. Test Different Routes

**Home Page (`/`):**
- Should use MainLayout
- Shows HomeHeader and HomeFooter
- No sidebar

**Dashboard (`/dashboard`):**
- Should use DashboardLayout
- Shows sidebar with navigation
- Shows top bar with page title
- Content area is scrollable independently

**Login (`/login`):**
- Should use NoLayout
- No header, footer, or sidebar
- Full-screen centered content

### 3. Test Responsive Design

**Desktop (>768px):**
- Sidebar is always visible
- Top bar shows page title
- Content area has left padding for sidebar

**Mobile (<768px):**
- Sidebar is hidden by default
- Menu button appears in top bar
- Clicking menu button slides in sidebar
- Backdrop appears when sidebar is open
- Content area has no left padding

---

## Benefits of Separate Dashboard Layout

### 1. **Better UX for Authenticated Users**
- Sidebar navigation is more intuitive for complex apps
- Quick access to all dashboard sections
- Clear visual separation between public and private areas

### 2. **Improved Code Organization**
- Each layout has a single responsibility
- Reusable across multiple routes
- Easy to maintain and update

### 3. **Responsive by Design**
- Sidebar automatically adapts to screen size
- Mobile-friendly navigation
- Smooth animations and transitions

### 4. **Scalable Architecture**
- Easy to add new dashboard pages
- Consistent layout across all authenticated routes
- Simple to create new layouts for different sections

---

## Common Issues and Solutions

### Issue: Sidebar Not Showing on Mobile

**Solution:**
Check that the toggle button is working and the `sidebarOpen` ref is properly bound:

```vue
<button @click="sidebarOpen = !sidebarOpen">
  <svg><!-- menu icon --></svg>
</button>
```

### Issue: Page Title Not Updating

**Solution:**
Ensure the route has a `name` property. The DashboardLayout uses `route.name` for the title:

```typescript
{
  path: '/dashboard/projects',
  name: 'projects', // This is used for the title
  component: ProjectsView,
  meta: { layout: 'DashboardLayout' },
}
```

### Issue: Layout Not Changing Between Routes

**Solution:**
Check that `meta.layout` is correctly set in the route definition and that `App.vue` is handling all layout names in the switch statement.

---

## Summary

### What Was Implemented:

1. ✅ **DashboardLayout Component** - New layout with sidebar and top bar
2. ✅ **Router Configuration** - Added layout meta to all routes
3. ✅ **Dynamic Layout Switching** - App.vue handles multiple layouts
4. ✅ **Dashboard Routes** - Multiple dashboard routes using same layout
5. ✅ **Responsive Design** - Sidebar adapts to screen size
6. ✅ **User Section** - Profile and logout functionality
7. ✅ **Active State** - Navigation highlights current route

### Files Modified:

- `src/layout/DashboardLayout.vue` - **Created** - New dashboard layout
- `src/router/index.ts` - **Modified** - Added layout meta and dashboard routes
- `src/App.vue` - **Modified** - Dynamic layout switching
- `src/views/DashboardView.vue` - **Modified** - Simplified (removed header)

### Files Unchanged:

- `src/layout/MainLayout.vue` - Still used for public pages
- `src/views/HomeView.vue` - Still uses MainLayout
- `src/views/LoginView.vue` - Still uses NoLayout

### Next Steps:

1. Create individual view components for each dashboard route
2. Add authentication guards to protect dashboard routes
3. Implement actual functionality for sidebar navigation
4. Add user authentication state management
5. Style the user avatar and profile section
6. Add notifications functionality
