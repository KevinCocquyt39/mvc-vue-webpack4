/* eslint-disable */
const path = require("path");
const fs = require("fs");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const appBasePath = "./js/components/";
const jsEntries = {};

fs.readdirSync(appBasePath).forEach(name => {
    var indexFile = `${appBasePath}${name}/index.js`;
    if (fs.existsSync(indexFile)) {
        jsEntries[name] = indexFile;
    }
});

module.exports = {
    entry: jsEntries,
    output: {
        path: path.resolve(__dirname, "../dist/js/components"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: {
                        js: "babel-loader"
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [new VueLoaderPlugin()],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    devtool: "source-map"
};
