"use strict";

const codepoints = require("./font/valkyrie.json");

module.exports = {
  inputDir: "./icons",
  outputDir: "./font",
  fontTypes: ["woff", "woff2"],
  assetTypes: ["scss", "json"],
  fontsUrl: "./fonts",
  name: "Valkyrie",
  prefix: "vi",
  selector: ".vi",
  codepoints,
  descent: 26,
  templates: {
    scss: "./build/templates/scss.hbs",
  },
  pathOptions: {
    woff: "./font/fonts/Valkyrie.woff",
    woff2: "./font/fonts/Valkyrie.woff2",
    scss: "./font/Valkyrie.scss",
    json: "./font/valkyrie.json",
  },
};
