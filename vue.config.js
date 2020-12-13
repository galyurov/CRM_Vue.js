module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].minify = false
                return args
            })
    },
    filenameHashing: false,
    productionSourceMap: false
}
