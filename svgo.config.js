'use strict'

module.exports = {
  multipass: true,
  js2svg: {
    pretty: true,
    indent: 2
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          convertPathData: {
            floatPrecision: 2,
          },
          removeUnknownsAndDefaults: {
            keepRoleAttr: true
          },
          removeViewBox: false,
        },
      },
    },
    'cleanupListOfValues',
    'sortAttrs',
    {
      name: 'removeAttrs',
      params: {
        attrs: [
          'clip-rule',
          'data-name',
          'fill',
          'height',
          'width'
        ]
      }
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{
          fill: 'currentColor'
        }]
      }
    }
  ]
}