/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#0b1020',
        surface: '#121a30',
        text: '#e6edf7',
        muted: '#a7b0c4',
        accent: '#7dd3fc',
      },
    },
  },
  plugins: [],
};
