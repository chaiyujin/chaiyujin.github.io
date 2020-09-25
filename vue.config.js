module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pages: {
    index: {
      entry: 'src/pages/Home/main.js',
      template: 'public/index.html',
      filename: 'index.html',  // output as dist/index.html
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    about: {
      entry: 'src/pages/About/main.js',
      template: 'public/index.html',
      filename: 'about.html',  // output as dist/about.html
      title: 'About Page',
      chunks: ['chunk-vendors', 'chunk-common', 'about']
    },
    // sdfa
    sdfa: {
      entry: 'src/pages/SDFA/main.js',
      template: 'public/index.html',
      filename: 'sdfa.html',  // output as dist/sdfa.html
      title: 'Speech-driven Facial Animation',
      chunks: ['chunk-vendors', 'chunk-common', 'sdfa']
    },
  }
}
