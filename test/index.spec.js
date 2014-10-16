'use strict';

var test = require('tape');
var potter = require('../');

test('potter', function(t) {
  t.equal(typeof potter, 'function', 'it should be a function');

  t.end();
});
