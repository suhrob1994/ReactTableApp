const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => {
    const NODE_ENV = env && env.NODE_ENV || 'development';
    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: "bundle_index.js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    },
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        devtool: NODE_ENV == 'development' ? 'source-map' : null,
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            })
        ],
        optimization: {
            minimizer: [
                new UglifyJsPlugin()
            ]
        }
    };
};