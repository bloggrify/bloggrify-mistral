export default defineAppConfig({
    logo: "/images/logo.svg",

    url: "https://bloggr-mistral.eventuallycoding.com/",

    theme: "mistral",

    // If you only have one author, you can set the author here
    // It will be used as the default author for all posts AND as the general logo/description/socials for the website
    name: "Bloggr",
    avatar: "/images/avatar.jpg",
    description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",

    socials: {
        twitter: "https://twitter.com",
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
            website_id: "10519", // Replace with your Hyvor Talk website ID (it won't work with this one)
        },
    },

    table_of_contents: false,

    // if you have multiple authors, you can set them here
    authors: [
        {
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

    menu: () => [
        { name: "Home", path: "/" },
        { name: "Features", path: "/features" },
        { name: "Archives", path: "/archives" },
    ],
});
