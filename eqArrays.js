// const assertEqual = require("./assertEqual");

// @desc: Compares two arrays to see if they are equal to each other
// @param: 2 arrays
// @return: true or false
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
