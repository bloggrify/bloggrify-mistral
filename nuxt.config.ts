// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            script: [
                ...(process.env.PIRSCH_CODE
                    ? [
                        {
                            src: "https://api.pirsch.io/pirsch.js",
                            id: "pirschjs",
                            defer: true,
                            "data-code": process.env.PIRSCH_CODE,
                            type: "text/javascript",
                        },
                    ]
                    : []),
            ],
        },
    },

    extends: ["github:hlassiege/bloggr#1.0.0"],

    assets: ["~/assets/css/mistral.scss"],
});
