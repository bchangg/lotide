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

// @desc: Assertion function to check if two arrays are equal, used in tests. Prints the results to
//        the console.
// @param: 2 arrays
//         One of these will usually be user defined when testing
// @return: nothing.
const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1, arr2));
};
