import type { Config } from 'tailwindcss'

const contentPath = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]

const config: Config = {
  content: contentPath,
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/herobg.png')",
      },
      screens: {
        xs: '450px',
      },
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        'neon-white': '#fffffb',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
        'neon-white': '0px 0px 40px #fffffb',
      },
      keyframes: {
        'card-pulsing': {
          from: {
            boxShadow: 'none',
            color: 'rgba(#fffffb, 0.5)',
          },
          to: {
            boxShadow: '0px 0px 40px #fffffb',
            color: '#fffffb',
          },
        },
      },
      animation: {
        'card-shadow': 'card-pulsing 1.5s linear infinite alternate',
      },
    },
  },
  plugins: [],
}
export default config
