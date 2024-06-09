import {
  defineConfig,
  presetUno,
  presetIcons,
  presetWebFonts,
  presetTypography,
} from 'unocss'
import { THEME } from './lib/constants'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        montserrat: [
          {
            name: 'Montserrat',
            weights: [700, 800, 900],
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
        merriweather: [
          {
            name: 'Merriweather',
            weights: [400, 700],
          },
          {
            name: 'serif',
            provider: 'none',
          },
        ],
      },
    }),
    presetTypography(),
  ],
  theme: {
    colors: {
      brand: {
        1: 'var(--brand-1)',
        2: 'var(--brand-2)',
      },
    },
  },
  // https://unocss.dev/guide/extracting#safelist
  safelist: [
    ...Object.values(THEME).map(
      (theme) => `from-${theme.brand2}`
    ),
    ...Object.values(THEME).map(
      (theme) => `to-${theme.brand1}`
    ),
    'from-brand-2',
    'to-brand-1',
  ],
  rules: [
    [
      'animate-scale',
      {
        animation: 'scaleOut 1s linear 1',
      },
    ],
    ['h-2full', { height: 'max(200vh, 200vw)' }],
    ['w-2full', { width: 'max(200vh, 200vw)' }],
  ],
  transformers: [transformerDirectives()],
})
