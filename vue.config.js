module.exports = {
  outputDir: "dist/src",
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // Конфигурация для сборки в продакшн
      return {
        entry: "./src/components/index.js",
        output: {
          library: "VueSoftProUI",
          libraryTarget: "umd",
          libraryExport: "default",
          umdNamedDefine: true,
        },
        plugins: [
          // Disable generation of the demo.html file
          new (class {
            apply(compiler) {
              compiler.hooks.emit.tap("RemoveDemoHtmlPlugin", (compilation) => {
                delete compilation.assets["demo.html"];
              });
            }
          })(),
        ],
      };
    } else {
      // Конфигурация для разработки
      return {
        // ...
      };
    }
  },
  css: {
    extract: false,
  },
};
