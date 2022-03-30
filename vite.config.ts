import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
const config = defineConfig({
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  },
  plugins: [vue(), WindiCSS(), vueJsx(), Components({ resolvers: [NaiveUiResolver()], dts: false, dirs: [] })]
})

export default config
