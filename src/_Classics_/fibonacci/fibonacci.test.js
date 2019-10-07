const { fibonacci, fibonacciMemoized, fibonacciTabular } = require('.');

describe('Find the Fibonacci Sum for a given index', () => {

    it('should return 1 when index is 0', () => {
        expect(fibonacci(0)).toEqual(1);
        expect(fibonacciMemoized(0)).toEqual(1);
        expect(fibonacciTabular(0)).toEqual(1); //failing
    });

    it('should return 1 when index is 1', () => {
        expect(fibonacci(1)).toEqual(1);
        expect(fibonacciMemoized(1)).toEqual(1);
        expect(fibonacciTabular(1)).toEqual(1);
    });

    it('should return 1 when index is 2', () => {
        expect(fibonacci(2)).toEqual(1);
        expect(fibonacciMemoized(2)).toEqual(1);
        expect(fibonacciTabular(2)).toEqual(1);
    });

    it('should return 55 when index is 10', () => {
        expect(fibonacci(10)).toEqual(55);
        expect(fibonacciTabular(10)).toEqual(55);
        expect(fibonacciMemoized(10)).toEqual(55);
    });

    it('should return 1.7147923024004204e+106 when index is 510', () => {
        expect(fibonacciMemoized(510)).toEqual(1.7147923024004204e+106);
        expect(fibonacciTabular(510)).toEqual(1.7147923024004204e+106);
    });

    it('should return 1 when index is negative', () => {
        expect(fibonacci(-1)).toEqual(1);
        expect(fibonacciMemoized(-1)).toEqual(1);
        expect(fibonacciTabular(-1)).toEqual(1); //failing
    });
});
