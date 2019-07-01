const assert = require("chai").assert;
const middle = require("../middle");

assertArraysEqual(middle([10, 6, 4, 2, 3]), [4]);

describe("#middle", () => {
  it("should return [1] for []", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("should return [2] for[1, 2, 3] ", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("should return [4] for [10, 6, 4, 2, 3]", () => {
    assert.deepEqual(middle([10, 6, 4, 2, 3]), [4]);
  });
});
