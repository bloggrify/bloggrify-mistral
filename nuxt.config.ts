// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: ["github:hlassiege/bloggr"],

    runtimeConfig: {
        public: {
            url: "https://bloggr.eventuallycoding.com/",
            logo: "/images/logo.png",

            theme: "default",

            // If you only have one author, you can set the author here
            // It will be used as the default author for all posts AND as the general logo/description/socials for the website
            name: "Bloggr",
            avatar: "/images/avatar.jpg",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",

            socials: {
                twitter: "https://twitter.com/username",
                mastodon: "https://piaille.fr",
                youtube: "https://youtube.com",
                linkedin: "https://linkedin.com",
                facebook: "https://facebook.com",
                instagram: "https://instagram.com",
                github: "https://github.com",
            },

            newsletter: {
                enabled: true,
                form_action: "YOUR_NEWSLETTER_FORM_ACTION",
            },

            comments: {
                enabled: true,
                hyvor_talk: {
                    website_id: process.env.HYVOR_ID
                        ? process.env.HYVOR_ID
                        : "YOUR_HYVOR_TALK_WEBSITE_ID",
                },
            },

            table_of_contents: false,

            // if you have multiple authors, you can set them here
            authors: [
                {
                    default: true,
                    username: "john-doe",
                    name: "John Doe",
                    description:
                        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
                    avatar: "/images/avatar.jpg",
                    socials: {
                        twitter: "https://twitter.com",
                        twitter_username: "username",
                        mastodon: "https://piaille.fr",
                        youtube: "https://youtube.com",
                        linkedin: "https://linkedin.com",
                        facebook: "https://facebook.com",
                        instagram: "https://instagram.com",
                        github: "https://github.com",
                    },
                },
            ],

            menu: [
                { name: "Home", path: "/" },
                { name: "Features", path: "/features" },
                { name: "Archives", path: "/archives" },
            ],
        },
    },
});
