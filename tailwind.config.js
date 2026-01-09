/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'ip-blue': {
          1: '#213462'
        },
        'ip-orange': {
          1: '#F8A403'
        }
      },
      fontFamily:{
        'playfair': '"Playfair Display", serif',
        'brandon': '"Brandon"',
        'brandon-bold': '"Brandon Bold"'
      },
      fontSize: {
        'xsm': ['.8125rem', {
          lineHeight: '1rem',
        }],
        'xxs': ['.6875rem', {
          lineHeight: '1rem',
        }],
        'md': ['16px', {
          lineHeight: '1rem',
        }],
      },
      lineHeight: {
        'leading-half': '0.5rem',
      }
    },
  },
  plugins: [],
}

