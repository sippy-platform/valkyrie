"use strict";

const codepoints = require("./font/valkyrie.json");

module.exports = {
  inputDir: "./icons",
  outputDir: "./font",
  fontTypes: ["woff", "woff2"],
  assetTypes: ["scss", "html", "json"],
  fontsUrl: "./fonts",
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
    eot: "./font/fonts/Valkyrie.eot",
    ttf: "./font/fonts/Valkyrie.ttf",
    woff: "./font/fonts/Valkyrie.woff",
    woff2: "./font/fonts/Valkyrie.woff2",
    css: "./font/Valkyrie.css",
    scss: "./font/Valkyrie.scss",
    html: "./dl/index.html",
    json: "./font/valkyrie.json",
  },
};
