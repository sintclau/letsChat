module.exports = {
    resolve: {
        fallback: {
            "assert": require.resolve("assert/"),
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util/"),
            "crypto": require.resolve("crypto-browserify"),
            "url": require.resolve("url/"),
            "querystring": require.resolve("querystring-es3"),
            "https": require.resolve("https-browserify")
        },
    },
};