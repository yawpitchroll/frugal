module.exports = {
    plugins: [
        require('postcss-normalize')({
            overrideBrowserslist: [
                "last 2 versions",
            ]
        }),
        require('autoprefixer')({
            overrideBrowserslist: [
                "last 2 versions",
            ]
        }),
        require('cssnano')({
            preset: 'default'
        })
    ],
}

