module.exports = {
  outputDir: 'dist',
  configureWebpack: {
    entry: './src/components/index.js',
    output: {
      library: 'VueSoftProUI',
      libraryTarget: 'umd',
      libraryExport: 'default',
      umdNamedDefine: true,
    },
  },
  css: {
    extract: false,
  },
};
