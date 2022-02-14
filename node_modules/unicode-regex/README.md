# unicode-regex

[![npm](https://img.shields.io/npm/v/unicode-regex.svg)](https://www.npmjs.com/package/unicode-regex)
[![build](https://img.shields.io/travis/ikatyang/unicode-regex/master.svg)](https://travis-ci.org/ikatyang/unicode-regex/builds)
[![coverage](https://img.shields.io/codecov/c/github/ikatyang/unicode-regex/master.svg)](https://codecov.io/gh/ikatyang/unicode-regex)

regular expression for matching unicode category.

[Changelog](https://github.com/ikatyang/unicode-regex/blob/master/CHANGELOG.md)

## Install

```sh
# using npm
npm install --save unicode-regex

# using yarn
yarn add unicode-regex
```

## Usage

```js
const unicode = require('unicode-regex');

const regex = unicode({ General_Category: ['Punctuation'] }).toRegExp();
regex.test('a'); //=> false
regex.test('"'); //=> true
regex.test('“'); //=> true
```

## API

```ts
declare function unicode(categories: {
  [category: string]: SubCategory[];
}): Charset;
```

Returns a [Charset](https://github.com/ikatyang/regexp-util#charset) for further processing, e.g. union, intersect, etc.

(Data from [`node-unicode-data`](https://github.com/mathiasbynens/node-unicode-data))

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
