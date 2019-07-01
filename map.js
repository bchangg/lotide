const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

// Function takes in an array and a callback function.
// Returns a modified array after using the callback function on each of the elements in the original array.
// @param {Array}
// @param {Function}
// @return {Array}
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// const words = ["ground", "control", "to", "major", "tom"];
// const objects = [{
//   name: "test",
//   importance: 1
// }, {
//   name: "test1",
//   importance: 5
// }];
//
// const multiplier = [5, 6, 7, 8];
// const results1 = map(words, word => word[0]);
// const results2 = map(objects, object => object.name);
// const results3 = map(multiplier, num => num * 10);
// console.log(results2);
//
// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
// assertArraysEqual(results2, ["test", "test1"]);
// assertArraysEqual(results3, [50, 60, 70, 80]);

module.exports = map;
