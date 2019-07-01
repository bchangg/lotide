const eqArrays = require("./eqArrays");
const assertArraysEqual= require("./assertArraysEqual");

const letterPositions = function(string) {
  const result = new Object();
  for (let index = 0; index < string.length; index++) {
    let char = string[index];
    if (!result[char]) {
      if (char !== " ") {
        result[char] = []
        result[char].push(index);
      }
    } else {
      result[char].push(index);
    }
  }
  // Object.keys(result).sort();
  return result;
}

// Test conditions and constants;
// const test = {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// };
// assertArraysEqual(letterPositions("lighthouse in the house").l, test.l);
// assertArraysEqual(letterPositions("lighthouse in the house").i, test.i);
// assertArraysEqual(letterPositions("lighthouse in the house").g, test.g);
// assertArraysEqual(letterPositions("lighthouse in the house").h, test.h);
// assertArraysEqual(letterPositions("lighthouse in the house").t, test.t);
// assertArraysEqual(letterPositions("lighthouse in the house").o, test.o);
// assertArraysEqual(letterPositions("lighthouse in the house").u, test.u);
// assertArraysEqual(letterPositions("lighthouse in the house").s, test.s);
// assertArraysEqual(letterPositions("lighthouse in the house").e, test.e);
// assertArraysEqual(letterPositions("lighthouse in the house").n, test.n);

// const test2 = {
//   p: [0, 6],
//   i: [1],
//   l: [2],
//   o: [3],
//   t: [4],
//   e: [7],
//   n: [8]
// };
// assertArraysEqual(letterPositions("pilot pen").p, test2.p);
// assertArraysEqual(letterPositions("pilot pen").i, test2.i);
// assertArraysEqual(letterPositions("pilot pen").l, test2.l);
// assertArraysEqual(letterPositions("pilot pen").o, test2.o);
// assertArraysEqual(letterPositions("pilot pen").t, test2.t);
// assertArraysEqual(letterPositions("pilot pen").e, test2.e);
// assertArraysEqual(letterPositions("pilot pen").n, test2.n);

module.exports = letterPositions;
