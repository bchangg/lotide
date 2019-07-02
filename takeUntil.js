// const eqArrays = require("./eqArrays");
// const assertArraysEqual = require("./assertArraysEqual");

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
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const expectedData1 = [1, 2, 5, 7, 2];
//
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const expectedData2 = ["I've", "been", "to", "Hollywood"];
//
// const data3 = ["this", "is", "an", "array", "of", "strings"];
// const expectedData3 = ["this", "is", "an"];
//
// assertArraysEqual(takeUntil(data1, x => x < 0), expectedData1);
// assertArraysEqual(takeUntil(data2, x => x === ","), expectedData2);
// assertArraysEqual(takeUntil(data3, x => x.length === 5), expectedData3);

module.exports = takeUntil;
