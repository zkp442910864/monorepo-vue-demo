const path = require('path');
// const fg = require('fast-glob');
// const packages = fg.sync('./src/*', {onlyDirectories: true});
// console.log(packages)
module.exports = {

    publicPath: './',
    lintOnSave: true,

    css: {
        // 是否提取css生成单独的文件 默认 true
        // extract: !isBuild,
        // extract: true,
        sourceMap: true,
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './', 'src/assets/params.less')
            ]
        }
    }

};
