module.exports = {
    inputDir: './icons',
    outputDir: './dist',
    fontTypes: ['ttf', 'woff', 'woff2', 'eot'],
    assetTypes: ['ts', 'css', 'json', 'html'],
    fontsUrl: '.',
    name: 'Valkyrie',
    prefix: 'vi',
    formatOptions: {
      woff: {
        metadata: '...'
      },
      json: {
        indent: 2
      },
      ts: {
        types: ['enum', 'constant', 'literalId', 'literalKey'],
        singleQuotes: false
      }
    },
    templates: {
      html: './templates/html.hbs'
    },
    pathOptions: {
      ts: './dist/types/Valkyrie-types.ts',
      json: './dist/Valkyrie-codepoints.json',
      eot: './dist/fonts/Valkyrie.eot',
      ttf: './dist/fonts/Valkyrie.ttf',
      woff: './dist/fonts/Valkyrie.woff',
      woff2: './dist/fonts/Valkyrie.woff2',
      css: './dist/fonts/Valkyrie.css',
      html: './docs/Valkyrie.html'
    }
  };