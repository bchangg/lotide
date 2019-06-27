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
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// @desc: Flattens the input array so that there are no nested eqArrays
// @param: 1 array of any size, with any level of nesting (slightly beyond scope of question)
// @return: 1 array that has all the values from the input array, but no nested array elements
function flatten(original) {
  let flattened = [];
  const flattener = function(inputArray) {
    inputArray.forEach(function(item) {
      if (Array.isArray(item)) {
        flattener(item);
      } else {
        flattened.push(item);
      }
    });
  };
  flattener(original);
  return flattened;
}

console.log(flatten([1, 2, [3, 4], 5, [
  [
    [
      [
        [
          [
            [6]
          ]
        ]
      ]
    ]
  ]
]]));
