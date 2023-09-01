import { fileURLToPath, URL } from 'node:url';
import * as path from 'path'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Jsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import UnpluginSvgComponent from 'unplugin-svg-component/vite'
import {
  HeadlessUiResolver,
  VueUseComponentsResolver,
  VueUseDirectiveResolver,
} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: any) => tag.startsWith('lottie'),
        },
      },
      script: {
        propsDestructure: true,
        defineModel: true,
      },
    }),
    Jsx(),
    Components({
      dirs: ['src/components'],
      resolvers: [
        HeadlessUiResolver(),
        VueUseComponentsResolver(),
        VueUseDirectiveResolver(),
      ],
    }),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'pinia'],
    }),
    UnpluginSvgComponent({
      iconDir: path.resolve(__dirname, 'src/assets/svg/icon'),
      // 预设颜色的icon
      preserveColor: path.resolve(__dirname, 'src/assets/svg/common'),
      dts: true,
      dtsDir: path.resolve(__dirname, './'),
      scanGlob: [path.resolve(__dirname, 'src/assets/svg')],
      symbolIdFormatter: (svgName: string, prefix: string): string => {
        const nameArr = svgName.split('/')
        if (prefix) nameArr.unshift(prefix)
        return nameArr.join('-').replace(/\.svg$/, '')
      },
      optimizeOptions: undefined,
      vueVersion: 3,
      scanStrategy: 'component',
      treeShaking: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
