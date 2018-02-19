// const path = require('path');
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
        inline: true,
        // hot: true,
        contentBase: __dirname + '/public',
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
                            presets: ['@babel/preset-env'],
                            plugins: ['transform-decorators-legacy']
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
        // alias: {
        //     framework: path.resolve('./src/framework'),
        //     constants: path.resolve('./src/constants'),
        //     components: path.resolve('./src/components'),
        //     modules: path.resolve('./src/modules'),
        //     reducers: path.resolve('./src/reducers'),
        //     actions: path.resolve('./src/actions')
        // }
    }
};
