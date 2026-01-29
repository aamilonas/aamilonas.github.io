/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Minimal palette - refined neutrals with subtle accent
        ink: {
          900: '#0a0a0b',    // Deepest - near black
          800: '#18181b',    // Primary text light mode
          700: '#27272a',    // Dark surface
          600: '#3f3f46',    // Borders dark mode
          500: '#52525b',    // Secondary text light mode
          400: '#71717a',    // Muted text
          300: '#a1a1aa',    // Secondary text dark mode
          200: '#d4d4d8',    // Borders light mode
          100: '#e4e4e7',    // Light surface borders
          50: '#f4f4f5',     // Light surface
        },
        // Accent color - used sparingly (10% rule)
        accent: {
          DEFAULT: '#2563eb', // Primary actions light mode
          light: '#60a5fa',   // Primary actions dark mode
          subtle: '#dbeafe',  // Subtle backgrounds light mode
          'subtle-dark': '#1e3a5f', // Subtle backgrounds dark mode
        },
        // Semantic colors
        success: '#16a34a',
        warning: '#d97706',
        error: '#dc2626',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '600' }],
        'h1': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.025em', fontWeight: '600' }],
        'h2': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['1.125rem', { lineHeight: '1.5', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#2563eb",           // Blue-600 - strong, accessible
          "primary-content": "#ffffff",
          "secondary": "#18181b",         // Ink-800
          "secondary-content": "#ffffff",
          "accent": "#2563eb",
          "accent-content": "#ffffff",
          "neutral": "#18181b",           // Ink-800 for text
          "neutral-content": "#fafafa",
          "base-100": "#ffffff",          // Pure white background
          "base-200": "#f4f4f5",          // Ink-50 surface
          "base-300": "#e4e4e7",          // Ink-100 borders
          "base-content": "#18181b",      // Ink-800 text
          "info": "#2563eb",
          "success": "#16a34a",
          "warning": "#d97706",
          "error": "#dc2626",
        },
        dark: {
          "primary": "#60a5fa",           // Blue-400 - softer for dark
          "primary-content": "#0a0a0b",
          "secondary": "#a1a1aa",         // Ink-300
          "secondary-content": "#0a0a0b",
          "accent": "#60a5fa",
          "accent-content": "#0a0a0b",
          "neutral": "#fafafa",           // Light text
          "neutral-content": "#18181b",
          "base-100": "#0a0a0b",          // Near black background
          "base-200": "#18181b",          // Ink-800 surface
          "base-300": "#27272a",          // Ink-700 borders
          "base-content": "#fafafa",      // Light text
          "info": "#60a5fa",
          "success": "#22c55e",
          "warning": "#fbbf24",
          "error": "#f87171",
        },
      },
    ],
  },
}
