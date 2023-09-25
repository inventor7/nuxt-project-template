// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  //modules
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-icon",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@ant-design-vue/nuxt",
    "@nuxtjs/color-mode",
  ],

  //options
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },

  antd: {
    imports: [],
  },

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
    locales: ["en", "fr"], // used in URL path prefix
    defaultLocale: "en", // default locale of your project for Nuxt pages and routings
  },
});
