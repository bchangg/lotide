const eqArrays = require("./eqArrays");
const assertArraysEqual= require("./assertArraysEqual");


// ACTUAL FUNCTION
// @param: one array of any length
// @return: value of the middle index(s)
const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    let firstMiddleValue = array[Math.floor(array.length / 2) - 1];
    let secondMiddleValue = array[Math.floor(array.length / 2)];
    return [firstMiddleValue, secondMiddleValue];
  } else {
    let middleIndex = array[Math.floor(array.length / 2)];
    return [middleIndex];
  }
}

module.exports = middle;
