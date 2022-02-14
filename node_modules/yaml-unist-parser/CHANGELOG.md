# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.1.1"></a>
## [1.1.1](https://github.com/ikatyang/yaml-unist-parser/compare/v1.1.0...v1.1.1) (2019-10-09)


### Bug Fixes

* **deps:** update dependency `tslib` to 1.10.0 ([#227](https://github.com/ikatyang/yaml-unist-parser/issues/227)) ([6f88029](https://github.com/ikatyang/yaml-unist-parser/commit/6f88029))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/ikatyang/yaml-unist-parser/compare/v1.0.1...v1.1.0) (2019-10-08)


### Features

* update `yaml` to 1.7.1 and move it to `dependencies` ([#225](https://github.com/ikatyang/yaml-unist-parser/issues/225)) ([df6412b](https://github.com/ikatyang/yaml-unist-parser/commit/df6412b))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/ikatyang/yaml-unist-parser/compare/v1.0.0...v1.0.1) (2019-10-08)


### Chores

* `yaml@1.2.0+` is not supported in `yaml-unist-parser@1.0.x` ([207589e](https://github.com/ikatyang/yaml-unist-parser/commit/207589e))


<a name="1.0.0"></a>
# [1.0.0](https://github.com/ikatyang/yaml-unist-parser/compare/v1.0.0-rc.4...v1.0.0) (2018-11-15)


### Bug Fixes

* support CRLF ([f3801ca](https://github.com/ikatyang/yaml-unist-parser/commit/f3801ca))
* suppress offset errors ([470916c](https://github.com/ikatyang/yaml-unist-parser/commit/470916c))


### Chores

* upgrade yaml to v1 ([4830974](https://github.com/ikatyang/yaml-unist-parser/commit/4830974))


### BREAKING CHANGES

* require `yaml@^1.0.2`



<a name="1.0.0-rc.4"></a>
# [1.0.0-rc.4](https://github.com/ikatyang/yaml-unist-parser/compare/v1.0.0-rc.3...v1.0.0-rc.4) (2018-08-30)


### Bug Fixes

* enable merge (`<<`) parsing so that multiple `<<` won't be marked as duplicate keys ([#74](https://github.com/ikatyang/yaml-unist-parser/issues/74)) ([7a5b482](https://github.com/ikatyang/yaml-unist-parser/commit/7a5b482))


### Features

- transform AST from `yaml` AST+CST ([#82](https://github.com/ikatyang/yaml-unist-parser/issues/82)) ([2045635](https://github.com/ikatyang/yaml-unist-parser/commit/2045635))
  - `mappingKey` and `mappingValue` are now always presented in [`mappingItem`](https://github.com/ikatyang/yaml-unist-parser/blob/284fdf8d04aec5e58e186254056ec33357eebd10/src/types.ts#L173-L176)
  - `comment`s aren't presented in `children` anymore (moved to `*Comments?` fields)
  - attach `trailingComment` on `document` (`... #comment`)
  - attach `trailingComment` on `documentHead` (`--- #comment`)
  - `comment` between `blockValue` indicator and its value is now placed in [`indicatorComment`](https://github.com/ikatyang/yaml-unist-parser/blob/284fdf8d04aec5e58e186254056ec33357eebd10/src/types.ts#L143)

### BREAKING CHANGES

- remove some unnecessary `leadingComments`/`trailingComments` fields
- rename `trailingComments` with [`trailingComment`](https://github.com/ikatyang/yaml-unist-parser/blob/284fdf8d04aec5e58e186254056ec33357eebd10/src/types.ts#L48-L51) as it's only possible to be 0 or 1
- replace `shorthandTag`/`verbatimTag`/`nonSpecificTag` with [`tag`](https://github.com/ikatyang/yaml-unist-parser/blob/284fdf8d04aec5e58e186254056ec33357eebd10/src/types.ts#L101-L103)



<a name="1.0.0-rc.3"></a>
# [1.0.0-rc.3](https://github.com/ikatyang/yaml-unist-parser/compare/v1.0.0-rc.2...v1.0.0-rc.3) (2018-07-31)


### Bug Fixes

* **attach:** end comments in nested mapping ([#70](https://github.com/ikatyang/yaml-unist-parser/issues/70)) ([efc71fa](https://github.com/ikatyang/yaml-unist-parser/commit/efc71fa))



<a name="1.0.0-rc.2"></a>
# [1.0.0-rc.2](https://github.com/ikatyang/yaml-unist-parser/compare/v1.0.0-rc.1...v1.0.0-rc.2) (2018-07-17)


### Bug Fixes

* **attach:** no crash at mappingKey with null and comment ([#55](https://github.com/ikatyang/yaml-unist-parser/issues/55)) ([df3face](https://github.com/ikatyang/yaml-unist-parser/commit/df3face))
* **peerDeps:** require yaml@^1.0.0-rc.7 ([#61](https://github.com/ikatyang/yaml-unist-parser/issues/61)) ([6532413](https://github.com/ikatyang/yaml-unist-parser/commit/6532413))


### Features

* attach end comments ([#60](https://github.com/ikatyang/yaml-unist-parser/issues/60)) ([9a29f4a](https://github.com/ikatyang/yaml-unist-parser/commit/9a29f4a))
