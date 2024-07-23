import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/PortfolioApp/' : '/',
  plugins: [
    vue(),
    vueJsx(),
    VueI18nPlugin({
      runtimeOnly: false,
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**'),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  publicDir: 'public',
});