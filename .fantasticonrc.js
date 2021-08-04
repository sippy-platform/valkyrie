module.exports = {
    inputDir: './icons',
    outputDir: './dist',
    fontTypes: ['ttf', 'woff', 'woff2', 'eot'],
    assetTypes: ['css', 'html'],
    fontsUrl: '.',
    name: 'Valkyrie',
    prefix: 'vi',
    normalize: true,
    descent: 35,
    templates: {
      html: './templates/html.hbs'
    },
    pathOptions: {
      eot: './dist/fonts/Valkyrie.eot',
      ttf: './dist/fonts/Valkyrie.ttf',
      woff: './dist/fonts/Valkyrie.woff',
      woff2: './dist/fonts/Valkyrie.woff2',
      css: './dist/fonts/Valkyrie.css',
      html: './docs/Valkyrie.html'
    }
  };