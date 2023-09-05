#!/usr/bin/env node

'use strict'

const fs = require('fs').promises
const path = require('path')
const picocolors = require('picocolors')

const version = require('../package.json').version

const iconsDir = path.join(__dirname, '../icons/')
const pagesDir = path.join(__dirname, '../docs/src/data/')

const VERBOSE = process.argv.includes('--verbose')

function getReactImportName(string) {
  return `vi${string
    .split("-")
    .map(word => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join("")}`
}

async function main(file) {
  const iconBasename = path.basename(file, path.extname(file))
  const iconTitle = getReactImportName(iconBasename)

  const iconList = `${iconTitle}`;
  const jsonTemplate = `
  {
    component: '${iconTitle}',
    slug: '${iconBasename}',
    icon: ${iconTitle}
  }`

  return [iconList, jsonTemplate];
}

(async () => {
  try {
    const timeLabel = picocolors.cyan(`Page generation finished`)

    console.log(picocolors.cyan(`Page generation started`))
    console.time(timeLabel)

    const files = await fs.readdir(iconsDir);

    const names = [];
    const configs = [];

    await Promise.all(files.map(async file => {
      const [name, config] = await Promise.resolve(main(file));

      names.push(name);
      configs.push(config);
    }))

    const template = `
import { ${names.map((icon) => `${icon}`)} } from '@sippy-platform/valkyrie';

const icons = [${configs.map((page) => `${page}`)}
];

export default icons;`

    await fs.writeFile(path.join(pagesDir, `icons.ts`), template)

    const filesLength = files.length

    console.log(picocolors.green('\nSuccess, %s icon%s written to library!'), filesLength, filesLength !== 1 ? 's' : '')
    console.timeEnd(timeLabel)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()
