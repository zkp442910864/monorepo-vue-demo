const path = require('path');

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
            preProcessor: 'scss',
            patterns: [
                'E:\\demo\\mono-repo\\packages\\vue-pack5\\src\\assets\\params.less'
            ]
        }
    }

};
