module.exports = {
    plugins: [
        require('postcss-normalize')({
            browsers: [
                "last 2 versions",
            ]
        }),
        require('autoprefixer')({
            browsers: [
                "last 2 versions",
            ]
        }),
        require('cssnano')({
            preset: 'default'
        })
    ],
}

