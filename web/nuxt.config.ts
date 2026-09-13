export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Poltrea Assets — Low Poly Assets for Stylized Worlds',
      meta: [
        { name: 'description', content: 'Stylized low-poly environment assets and terrain textures crafted for Unity.' },
        { property: 'og:title', content: 'Poltrea Assets' },
        { property: 'og:description', content: 'Low Poly Assets for Stylized Worlds.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
})
