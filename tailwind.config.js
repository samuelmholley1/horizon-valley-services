/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'horizon-blue': '#2563eb',
        'horizon-green': '#16a34a',
        'horizon-gray': '#64748b',
      },
    },
  },
  plugins: [],
}
