module.exports = {
  devServer: {
    https: true,
    port: 8080,
  },
  pages: {
    app: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      excludeChunks: ["silent-renew-oidc"],
    },
    silentrenewoidc: {
      entry: "src/silent-renew-oidc.js",
      template: "public/silent-renew-oidc.html",
      filename: "silent-renew-oidc.html",
      excludeChunks: ["app"],
    },
  },
};
