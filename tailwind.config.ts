import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        nbBg: '#F7F5F2',
        nbInk: '#111111',
        nbYellow: '#FFD400',
        nbPink: '#FF8FAB',
        nbBlue: '#00D1FF',
        nbLime: '#C6FF00',
        nbOrange: '#FF7A00',
        nbPurple: '#A78BFA',
        nbTeal: '#14B8A6',
        nbRed: '#FF3B3B',
        nbMint: '#98FF98',
        nbCyan: '#22D3EE',
        nbViolet: '#7C3AED'
      },
      boxShadow: {
        nb: '6px 6px 0 0 #111111',
        nbSm: '4px 4px 0 0 #111111'
      },
      borderWidth: {
        3: '3px',
        6: '6px'
      },
      fontFamily: {
        display: ['ui-rounded', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config
