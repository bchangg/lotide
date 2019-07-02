// const assertEqual = require("./assertEqual");

// @desc: Function takes a string, and returns an object that counts how many times each letter
//        has appeared in the string
// @param: 1 string
// @return: 1 object
const countLetters = function(string) {
  const result = new Object();
  string = string.split(" ").join("");
  for (const char of string) {
    if (!result[char]) {
      result[char] = new Number();
      result[char]++;
    } else {
      result[char]++;
    }
  }
  return result;
}

// assertEqual(countLetters("pilot pen").i, 1);

module.exports = countLetters;
