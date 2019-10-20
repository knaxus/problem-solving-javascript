const { AStar } = require('.');

describe('A*', () => {
  describe('Completes grid successfully', () => {
    it('A*', () => {
      const inputGrid = [
        [1, 1, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
      ];
      const ROW = inputGrid.length;
      const COL = inputGrid[0].length;
      const start = {
        i: 0,
        j: 0,
      };
      const end = {
        i: 3,
        j: 5,
      };
      const completedPath = [[3, 5], [3, 4], [3, 3], [3, 2], [3, 1], [2, 0], [1, 0], [0, 0]];
      expect(AStar(start, end, ROW, COL, inputGrid)).toEqual(completedPath);
    });
  });

  describe('Completes large grid successfully', () => {
    it('A*', () => {
      const inputGrid = [
        [1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
        [0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      ];
      const ROW = inputGrid.length;
      const COL = inputGrid[0].length;
      const start = {
        i: 0,
        j: 0,
      };
      const end = {
        i: 8,
        j: 11,
      };
      const completedPath = [[8, 11], [8, 10], [7, 9], [6, 8], [5, 9], [5, 10],
        [4, 11], [3, 11], [2, 11], [1, 11], [0, 10], [1, 9], [0, 8], [1, 7],
        [1, 6], [2, 5], [2, 4], [2, 3], [2, 2], [2, 1], [1, 0], [0, 0]];
      expect(AStar(start, end, ROW, COL, inputGrid)).toEqual(completedPath);
    });
  });

  describe('Cannot complete grid successfully', () => {
    it('A*', () => {
      const inputGrid = [
        [1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
      ];
      const ROW = inputGrid.length;
      const COL = inputGrid[0].length;
      const start = {
        i: 0,
        j: 0,
      };
      const end = {
        i: 3,
        j: 5,
      };
      expect(() => { AStar(start, end, ROW, COL, inputGrid); }).toThrowError('Error: Endpoint cannot be reached');
    });
  });

  describe('Endpoint out of grid bounds', () => {
    it('A*', () => {
      const inputGrid = [
        [1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
      ];
      const ROW = inputGrid.length;
      const COL = inputGrid[0].length;
      const start = {
        i: 0,
        j: 0,
      };
      const end = {
        i: 5,
        j: 5,
      };
      expect(() => { AStar(start, end, ROW, COL, inputGrid); }).toThrowError('Error: Endpoint outside grid bounds');
    });
  });

  describe('Endpoint value is zero', () => {
    it('A*', () => {
      const inputGrid = [
        [1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
      ];
      const ROW = inputGrid.length;
      const COL = inputGrid[0].length;
      const start = {
        i: 0,
        j: 0,
      };
      const end = {
        i: 1,
        j: 3,
      };
      expect(() => { AStar(start, end, ROW, COL, inputGrid); }).toThrowError('Error: Endpoint is unreachable');
    });
  });
});
