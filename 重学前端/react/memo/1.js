import React from 'react';

export function isNull(obj) {
  return obj === null;
}

export function isFunction(obj) {
  return typeof obj === 'function';
}

export function isObject(obj) {
  return typeof obj === 'object';
}

export function isPlainObject(obj) {
  return EMPTY_OBJECT.toString.call(obj) === '[object Object]';
}

export function isArray(array) {
  return Array.isArray(array);
}

export function isString(string) {
  return typeof string === 'string';
}

export function isNumber(string) {
  return typeof string === 'number';
}

export const NOOP = () => {};
export const EMPTY_OBJECT = {};


function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y; // eslint-disable-line no-self-compare
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (!isObject(objA) || isNull(objA) || !isObject(objB) || isNull(objB)) {
    return false;
  }

  let keysA = Object.keys(objA);
  let keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

export default function memo(Component) {
  let child;
  let oldProps;
  return (props) => {
    if (!oldProps || !shallowEqual(oldProps, props)) {
      child = <Component {...props} />
      oldProps = props;
    }
    return child
  }
}