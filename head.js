// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  }
};
const head = function(array) {
  return array[0];
}
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual(head([1]), 1);
