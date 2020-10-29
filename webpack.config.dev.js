const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.config.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      "process.env.NODE_ENV": JSON.stringify("development"),
      "process.env.REACT_APP_API_URL": JSON.stringify(
        "https://demo-call-center-api.azurewebsites.net/api/"
      ),
      "process.env.REACT_APP_LOGIN_URL": JSON.stringify(
        "https://dps-spd-identity-sso-dev.azurewebsites.net/External/Challenge?provider=AzureAD&returnUrl=http%3A%2F%2Flocalhost%3A3000%2Fcallback"
      ),
    }),
  ],
});
