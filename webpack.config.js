const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        //path: __dirname+'/dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                        /*exclude: [path.resolve(__dirname, 'node_modules')]*/
                        /*options: {
                            presets: ['env'],
                            plugins: ['transform-object-rest-spread']
                        }*/
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)/,
                use: [{
                  loader: 'url-loader',
                  options: {
                    limit: 10000
                  }
                }]
            },
            {
                test: /\.(ttf|eot|otf|svg|woff|woff2)$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        open: true,
        port: 9999
    }
}
