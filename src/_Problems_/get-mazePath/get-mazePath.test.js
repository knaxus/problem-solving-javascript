const { getMazePath } = require('.');

describe('Get maze path', () => {
  it('returns all possible solutions for a 2x2 grid', () => {
    const expectedSolutions = ['HHVV', 'HVHV', 'HVVH', 'VHHV', 'VHVH', 'VVHH'];

    expect(getMazePath(0, 0, 2, 2)).toEqual(expectedSolutions);
  });

  it('returns an even amount of horizontal and vertical movements', () => {
    const solutions = getMazePath(0, 0, 3, 3);

    solutions.forEach(solution => {
      expect(solution.length).toEqual(6);

      expect(solution.match(/H/g).length).toEqual(3);
      expect(solution.match(/V/g).length).toEqual(3);
    });
  });

  it('returns the expected number of solutions based on given grids', () => {
    expect(getMazePath(0, 0, 1, 1).length).toEqual(2);
    expect(getMazePath(0, 0, 2, 2).length).toEqual(6);
    expect(getMazePath(0, 0, 3, 3).length).toEqual(20);
    expect(getMazePath(0, 0, 4, 4).length).toEqual(70);

    expect(getMazePath(1, 1, 4, 4).length).toEqual(20);
  });

  it('returns an empty array when the start and end coordinates are equal', () => {
    const solutions = getMazePath(2, 2, 2, 2);

    expect(solutions).toEqual(['']);
  });

  it('returns an empty array when the start coordinates are greater than the end coordinates', () => {
    const solutions = getMazePath(2, 2, 1, 1);

    expect(solutions).toEqual([]);
  });
});