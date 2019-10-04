const { findMaxConsecutive1s } = require(".");

describe("Find maximum numbers of consecutive 1s", () => {
  it("returns 1 if there is only one number 1", () => {
    expect(findMaxConsecutive1s([1])).toEqual(1);
  });

  it("return the appropriate count for a large array", () => {
    const largeArray = [0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1];
    expect(findMaxConsecutive1s(largeArray)).toEqual(5);
  });

  it("returns count 0 if there is no number 1", () => {
    expect(findMaxConsecutive1s([0, 2, 3, 9, 0])).toEqual(0);
  });

  it("does NOT count negative 1s", () => {
    expect(findMaxConsecutive1s([1, 1, 0, -1, -1, -1])).toEqual(2);
  });
});
