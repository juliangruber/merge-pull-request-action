# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.0"></a>
# [2.0.0](https://github.com/ikatyang/unicode-regex/compare/v1.0.1...v2.0.0) (2018-02-09)


### Features

* rewrite with `node-unicode-data` and `regexp-util` ([#57](https://github.com/ikatyang/unicode-regex/issues/57)) ([c26d703](https://github.com/ikatyang/unicode-regex/commit/c26d703))


### BREAKING CHANGES

More categories, processable output, and adding codepoints that's greater than `0xffff`.

```js
// before
unicode_regex(['Pc', 'Pd', 'Pe', 'Pf', 'Pi', 'Po', 'Ps']);

// after
unicode({ General_Category: ['Punctuation'] }).toRegExp();
```



<a name="1.0.1"></a>
## [1.0.1](https://github.com/ikatyang/unicode-regex/compare/v1.0.0...v1.0.1) (2017-11-12)


### Bug Fixes

* no invalid pattern ([#1](https://github.com/ikatyang/unicode-regex/issues/1)) ([fcc7caa](https://github.com/ikatyang/unicode-regex/commit/fcc7caa))



<a name="1.0.0"></a>
# 1.0.0 (2017-11-12)


### Features

* initial implementation ([3b18748](https://github.com/ikatyang/unicode-regex/commit/3b18748))
