export default defineAppConfig({
    logo: '/images/logo.svg',

    // Source of truth for the public URL since core 3.2: drives canonical, og:url,
    // sitemap and RSS, and takes precedence over BASE_URL.
    url: 'https://mistral.bloggrify.com/',

    theme: 'mistral',

    // The name of the blog itself
    name: 'Bloggrify',
    avatar: '/images/avatar.jpg',
    // The description of the blog if any
    description:
        'This is the official blog of Bloggrify and it serves as a demo for the Mistral theme.',

    // SEO, centralized in app.config since core 3.2 (takes precedence over SITE_INDEXABLE).
    seo: {
        // Keep this demo out of search engines (it showcases the theme, it is not
        // meant to compete with bloggrify.com for content). Produces robots `Disallow: /`.
        indexable: false,
        ai: {
            // Publish /llms.txt, a markdown index of the posts, to showcase the feature.
            // Note: with indexable:false, robots.txt disallows every crawler anyway;
            // llms.txt is still generated and directly fetchable.
            llms: true,
        },
    },

    socials: {
        bluesky: 'https://bluesky',
        mastodon: 'https://piaille.fr',
        youtube: 'https://youtube.com',
        linkedin: 'https://linkedin.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',

        // possible values, see https://github.com/stefanobartoletti/nuxt-social-share
        sharing_networks: ['facebook', 'bluesky', 'linkedin', 'email', 'pinterest', 'reddit', 'pocket', 'whatsapp', 'telegram', 'skype']
    },
    newsletter: {
        enabled: true,
        form_action: 'YOUR_NEWSLETTER_FORM_ACTION',
        provider: 'demo',
    },

    comments: {
        enabled: true,
        provider: 'hakanai', // 'hyvor_talk' or 'hakanai'
        // hyvor_talk: {
        //     website_id: '10519', // Replace with your Hyvor Talk website ID (it won't work with this one)
        // },
        hakanai: {
            key: '14ab8e46-4872-472f-be00-f519c0eac4ae', // your Hakanai Connect key (https://connect.hakanai.io/)
        },
    },

    table_of_contents: false,

    // the list of authors
    // the default author will be used for all posts if no author is specified
    // and the mistral theme use the default author for the main page
    authors: [
        {
            username: 'hlassiege',
            name: 'Hugo',
            default: true,
            description:
                'Author and maintainer of Bloggrify',
            avatar: '/images/avatar.jpg',
            socials: {
                bluesky: 'https://bluesky',
                mastodon: 'https://piaille.fr',
                youtube: 'https://youtube.com',
                linkedin: 'https://linkedin.com',
                facebook: 'https://facebook.com',
                instagram: 'https://instagram.com',
                github: 'https://github.com',
                twitter: 'https://twitter.com',
            },
        },
    ],

    menu: [
        { name: 'Home', path: '/' },
        { name: 'Archives', path: '/archives' },
    ],
})
