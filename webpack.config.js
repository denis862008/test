// const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    watch: NODE_ENV === 'development',
    devServer: {
        // host: 'localhost',
        hot: true,
        inline: true,
        port: 3000,
        contentBase: './public',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader/webpack',
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react', 'stage-0'],
                            plugins: ['transform-decorators-legacy']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin()
    // ],
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
};
