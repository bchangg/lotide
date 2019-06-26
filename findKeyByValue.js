const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  }
};

// Function will return the key of a value in an object. If it does not find a key that matches, it will
// return undefined
// @param {Object} - object to look for the keys in
// @param {String/Number/Boolean} - value to look for
// @return {String/undefined} - the key that it found. Otherwise undefined
const findKeyByValue = function(object, value) {
  let result;
  for(const key in object) {
    if(object[key] === value) {
      result = key;
    }
  }
  return result;
}

// TEST CODE AREA
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
