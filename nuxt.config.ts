import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export default defineNuxtConfig({
  css: ["@/assets/main.scss"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  buildModules: [
    '@pinia/nuxt',
  ],
  modules: [
    '@nuxtjs/dayjs'
  ],
  runtimeConfig: {
    public: {
    }
  },
  vite: {
    plugins: [
      // eslintPlugin(),
      Components({
        // add option {resolveIcons: true} as parameter for resolving problem with icons
        resolvers: [AntDesignVueResolver({resolveIcons: true})],
      }),
    ],
    css: {
      devSourcemap: true
    },
    ssr: {
      noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue','@ant-design/icons-vue'],
    },
  },
})
