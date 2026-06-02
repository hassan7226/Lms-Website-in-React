/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightCyan: '#E6FFFF',
        mediumCyan: '#DDFBFE',
        primaryBlue: '#2563EB',
        whiteTransparent: '#FFFFFFCC',
        mediumGray: '#6B7280',
        darkBlack: '#111827',
        darkGray: '#565656',
        white: '#FFFFFF',
        lightGray: '#F0F1F2',
      },
      fontFamily: {
        // Primary UI font stack used across the project. Prefer local/Google fonts if available.
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        // Heading font (can be same as sans or a different display font)
        heading: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Monospaced font for code snippets
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Roboto Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}