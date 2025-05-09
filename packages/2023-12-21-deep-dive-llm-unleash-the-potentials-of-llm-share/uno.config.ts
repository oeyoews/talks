import { defineConfig, presetAttributify, presetIcons, presetWind3 } from 'unocss'

export default defineConfig({
  shortcuts: [
  ],
  safelist: [
    ...Array.from({ length: 10 }, (_, i) => `delay-${(i + 1) * 100}`),
  ],
  presets: [
    presetWind3({
      dark: 'class',
    }),
    presetAttributify(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      warn: true,
    }),
  ],
})
