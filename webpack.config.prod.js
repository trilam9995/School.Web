const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.config.common");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      "process.env.NODE_ENV": JSON.stringify("production"),
      "process.env.REACT_APP_API_URL": JSON.stringify(
        "https://demo-call-center-api.azurewebsites.net/api/"
      ),
      "process.env.REACT_APP_LOGIN_URL": JSON.stringify(
        "https://dps-spd-identity-sso-dev.azurewebsites.net/External/Challenge?provider=AzureAD&returnUrl=http%3A%2Fdemo-call-center-web.azurewebsites.net%2Fcallback"
      ),
    }),
  ],
});
