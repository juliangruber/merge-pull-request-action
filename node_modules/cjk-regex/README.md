# cjk-regex

[![npm](https://img.shields.io/npm/v/cjk-regex.svg)](https://www.npmjs.com/package/cjk-regex)
[![build](https://img.shields.io/travis/ikatyang/cjk-regex/master.svg)](https://travis-ci.org/ikatyang/cjk-regex/builds)
[![coverage](https://img.shields.io/codecov/c/github/ikatyang/cjk-regex/master.svg)](https://codecov.io/gh/ikatyang/cjk-regex)

regular expression for matching CJK text

[Changelog](https://github.com/ikatyang/cjk-regex/blob/master/CHANGELOG.md)

## Install

```sh
# using npm
npm install --save cjk-regex

# using yarn
yarn add cjk-regex
```

## Usage

```js
const cjk = require("cjk-regex");

const cjk_charset = cjk();
cjk_charset.toRegExp().test("a"); //=> false
cjk_charset.toRegExp().test("。"); //=> true
cjk_charset.toRegExp().test("中"); //=> true

const cjk_letter_charset = cjk.letters();
cjk_letter_charset.toRegExp().test("a"); //=> false
cjk_letter_charset.toRegExp().test("。"); //=> false
cjk_letter_charset.toRegExp().test("中"); //=> true

const cjk_punctuaion_charset = cjk.punctuations();
cjk_punctuaion_charset.toRegExp().test("a"); //=> false
cjk_punctuaion_charset.toRegExp().test("。"); //=> true
cjk_punctuaion_charset.toRegExp().test("中"); //=> false
```

Returns a [Charset](https://github.com/ikatyang/regexp-util#charset).

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
