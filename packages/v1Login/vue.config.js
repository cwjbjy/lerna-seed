module.exports = {
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    assetsDir: 'static',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "./src/assets/scss/index.scss";`
            }
        }
    }
}