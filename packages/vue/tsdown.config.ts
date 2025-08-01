import { defineConfig } from 'tsdown'
import Vue from 'unplugin-vue/rolldown'

export default defineConfig({
  entry: ['./src/index.ts'],
  platform: 'neutral',
  fromVite: true,
  dts: {
    vue: true,
  },
  plugins: [Vue()],
})
