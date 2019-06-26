// @desc: Assertion function to test two values that are not arrays
// @param: Two non-object values
// @return: Nothing. Funciton is a passive function, and only logs the results to the console.
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  }
};

// @desc: Function takes a string, and returns an object that counts how many times each letter
//        has appeared in the string
// @param: 1 string
// @return: 1 object
const countLetters = function(string) {
  let result = new Object();
  string = string.split(" ").join("");
  for (const char of string) {
    if (!result[char]) {
      result[char] = new Number();
      result[char]++;
    } else {
      result[char]++;
    }
  }
  console.log(result);
  return result;
}

assertEqual(countLetters("pilot pen").i, 1);
