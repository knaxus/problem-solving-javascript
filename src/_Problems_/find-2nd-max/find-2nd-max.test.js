const { findSecondMax } = require(".");

describe("Find and return second max number", () => {
  it("returns properly if all numbers are positive", () => {
    const arr = [9, 2, 3, 6];
    expect(findSecondMax(arr)).toEqual(6);
  });

  it("returns properly if all numbers are negative", () => {
    const arr = [-9, -2, -3, -6];
    expect(findSecondMax(arr)).toEqual(-3);
  });

  it("returns properly if all numbers are negative", () => {
    const arr = [0];
    expect(findSecondMax(arr)).toEqual(Number.MIN_SAFE_INTEGER);
  });
});
