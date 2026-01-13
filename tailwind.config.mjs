/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'snf-black': '#0C0A18',
        'snf-white': '#F3F2F1',
        'snf-blue': {
          900: '#263268',
          700: '#354690',
          500: '#5B7ECF',
        },
      },
      fontFamily: {
        // Headings: Cooper Hewitt Heavy
        display: ['Cooper Hewitt', 'system-ui', 'sans-serif'],
        // Subheadings: Junicode
        subheading: ['Junicode', 'Georgia', 'serif'],
        // Content: Martian Mono
        sans: ['Martian Mono', 'monospace'],
        mono: ['Martian Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
