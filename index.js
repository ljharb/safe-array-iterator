'use strict';

var GetIntrinsic = require('get-intrinsic');

var $freeze = GetIntrinsic('%Object.freeze%', true);
var $iterator = GetIntrinsic('%Symbol.iterator%', true);

/** @type {import('.')} */
module.exports = function safeArrayIterator(array) {
	var i = -1;
	/** @type {import('.').SafeArrayIterator<typeof array[number]>} */
	var iterator = {
		__proto__: null,
		next: function () {
			i += 1;
			// eslint-disable-next-line no-extra-parens
			return /** @type {import('.').SafeIteratorResult<typeof array[number]>} */ ({
				__proto__: null,
				done: i >= array.length,
				value: array[i]
			});
		}
	};
	if ($iterator) {
		// eslint-disable-next-line no-extra-parens, max-len
		iterator[/** @type {typeof Symbol.iterator} */ ($iterator)] = /** @type {typeof iterator[typeof Symbol.iterator]} */ (function () {
			return iterator;
		});
	}
	if ($freeze) {
		$freeze(iterator);
	}
	return iterator;
};
