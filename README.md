# saros

CLI tool to count lines and other file statistics.

![Node.js CI](https://github.com/dotvirus/saros/workflows/Node.js%20CI/badge.svg?branch=dev)
[![npm version](https://badge.fury.io/js/saros.svg)](https://badge.fury.io/js/saros)
[![codecov](https://codecov.io/gh/dotvirus/saros/branch/dev/graph/badge.svg?token=MLUATJvwJo)](https://codecov.io/gh/dotvirus/saros)

## Install

```
npm i -g saros
```

## Run CLI

```
saros --help
```

### CLI example to get file statistics within the current directory (and subfolders), but ignoring `node_modules`

```
saros . -R -D -I node_modules
```

## Progammatic usage count

### countFiles()

Count all *.js files recursively, ignoring `node_modules` and return a sum per extension

```javascript
const saros = require("saros");

saros
  .countFiles({
    recursive: true,
    path: ".",
    ignore: ["node_modules"],
    extensions: [".js"],
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Example output:
// {
//   timeMs: 5,
//   numFiles: 1,
//   numFilesPerExtension: {
//     .js: 1
//   }
// }
```

### getStats()

Count all *.js files recursively, ignoring `node_modules` but also include more detailed stats

```javascript
const saros = require("saros");

saros
  .getStats({
    recursive: true,
    path: ".",
    ignore: ["node_modules"],
    extensions: [".js"],
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Example output:
// {
//   timeMs: 7,
//   numFiles: 1,
//   numLines: 14,
//   numUsedLines: 13,
//   numBlankLines: 1,
//   percentUsed: 0.9285714285714286,
//   percentBlank: 0.07142857142857142,
//   numFilesPerExtension: {
//     .js: 1
//   },
//   numLinesPerExtension: {
//     .js: 14
//   }
// }
```

## Prebuilt binaries

Use one of the binaries from the releases page.

## Build from scratch

```
npm run build
```

Will build a binary for your system and place it in `release` folder.

## Test changes

```
npm run lint
npm test
```
