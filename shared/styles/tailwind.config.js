/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./domains/**/*.{html,js}",
    "./shared/components/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // tryon-api.com
        'api-primary': '#6366f1',    // Indigo
        'api-secondary': '#a855f7',  // Purple
        
        // view-ar.com
        'view-primary': '#3b82f6',   // Blue
        'view-secondary': '#06b6d4', // Cyan
        
        // arfits.com
        'fits-primary': '#10b981',   // Green
        'fits-secondary': '#14b8a6', // Teal
        
        // wearfits.me
        'me-primary': '#ec4899',     // Pink
        'me-secondary': '#a855f7',   // Purple
        
        // arviewer.mobi
        'viewer-primary': '#f97316', // Orange
        'viewer-secondary': '#ef4444', // Red
        
        // WEARFITS brand
        'wearfits': '#6366f1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
