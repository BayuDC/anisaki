// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
    googleFonts: {
        families: {
            Inter: [400, 700, 800],
        },
    },
});
