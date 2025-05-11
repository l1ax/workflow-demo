const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 3000,
        proxy: [
            {
                context: ['/api'],
                target: 'http://localhost:3001',
                pathRewrite: {
                    '^/api': '',
                },
            },
        ],
    },
    output: {
        publicPath: 'auto',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
}
