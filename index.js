'use strict';

var _ = require('lodash');

var DISCOUNTS = {
  '1': 1,
  '2': 0.95,
  '3': 0.90,
  '4': 0.80,
  '5': 0.75
};

var BASE_PRICE = 8;

function potter(books) {
  return getCombos(books).reduce(function(price, combo) {
    return price + getComboPriceByLength(combo.length);
  }, 0);
}

function getCombos(books) {
  return books.reduce(pushCombos, []);
}

function pushCombos(combos, book) {
  var combo = getBestAppendPriceCombo(book, combos);
  if (!combo.length) {
    combos.push(combo);
  }
  combo.push(book);
  return combos;
}

function getBestAppendPriceCombo(book, combos) {
  return combos.filter(_.curry(isBookInCombo)(book)).
    reduce(getBetterAppendPriceCombo, []);
}

function getComboPriceByLength(length) {
  return length * BASE_PRICE * DISCOUNTS[length];
}

function isBookInCombo(book, combo) {
  return combo.indexOf(book) === -1;
}

function getBetterAppendPriceCombo(combo1, combo2) {
  return getAppendPrice(combo1) > getAppendPrice(combo2) ? combo1 : combo2;
}

function getAppendPrice(combo) {
  var l = combo.length;
  return getComboPriceByLength(l) - getComboPriceByLength(l + 1);
}

module.exports = potter;

