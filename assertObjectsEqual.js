const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

// Function compares two objects and prints a message (true/false) to the console if they are
// (the same/not the same)
// @param {Object}
// @param {Object}
// @return {Boolean} - True/false
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

// assertObjectsEqual({
//   a: [1]
// }, {
//   a: [1]
// });
// assertObjectsEqual({
//   a: 1
// }, {
//   a: [1]
// });
// assertObjectsEqual({
//   a: "1",
//   b: 2
// }, {
//   b: 2,
//   a: "1"
// });

module.exports = assertObjectsEqual;
