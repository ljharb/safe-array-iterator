'use strict';

var test = require('tape');
var hasSymbols = require('has-symbols/shams')();

var safeArrayIterator = require('../');

test('safe-array-iterator', function (t) {
	t.equal(typeof safeArrayIterator, 'function', 'is a function');
	t.equal(
		safeArrayIterator.length,
		1,
		'has a length of 1'
	);

	t.test('iterator api', function (st) {
		var arr = [1, 2, 3];
		var iterator = safeArrayIterator(arr);
		st.equal(typeof iterator, 'object', 'iterator is an object');
		st.equal(typeof iterator.next, 'function', 'iterator has a next method');

		st.test('Symbol.iterator', { skip: !hasSymbols }, function (s2t) {
			s2t.plan(3);

			if (hasSymbols && Symbol.iterator in iterator) { // this line is just for TS
			// eslint-disable-next-line no-extra-parens, max-len
				var method = /** @type {NonNullable<typeof iterator[typeof Symbol.iterator]>} */ (iterator[Symbol.iterator]);
				s2t.equal(typeof method, 'function', 'iterator has a Symbol.iterator method');
				s2t.equal(method(), iterator, 'iterator[Symbol.iterator]() returns the iterator, even when detached from the object');

				// eslint-disable-next-line no-new-func
				var forOf = Function('iterator', 'var result = []; for (var value of iterator) { result.push(value); } return result;');

				s2t.deepEqual(forOf(safeArrayIterator(arr)), arr, 'for (var value of iterator) {} works');
			}

			s2t.end();
		});

		st.deepEqual(iterator.next(), { __proto__: null, done: false, value: 1 }, 'iterator.next() returns the first value');
		st.deepEqual(iterator.next(), { __proto__: null, done: false, value: 2 }, 'iterator.next() returns the second value');
		st.deepEqual(iterator.next(), { __proto__: null, done: false, value: 3 }, 'iterator.next() returns the third value');
		st.deepEqual(iterator.next(), { __proto__: null, done: true, value: undefined }, 'iterator.next() returns done: true when there are no more values');

		st.end();
	});

	t.end();
});
