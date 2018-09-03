'use strict';

/**
 * Return flexbox spec versions by prefix
 */
module.exports = function (prefix) {
  var spec = void 0;
  if (prefix === '-webkit- 2009' || prefix === '-moz-') {
    spec = 2009;
  } else if (prefix === '-ms-') {
    spec = 2012;
  } else if (prefix === '-webkit-') {
    spec = 'final';
  }

  if (prefix === '-webkit- 2009') {
    prefix = '-webkit-';
  }

  return [spec, prefix];
};