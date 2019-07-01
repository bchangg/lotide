const eqArrays = require("./eqArrays");
// @desc: Assertion function to check if two arrays are equal, used in tests. Prints the results to
//        the console.
// @param: 2 arrays
//         One of these will usually be user defined when testing
// @return: nothing.
const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;
