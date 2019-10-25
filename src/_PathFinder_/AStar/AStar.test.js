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
  describe('Completes grid successfully when no block', () => {
    it('A*', () => {
      const inputGrid = [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
      ];
      const ROW = inputGrid.length;
      const COL = inputGrid[0].length;
      const start = {
        i: 2,
        j: 2,
      };
      const end1 = {
        i: 0,
        j: 0,
      };
      const completedPath1 = [[0, 0], [1, 1], [2, 2]];
      expect(AStar(start, end1, ROW, COL, inputGrid)).toEqual(completedPath1);

      const end2 = {
        i: 0,
        j: 2,
      };
      const completedPath2 = [[0, 2], [1, 2], [2, 2]];
      expect(AStar(start, end2, ROW, COL, inputGrid)).toEqual(completedPath2);

      const end3 = {
        i: 0,
        j: 4,
      };
      const completedPath3 = [[0, 4], [1, 3], [2, 2]];
      expect(AStar(start, end3, ROW, COL, inputGrid)).toEqual(completedPath3);

      const end4 = {
        i: 2,
        j: 4,
      };
      const completedPath4 = [[2, 4], [2, 3], [2, 2]];
      expect(AStar(start, end4, ROW, COL, inputGrid)).toEqual(completedPath4);

      const end5 = {
        i: 4,
        j: 4,
      };
      const completedPath5 = [[4, 4], [3, 3], [2, 2]];
      expect(AStar(start, end5, ROW, COL, inputGrid)).toEqual(completedPath5);

      const end6 = {
        i: 4,
        j: 2,
      };
      const completedPath6 = [[4, 2], [3, 2], [2, 2]];
      expect(AStar(start, end6, ROW, COL, inputGrid)).toEqual(completedPath6);

      const end7 = {
        i: 4,
        j: 0,
      };
      const completedPath7 = [[4, 0], [3, 1], [2, 2]];
      expect(AStar(start, end7, ROW, COL, inputGrid)).toEqual(completedPath7);

      const end8 = {
        i: 2,
        j: 0,
      };
      const completedPath8 = [[2, 0], [2, 1], [2, 2]];
      expect(AStar(start, end8, ROW, COL, inputGrid)).toEqual(completedPath8);
    });
  });
});
