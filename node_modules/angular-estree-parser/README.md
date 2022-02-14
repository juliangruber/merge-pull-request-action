# angular-estree-parser

[![npm](https://img.shields.io/npm/v/angular-estree-parser.svg)](https://www.npmjs.com/package/angular-estree-parser)
[![build](https://img.shields.io/travis/com/ikatyang/angular-estree-parser/master.svg)](https://travis-ci.com/ikatyang/angular-estree-parser/builds)
[![coverage](https://img.shields.io/codecov/c/github/ikatyang/angular-estree-parser/master.svg)](https://codecov.io/gh/ikatyang/angular-estree-parser)

A parser that converts Angular source code into an ESTree-compatible form

[Changelog](https://github.com/ikatyang/angular-estree-parser/blob/master/CHANGELOG.md)

## Install

```sh
# using npm
npm install --save angular-estree-parser @angular/compiler

# using yarn
yarn add angular-estree-parser @angular/compiler
```

## Usage

```js
const ngEstreeParser = require('angular-estree-parser');

const ast = ngEstreeParser.parseBinding('a | b:c');
//=> { type: "NGPipeExpression", ... }
```

## API

- `parseAction(input: string): AST` for `(target)="input"`
- `parseBinding(input: string): AST` for `[target]="input"`
- `parseInterpolation(input: string): AST` for `{{input}}`
- `parseTemplateBindings(input: string): AST` for `*directive="input"`

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
