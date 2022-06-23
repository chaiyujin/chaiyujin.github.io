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
      title: 'Speech-Driven Facial Animation with Spectral Gathering and Temporal Attention',
      chunks: ['chunk-vendors', 'chunk-common', 'sdfa']
    },
    // personalized
    psfa: {
      entry: 'src/pages/PSFA/main.js',
      template: 'public/index.html',
      filename: 'psfa.html',  // output as dist/psfa.html
      title: 'Personalized Speech-Driven 3D Facial Animation via Style-Content Disentanglement',
      chunks: ['chunk-vendors', 'chunk-common', 'psfa']
    },
  }
}
