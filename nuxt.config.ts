// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt', '@nuxtjs/robots'],
    routeRules: {
        '/api/anime/**': { isr: 60 * 15 },
        '/api/anime': { redirect: '/api/anime/0' },
    },
});
