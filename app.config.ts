export default defineAppConfig({
    logo: '/images/logo.svg',

    url: 'https://mistral.bloggrify.com/',

    theme: 'mistral',

    // The name of the blog itself
    name: 'Bloggrify',
    avatar: '/images/avatar.jpg',
    // The description of the blog if any
    description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',

    socials: {
        twitter: 'https://twitter.com',
        mastodon: 'https://piaille.fr',
        youtube: 'https://youtube.com',
        linkedin: 'https://linkedin.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',
    },

    newsletter: {
        enabled: true,
        form_action: 'YOUR_NEWSLETTER_FORM_ACTION',
        provider: 'demo',
    },

    comments: {
        enabled: true,
        hyvor_talk: {
            website_id: '10519', // Replace with your Hyvor Talk website ID (it won't work with this one)
        },
    },

    table_of_contents: false,

    // the list of authors
    // the default author will be used for all posts if no author is specified
    // and the mistral theme use the default author for the main page
    authors: [
        {
            username: 'john-doe',
            name: 'John Doe',
            default: true,
            description:
                'lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            avatar: '/images/avatar.jpg',
            socials: {
                twitter: 'https://twitter.com',
                twitter_username: 'username',
                mastodon: 'https://piaille.fr',
                youtube: 'https://youtube.com',
                linkedin: 'https://linkedin.com',
                facebook: 'https://facebook.com',
                instagram: 'https://instagram.com',
                github: 'https://github.com',
            },
        },
    ],

    menu: () => [
        { name: 'Home', path: '/' },
        { name: 'Features', path: '/features' },
        { name: 'Archives', path: '/archives' },
    ],
})
