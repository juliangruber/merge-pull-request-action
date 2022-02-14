# yaml-unist-parser

[![npm](https://img.shields.io/npm/v/yaml-unist-parser.svg)](https://www.npmjs.com/package/yaml-unist-parser)
[![build](https://img.shields.io/travis/ikatyang/yaml-unist-parser/master.svg)](https://travis-ci.com/ikatyang/yaml-unist-parser/builds)
[![coverage](https://img.shields.io/codecov/c/github/ikatyang/yaml-unist-parser/master.svg)](https://codecov.io/gh/ikatyang/yaml-unist-parser)

A YAML parser that produces output compatible with [unist](https://github.com/syntax-tree/unist)

[Changelog](https://github.com/ikatyang/yaml-unist-parser/blob/master/CHANGELOG.md)

## Features

- better node positioning
- better comment attaching
- [unist-compatible AST](https://github.com/ikatyang/yaml-unist-parser/blob/master/src/types.ts)

## Install

```sh
# using npm
npm install --save yaml-unist-parser

# using yarn
yarn add yaml-unist-parser
```

## Usage

```ts
const { parse } = require("yaml-unist-parser");

const ast = parse(`
- hello
- world
`);
```

## Development

```sh
# lint
yarn run lint

# build
yarn run build

# test
yarn run test
```

## License

MIT © [Ika](https://github.com/ikatyang)
