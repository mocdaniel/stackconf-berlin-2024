// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-main': 'bg-white text-[#181818] dark:bg-[#121212] dark:text-[#ddd]',
  },
  theme: {
    colors: {
      'primary': '#002b3f',
      'secondary': '#1c42da',
      'accent': '#ff00ff',
      'less-accent': '#692ae0',
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
