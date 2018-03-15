const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["babel-polyfill", path.join(__dirname, "../../../index.web")],
  output: {
    path: path.join(__dirname, "../"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    loaders: [
      // take all less files, compile them, and bundle them in with our js bundle
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          cacheDirectory: true,
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // Useful to reduce the size of client-side libraries, e.g. react
        NODE_ENV: JSON.stringify("production"),
        PLATFORM_ENV: JSON.stringify("web")
      }
    }),
    // optimizations
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
