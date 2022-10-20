const codepoints = require("./dist/fonts/valkyrie.json");

module.exports = {
  inputDir: "./icons",
  outputDir: "./dist",
  fontTypes: ["ttf", "woff", "woff2", "eot"],
  assetTypes: ["css", "scss", "html", "json"],
  fontsUrl: ".",
  name: "Valkyrie",
  prefix: "vi",
  selector: ".vi",
  codepoints,
  descent: 26,
  templates: {
    html: "./templates/html.hbs",
    css: "./templates/css.hbs",
    scss: "./templates/css.hbs",
  },
  pathOptions: {
    eot: "./dist/fonts/Valkyrie.eot",
    ttf: "./dist/fonts/Valkyrie.ttf",
    woff: "./dist/fonts/Valkyrie.woff",
    woff2: "./dist/fonts/Valkyrie.woff2",
    css: "./dist/fonts/Valkyrie.css",
    scss: "./dist/fonts/Valkyrie.scss",
    html: "./docs/index.html",
    json: "./dist/fonts/valkyrie.json",
  },
};
