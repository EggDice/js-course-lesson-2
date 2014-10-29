'use strict';

var test = require('tape');
var potter = require('../');

test('potter', function(t) {
  t.equal(typeof potter, 'function', 'it should be a function');

  t.equal(potter([]), 0);
  t.equal(potter([1]), 8);
  t.equal(potter([2]), 8);
  t.equal(potter([3]), 8);
  t.equal(potter([4]), 8);
  t.equal(potter([5]), 8);

  t.equal(potter([1, 1]), 2 * 8);

  t.equal(potter([1, 2]), 2 * 8 * 0.95);
  t.equal(potter([1, 2, 3]), 3 * 8 * 0.90);
  t.equal(potter([1, 2, 3, 4]), 4 * 8 * 0.80);
  t.equal(potter([1, 2, 3, 4, 5]), 5 * 8 * 0.75);

  t.equal(potter([1, 1, 2]), 2 * 8 * 0.95 + 8);
  t.equal(potter([1, 1, 2, 2]), 4 * 8 * 0.95);
  t.equal(potter([1, 2, 2, 3, 4, 5]), 5 * 8 * 0.75 + 8);
  t.equal(potter([1, 1, 1, 2, 2, 2]), 6 * 8 * 0.95);
  t.equal(potter([1, 1, 2, 2, 3, 3, 4, 5]), 2 * 4* 8 * 0.80);

  t.end();
});
