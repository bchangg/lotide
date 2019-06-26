// @desc: Assertion function to test two values that are not arrays
// @param: Two non-object values - actual, expected
// @return: Nothing. Funciton is a passive function, and only logs the results to the console.
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  }
};

// @desc: Compares an array to an object, and returns an object who's keys contain the value of how many
//        times an item in the array has been counted, if it also exists in the object.
// @param:
// allItems = an array of strings that we need to look through
// itemsToCount = an object specifying what to count
// @return: object with key value pairs indicating which ones have been logged
const countOnly = function(allItems, itemsToCount) {
  const result = new Object();
  // NOTE: SOLUTION 1 - O(n^2) time
  // for (let key in itemsToCount) {
  //   let count = 0;
  //   if (itemsToCount[key]) {
  //     for (let item of allItems) {
  //       if (item === key) {
  //         count++;
  //       }
  //     }
  //   }
  //   if (count > 0) {
  //     result[key] = count;
  //   }
  // }

  // NOTE: SOUTION 2 - O(n) time, I think
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (!result[item]) {
        result[item] = new Number();
        result[item] += 1;
      } else {
        result[item] += 1;
      }
    }
  }
  return result;
}

// TESTING CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
