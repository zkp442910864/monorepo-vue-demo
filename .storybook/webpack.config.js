const path = require('path');

module.exports = (storybookBaseConfig, configType) => {

    storybookBaseConfig.config.module.rules.push({
        test: /\.less$/,
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
            {
                loader: 'less-loader',
                options: {javascriptEnabled: true},
            },
        ],
        include: path.resolve(__dirname, '../')
    });

    return storybookBaseConfig.config;

};
