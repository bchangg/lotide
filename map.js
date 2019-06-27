const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

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

const words = ["ground", "control", "to", "major", "tom"];
const objects = [{
  name: "test",
  importance: 1
}, {
  name: "test1",
  importance: 5
}];

const multiplier = [5, 6, 7, 8];
const results1 = map(words, word => word[0]);
const results2 = map(objects, object => object.name);
const results3 = map(multiplier, num => num * 10);
console.log(results2);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["test", "test1"]);
assertArraysEqual(results3, [50, 60, 70, 80]);
