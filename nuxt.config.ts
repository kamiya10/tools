

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    '@primevue/nuxt-module',
    "nuxt-monaco-editor",
  ],

  app: {
    head: {
      bodyAttrs: {
        class: "dark"
      },
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
        },
      ],
    },
  },

  css: [
    "assets/css/global.css",
  ],

  i18n: {
    vueI18n: "@/i18n.config.ts",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale',
    },
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
      },
      {
        code: "ja",
        iso: "ja-JP",
        name: "日本語",
      },
      {
        code: "tw",
        iso: "zh-TW",
        name: "繁體中文",
      },
    ],
  },

  primevue: {
    options: {
      unstyled: true,
      ripple: true,
    },
    importPT: {
      from: "@/presets/aura",
      as: "Aura",
    },
  },

  robots: {
    groups: [
      { userAgent: ["*"] }
    ],
    sitemap: "https://kamiya.app/sitemap.xml",
  },

  site: {
    url: 'https://kamiya.app',
  },

  compatibilityDate: "2024-09-25",
});