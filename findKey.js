const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`\u274C Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`\u2705 Assertion Passed: ${actual} === ${expected}`);
  }
};


// findKey() function begins
const findKey = function(object, callback) {
  let result;
  for (const item in object) {
    if (callback(object[item])) {
      result = item;
      return result;
    }
  }
  return result;
};

// Testing area
const object1 = {
  "Blue Hill": {
    stars: 1
  },
  "Akaleri": {
    stars: 3
  },
  "noma": {
    stars: 2
  },
  "elBulli": {
    stars: 3
  },
  "Ora": {
    stars: 2
  },
  "Akelarre": {
    stars: 3
  }
};

const object2 = {
  name: "bob",
  occupation: "student",
  age: 25
};
console.log(findKey(object1, x => x.stars === 2)); // => "noma"
console.log(findKey(object2, x => x === "student")); // => "noma"
