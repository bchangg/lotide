// @desc: Assertion function to test two values that are not arrays
// @param: value
// @param: value
// @return: Nothing. Funciton is a passive function, and only logs the results to the console.
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  }
};

module.exports = assertEqual;
