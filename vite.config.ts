import { defineConfig, UserConfigExport } from 'vite'

import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config: UserConfigExport = {
    resolve: {
      alias: { '@': path.resolve(__dirname, 'src') }
    },
    plugins: [vue(), WindiCSS(), vueJsx(), Components({ resolvers: [NaiveUiResolver()], dts: false, dirs: [] })]
  }
  if (mode === 'development') {
    config.server = {
      proxy: {
        '/api': 'https://www.freetogame.com/api'
      }
    }
  }
  return config
})
