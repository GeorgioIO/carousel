import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

export default {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|avif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets", to: "images" }],
    }),
  ],
  output: {
    path: path.resolve("dist"),
    clean: true,
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js"],
  },
};
