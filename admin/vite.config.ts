import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import usePluginImport from 'vite-plugin-importer';
import ViteComponents, {
  AntDesignVueResolver
} from 'vite-plugin-components/dist';

// https://vitejs.dev/config/
export default defineConfig({
  // 支持 less 样式
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    // vite 支持 vue 单页面
    vue(),
    usePluginImport({
      libraryName: 'ant-design-vue',
      libraryDirectory: 'es',
      style: true
    }),
    // ant-design-vue 按需导入
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()]
    })
  ]
});
