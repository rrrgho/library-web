module.exports = {
    async rewrites() {
        return [
            {
                source: '/login',
                destination: '/auth/login/',
            },
            {
                source: '/books',
                destination: '/tabscreen/books/',
            },
            {
                source: '/ebooks',
                destination: '/tabscreen/ebooks/',
            },
            {
                source: '/history',
                destination: '/tabscreen/history/',
            },
            {
                source: '/account',
                destination: '/tabscreen/account/',
            },
        ]
    },
}