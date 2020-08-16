const path = require("path");
const common = require('./webpack.common');
const merge = require('webpack-merge');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = merge(common, {
    devtool: "none",                            // avoid eval statements
    mode: "development",
    plugins: [new ExtractCssChunks()],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [ExtractCssChunks.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif|ttf|woff2|woff|eot)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext]",
                            context: path.resolve(__dirname, "src/"),
                            outputPath: ".",
                            publicPath: ".",
                            useRelativePaths: true
                        }
                    },
                    // {
                    //     loader: 'image-webpack-loader',
                    //     options: {
                    //         bypassOnDebug: true, // webpack@1.x
                    //         disable: true, // webpack@2.x and newer
                    //     },
                    // }
                ]
            }
        ],
    }
});