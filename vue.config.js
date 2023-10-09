const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: "./",
  outputDir: "./docs",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/core/index.scss";`,
      },
    },
  },
});
