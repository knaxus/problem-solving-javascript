const { rotateImage } = require('.');

describe('Rotate Image', () => {
  it('Should rotate 3x3 matrix elements by 90 degrees', () => {
    const inputMatrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const expectedMatrix = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];

    rotateImage(inputMatrix);
    expect(inputMatrix).toEqual(expectedMatrix);
  });
  it('Should rotate 4x4 matrix elements by 90 degrees', () => {
    const inputMatrix = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];

    const expectedMatrix = [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ];

    rotateImage(inputMatrix);
    expect(inputMatrix).toEqual(expectedMatrix);
  });
  it('Should rotate 5x5 matrix elements by 90 degrees', () => {
    const inputMatrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    const expectedMatrix = [
      [21, 16, 11, 6, 1],
      [22, 17, 12, 7, 2],
      [23, 18, 13, 8, 3],
      [24, 19, 14, 9, 4],
      [25, 20, 15, 10, 5],
    ];

    rotateImage(inputMatrix);
    expect(inputMatrix).toEqual(expectedMatrix);
  });
});
