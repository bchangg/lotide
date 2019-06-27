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

const object3 = {
  box: {
    deeperBox: {
      evenDeeperBox: 5
    }
  },
  box2: {
    deeperBox: {
      evenDeeperBox: 10
    }
  },
  box3: {
    deeperBox: {
      evenDeeperBox: 15
    }
  }
};

assertEqual(findKey(object1, x => x.stars === 2), "noma"); // => "noma"
assertEqual(findKey(object2, x => x === "student"), "occupation"); // => "noma"
assertEqual(findKey(object3, x => x.deeperBox.evenDeeperBox === 10), "box2"); // => "noma"
