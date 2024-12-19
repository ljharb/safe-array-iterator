# safe-array-iterator <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Get an iterator for an array that's robust against prototype modification.

## Getting started

```sh
npm install --save safe-array-iterator
```

## Usage/Examples

```js
var safeArrayIterator = require('safe-array-iterator');
var assert = require('assert');

delete Array.prototype[Symbol.iterator];

const arr = [1, 2, 3];
const results = [];
for (const x of safeArrayIterator(arr)) {
    results.push(x);
}

assert.deepEqual(results, arr);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/safe-array-iterator
[npm-version-svg]: https://versionbadg.es/ljharb/safe-array-iterator.svg
[deps-svg]: https://david-dm.org/ljharb/safe-array-iterator.svg
[deps-url]: https://david-dm.org/ljharb/safe-array-iterator
[dev-deps-svg]: https://david-dm.org/ljharb/safe-array-iterator/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/safe-array-iterator#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/safe-array-iterator.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/safe-array-iterator.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/safe-array-iterator.svg
[downloads-url]: https://npm-stat.com/charts.html?package=safe-array-iterator
[codecov-image]: https://codecov.io/gh/ljharb/safe-array-iterator/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/safe-array-iterator/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/safe-array-iterator
[actions-url]: https://github.com/ljharb/safe-array-iterator/actions
