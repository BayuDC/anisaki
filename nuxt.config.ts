// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt'],
    routeRules: {
        '/api/anime': { isr: 60 * 30 },
    },
});
