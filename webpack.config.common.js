const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV;

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve("dist"),
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
    }),
    new htmlPlugin({
      template: "./public/index.html",
      // favicon: "./public/fpt.ico",
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      { test: /\.(config)$/, loader: "file-loader?name=[name].[ext]" },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            query: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-react", "@babel/preset-env"] },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|otf|ico)(\?.*)?$/,
        use: [
          {
            loader: "image-webpack-loader",
            query: {
              mozjpeg: { progressive: true },
              gifsicle: { interlaced: false },
              optipng: { optimizationLevel: 4 },
              pngquant: { quality: "65-90", speed: 4 },
            },
          },
          {
            loader: "url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    port: 3000,
    stats: "errors-only",
    open: true,
  },
  resolve: {
    extensions: [".css", ".js", ".jsx", ".scss"],
  },
};
