// TEST/ASSERTION FUNCTIONS
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

const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1, arr2));
};

const without = function(original, forRemoval) {
  let result = [];
  original.forEach(function(item) {
    if (!forRemoval.includes(item)) {
      result.push(item);
    }
  })
  console.log(result);
  return result;
};

assertArraysEqual(without([1, 2, 3, 4], [3, 2]), [1, 4]);
assertArraysEqual(without(["1", 2, "3", 4], [3, 2]), ["1", "3", 4]);
assertArraysEqual(without([1, 9, 3, 4], [3, 2]), [1, 9, 4]);
assertArraysEqual(without(["dogs", 2, 3, 4], [3, 2]), ["dogs", 4]);
assertArraysEqual(without([], [3, 2]), []);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
