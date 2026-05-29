// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },

    css: ["~/assets/css/main.css"],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    app: {
        head: {
            script: [
                {
                    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1156318250534352",
                    crossorigin: "anonymous",
                },
            ],
        },
    },
});
