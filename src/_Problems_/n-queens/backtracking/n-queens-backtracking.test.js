const { solveNQueensWithBacktrackingAlgorithm } = require('.');

describe('N Queens With Backtracking Algorithm', () => {
    [
        [4, [[0, 0, 1, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 1, 0, 0]]],
        [5, [[1, 0, 0, 0, 0],
            [0, 0, 0, 1, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 0, 0, 1],
            [0, 0, 1, 0, 0]]]
    ].forEach(set => {
        const N = set[0];
        const expectedResult = set[1];
        it(`should solve the problem for ${N} Queens`, () => {
            const result = solveNQueensWithBacktrackingAlgorithm(N);
            expect(result).toEqual(expectedResult);
        })

    });
    it('should break algorithm if given size is less than 4', () => {
        const result = solveNQueensWithBacktrackingAlgorithm(3);
        expect(result).toEqual('You cant solve N Queens Problem with N < 4');
    });
});
