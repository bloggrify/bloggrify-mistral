export default defineAppConfig({
    theme: 'mistral',

    comments: {
        enabled: true,
        hyvor_talk: {
            website_id: '10519', // Replace with your Hyvor Talk website ID (it won't work with this one)
        },
    },

    authors: [
        {
            name: 'John Doe',
            default: true,
        },
    ],
})
