// const eqArrays = require("./eqArrays");
// const assertArraysEqual = require("./assertArraysEqual");

const without = function(original, forRemoval) {
  let result = [];
  original.forEach(function(item) {
    if (!forRemoval.includes(item)) {
      result.push(item);
    }
  })
  return result;
};

// assertArraysEqual(without([1, 2, 3, 4], [3, 2]), [1, 4]);
// assertArraysEqual(without(["1", 2, "3", 4], [3, 2]), ["1", "3", 4]);
// assertArraysEqual(without([1, 9, 3, 4], [3, 2]), [1, 9, 4]);
// assertArraysEqual(without(["dogs", 2, 3, 4], [3, 2]), ["dogs", 4]);
// assertArraysEqual(without([], [3, 2]), []);
//
// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;
