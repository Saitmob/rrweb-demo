/*
 * @Description: 
 * @Author: qxp
 * @Date: 2021-05-06 14:56:46
 * @LastEditors: qxp
 * @LastEditTime: 2021-05-07 15:09:44
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `css/[name].css`,
            chunkFilename: `css/[name].chunk.css`   // chunk css file
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html', // 最终创建的文件名
            template: path.join(__dirname, 'src/template.html') // 指定模板路径
        }),
        new HtmlWebpackPlugin({
            filename: '404.html', // 最终创建的文件名
            template: path.join(__dirname, 'src/template.html') // 指定模板路径
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        // inline: true,
        historyApiFallback: {       // browserHistory路由
            index: '/'
        },
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.less', '.scss', '.sass'],
        alias: {
            '@': path.resolve('src'),
            Components: path.resolve(__dirname, 'src/components/'),
            Config: path.resolve(__dirname, 'src/config/'),
            Constants: path.resolve(__dirname, 'src/constants/'),
            Pages: path.resolve(__dirname, 'src/pages/'),
            Fonts: path.resolve(__dirname, 'src/fonts/'),
            Images: path.resolve(__dirname, 'src/images/'),
            Layouts: path.resolve(__dirname, 'src/layouts/'),
            Routes: path.resolve(__dirname, 'src/routes/'),
            Services: path.resolve(__dirname, 'src/services/'),
            Styles: path.resolve(__dirname, 'src/styles/'),
            Utils: path.resolve(__dirname, 'src/utils/')
        }
    },
    module: {
        rules: [
            {
                /**
                 * 主项目js
                 */
                test: /\.(js|jsx)?$/,
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }]
            },
            {
                /**
                 * less
                 */
                test: /\.(css|less)?$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                /**
                 * 第三方css
                 */
                test: /\.(css|less|scss|sass)$/,
                include: path.resolve(__dirname, 'node_modules'),
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options:{
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
        ]
    }
};