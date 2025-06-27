import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/theme/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.lineicons.com/4.0/lineicons.css',
        },
        {
          rel: 'canonical',
          href: 'https://ranyeh24.github.io/inazuma-tailwind'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
          defer: true,
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js',
          defer: true,
        },
        {
          src: 'https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js',
          defer: true,
        },
        {
          src: '/js/main.js'
        }
      ]
    }
  }
})
