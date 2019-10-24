const { solveNQueensWithGeneticAlgorithm } = require('.');

describe('N Queens With Genetic Algorithm', () => {
  it('should solve randomly generated population with only one fitness with 0 value', () => {
    const result = solveNQueensWithGeneticAlgorithm(4);
    expect(result).toHaveLength(4);
    expect(result[0].fitness).toEqual(0);
    expect(result[1].fitness).not.toEqual(0);
  });
  it('should sort result fitnesses ascending, starting with 0', () => {
    const result = solveNQueensWithGeneticAlgorithm(8);

    const fitnesses = result.map(r => r.fitness);
    expect(fitnesses[0]).toEqual(0);
    for (let i = 1; i < fitnesses.length; i += 1) {
      expect(fitnesses[i]).toBeGreaterThanOrEqual(fitnesses[i - 1]);
    }
  });
  it('should generate population with each chromosome with length equals to population size', () => {
    const result = solveNQueensWithGeneticAlgorithm(4);
    const populationSize = result.length;

    for (let i = 1; i < populationSize; i += 1) {
      expect(result[i].chromosome).toHaveLength(populationSize);
    }
  });
  it('should break algorithm if given size is less than 4', () => {
    const result = solveNQueensWithGeneticAlgorithm(3);
    expect(result).toEqual('You cant solve N Queens Problem with N < 4');
  });
});
