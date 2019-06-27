// DEPENDENT FUNCTIONS
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

const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// FUNCTION FOR THIS TASK
const takeUntil = function(array, callback) {
  const result = [];
  for(let element of array) {
    if(callback(element)) {
      return result;;
    } else {
      result.push(element);
    }
  }
  return result;
}

// TESTING AREA
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const expectedData1 = [1, 2, 5, 7, 2];

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const expectedData2 = ["I've", "been", "to", "Hollywood"];

const data3 = ["this", "is", "an", "array", "of", "strings"];
const expectedData3 = ["this", "is", "an"];

assertArraysEqual(takeUntil(data1, x => x < 0), expectedData1);
assertArraysEqual(takeUntil(data2, x => x === ","), expectedData2);
assertArraysEqual(takeUntil(data3, x => x.length === 5), expectedData3);
