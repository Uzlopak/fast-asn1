'use strict';
/* global describe it */

const assert = require('assert');

function replaceBigInt(value) {
  return typeof value === 'bigint' && {
    $__type: 'bigint',
    value: value.toString(10)
  }
}

function reviveBigInt(value) {
  const result = (
    typeof value === 'object' &&
    value !== null &&
    '$__type' in value &&
    value.$__type === 'bigint' &&
    'value' in value &&
    BigInt(value.value)
  )
  return typeof result === 'bigint'
    ? result
    : undefined;
}

const replacer = (key, value) => {
  const result = replaceBigInt(value);
  if (typeof result === 'undefined') {
    return value;
  }
  return result;
}

const reviver = (key, value) => {
  const result = reviveBigInt(value);

  return typeof result !== 'undefined'
    ? result
    : value
}

function jsonEqual(a, b) {
  assert.deepEqual(
    JSON.parse(JSON.stringify(a, replacer), reviver),
    JSON.parse(JSON.stringify(b, replacer), reviver));
}
exports.jsonEqual = jsonEqual;
