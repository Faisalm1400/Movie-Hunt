/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
   theme: {
    extend: {
       colors: {
        // Background layers (deep → lighter for depth/hierarchy)
        'bg-darkest': '#000000',      // Pure black – hero backgrounds, app root
        'bg-primary': '#0A0A0A',      // Main screen bg (subtle lift from pure black)
        'bg-secondary': '#111111',    // Cards, sections, tab bar
        'bg-tertiary': '#1C1C1E',     // Elevated elements (search bar, modals)
        'bg-overlay': 'rgba(0, 0, 0, 0.6)', // Gradients over posters

        // Text hierarchy
        'text-primary': '#FFFFFF',    // Titles, main content
        'text-secondary': '#E5E5E5',  // Descriptions, subtitles
        'text-tertiary': '#9E9E9E',   // Metadata (year, genre, cast)
        'text-muted': '#6B7280',      // Placeholders, hints

        // Accent / Brand (pick ONE dominant; red is most common in movie apps)
        'accent': '#E50914',          // Netflix-style red – Play buttons, highlights, ratings ★
        'accent-hover': '#B20710',    // Darker pressed/hover

        // UI states
        'success': '#22C55E',         // Added to wishlist
        'warning': '#F59E0B',         // In-progress watching
        'error': '#EF4444',           // Remove / error states

        // Borders & dividers
        'border': '#2A2A2A',
        'divider': '#333333',

        // Tab bar (common in Home/Search/Wishlist/Profile)
        'tab-active': '#E50914',      // Accent on selected tab icon/text
        'tab-inactive': '#A0A0A0',
      },
    },
  },
  plugins: [],
}