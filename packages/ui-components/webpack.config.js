const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    library: "uiComponents",
    libraryTarget: "umd",
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader?modules=true", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        type: "javascript/esm",
        use: [
          "babel-loader",
          {
            loader: "astroturf/loader",
            options: { extension: ".module.scss" },
          },
        ],
        exclude: /node_modules/,
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
