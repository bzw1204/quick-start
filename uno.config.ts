import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  presets: [
    presetRemToPx({ baseFontSize: 4 }),
    presetAttributify(),
    presetUno(),
    presetIcons({
      collections: {
        local: FileSystemIconLoader('src/assets/icons')
      }
    })
  ],
  rules: [
    [/^wh-(\d+)$/, ([,d]) => ({ width: `${d}px`, height: `${d}px` })],
    ['drag', { '-webkit-app-region': 'drag' }],
    ['no-drag', { '-webkit-app-region': 'no-drag' }]
  ],
  shortcuts: [
    { 'wh-screen': 'w-screen h-screen overflow-hidden' },
    { 'wh-full': 'w-full h-full' },
    { 'h-content': 'h-[calc(100vh-40px)] max-h-[calc(100vh-40px)]' },
    { window__control: 'w-34 h-26 min-w-34 min-h26 flex justify-center items-center hover:cursor-pointer' }
  ]
})
