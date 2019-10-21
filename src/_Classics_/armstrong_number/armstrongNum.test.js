/* eslint-disable linebreak-style */
const armstrongNum = require('./armstrongNum');

describe('Armstrong Number tests till 1634', () => {
  for (let i = 0; i < 1635; i += 1) {
    if (i >= 10 && i !== 153 && i !== 370 && i !== 371 && i !== 407 && i !== 1634) {
      it(`${i} is not armstrong`, () => {
        expect(armstrongNum(i)).toBe(false);
      });

      it(`${i} in string is not armstrong`, () => {
        expect(armstrongNum(`${i}`)).toBe(false);
      });
    } else {
      it(`${i} is armstrong`, () => {
        expect(armstrongNum(i)).toBe(true);
      });

      it(`${i} in string is armstrong`, () => {
        expect(armstrongNum(`${i}`)).toBe(true);
      });
    }
  }
});

describe('Armstrong Number tests for decimals', () => {
  for (let i = 0; i < 10; i += 1) {
    it(`${7.0 + (i / 10)} is armstrong`, () => {
      expect(armstrongNum(7.0 + (i / 10))).toBe(true);
    });

    it(`${7.0 + (i / 10)} in string is armstrong`, () => {
      expect(armstrongNum(`${i}`)).toBe(true);
    });

    it(`${11.0 + (i / 10)} is not armstrong`, () => {
      expect(armstrongNum(11.0 + (i / 10))).toBe(false);
    });

    it(`${11.0 + (i / 10)} in string is not armstrong`, () => {
      expect(armstrongNum(`${11.0 + (i / 10)}`)).toBe(false);
    });
  }
});
