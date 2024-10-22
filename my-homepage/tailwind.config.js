export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure all components are covered
  ],
  theme: {
    extend: {
      colors: {
        'dark-orange': '#FF8C00', // Dark Orange color
        'yellow': '#FFD700', // Yellow color
      },
      backgroundImage: {
        'orange-yellow-gradient': 'linear-gradient(to right, #FF8C00, #FFD700)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
