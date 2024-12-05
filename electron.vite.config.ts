import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  main: {
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src-electron/index.ts'),
          test: resolve(__dirname, 'src-electron/worker/test.ts')
        },
        output: {
          format: 'es'
        }
      },
      minify: 'terser'
    },
    resolve: {
      alias: {
        '@': resolve('src-electron/')
      }
    },
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src-electron/preload/index.ts')
        }
      },
      minify: 'terser'
    },
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    server: {
      port: 888
    },
    root: '.',
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'index.html')
        }
      },
      minify: 'terser'
    },
    resolve: {
      alias: {
        '@': resolve('src/')
      }
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: tag => ['title-bar'].includes(tag)
          }
        }
      }),
      VueJsx(),
      UnoCSS(),
      VueSetupExtend(),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'pinia',
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar', 'useModal']
          }
        ],
        dirs: ['src/store'],
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
        dts: 'src/types/auto-imports.d.ts'
      }),
      Components({
        dts: 'src/types/components.d.ts',
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          NaiveUiResolver()
          // XNaiveUIResolver()
        ]
      })
    ]
  }
})
