function solveNQueensWithGeneticAlgorithm(SIZE = 10, CROSS_ITERATIONS = 3) {
  let POPULATION = [];
  const POPULATION_SIZE = SIZE;
  const DOWNBOARD_DIAGONAL = [];
  const UPBOARD_DIAGONAL = [];

  if (SIZE < 4) {
    return 'You cant solve N Queens Problem with N < 4';
  }

  function initializeDiagonalBoard() {
    for (let i = 0; i < SIZE; i += 1) {
      DOWNBOARD_DIAGONAL.push([]);
      UPBOARD_DIAGONAL.push([]);

      for (let j = 0; j < SIZE; j += 1) {
        DOWNBOARD_DIAGONAL[i].push(SIZE + j - i);
        UPBOARD_DIAGONAL[i].unshift(SIZE + j - i);
      }
    }
  }

  function generateChromosome() {
    const chromosome = [];
    for (let i = 0; i < SIZE; i += 1) {
      chromosome.push(Math.floor(Math.random() * SIZE));
    }

    return chromosome;
  }

  function generatePopulation() {
    for (let i = 0; i < POPULATION_SIZE; i += 1) {
      POPULATION.push({ chromosome: generateChromosome(), fitness: 0 });
    }
  }

  function calcFitness() {
    function checkXAxis(chromosome) {
      let count = 0;
      const unique = [...new Set(chromosome)];
      for (let i = 0; i < unique.length; i += 1) {
        count
                    += +chromosome.map(x => x === unique[i]).filter(x => x === true).length - 1;
      }
      return count;
    }

    function checkZAxisUp(chromosome) {
      const diagonalPos = [];
      let count = 0;

      for (let i = 0; i < chromosome.length; i += 1) {
        diagonalPos.push(UPBOARD_DIAGONAL[chromosome[i]][i]);
      }

      const unique = [...new Set(diagonalPos)];
      for (let i = 0; i < unique.length; i += 1) {
        count
                    += +diagonalPos.map(x => x === unique[i]).filter(x => x === true).length
                    - 1;
      }
      return count;
    }

    function checkZAxisDown(chromosome) {
      const diagonalPos = [];
      let count = 0;

      for (let i = 0; i < chromosome.length; i += 1) {
        diagonalPos.push(DOWNBOARD_DIAGONAL[chromosome[i]][i]);
      }

      const unique = [...new Set(diagonalPos)];
      for (let i = 0; i < unique.length; i += 1) {
        count
                    += +diagonalPos.map(x => x === unique[i]).filter(x => x === true).length
                    - 1;
      }
      return count;
    }

    for (let i = 0; i < POPULATION.length; i += 1) {
      let count = 0;

      count
                += +checkXAxis(POPULATION[i].chromosome)
                + +checkZAxisUp(POPULATION[i].chromosome)
                + +checkZAxisDown(POPULATION[i].chromosome);
      POPULATION[i].fitness = count;
    }
  }

  function mutateChromosome(chromosome) {
    const newChromosome = chromosome;
    const chromosomeSize = SIZE;

    const iterator = Math.floor(Math.random() * chromosomeSize);
    let value = Math.floor(Math.random() * chromosomeSize);

    while (value === chromosome[iterator]) {
      value = Math.floor(Math.random() * chromosomeSize);
    }
    newChromosome[iterator] = value;

    return newChromosome;
  }

  function crossChromosome() {
    let firstChromosome = [];
    let secondChromosome = [];
    const randomNumbers = [];
    const crossoverPoint = 3;
    for (let i = 0; i < 2; i += 1) {
      randomNumbers.push(Math.floor(Math.random() * POPULATION_SIZE));
    }

    for (let j = 0; j < crossoverPoint; j += 1) {
      firstChromosome.push(POPULATION[randomNumbers[0]].chromosome[j]);
      secondChromosome.push(POPULATION[randomNumbers[1]].chromosome[j]);
    }

    for (let j = crossoverPoint; j < SIZE; j += 1) {
      firstChromosome.push(POPULATION[randomNumbers[1]].chromosome[j]);
      secondChromosome.push(POPULATION[randomNumbers[0]].chromosome[j]);
    }

    firstChromosome = mutateChromosome(firstChromosome);
    secondChromosome = mutateChromosome(secondChromosome);

    POPULATION.push({ chromosome: firstChromosome, fitness: 0 });
    POPULATION.push({ chromosome: secondChromosome, fitness: 0 });
  }

  function sortResults() {
    const fitnesses = {};
    for (let i = 0; i < POPULATION.length; i += 1) {
      fitnesses[i] = +POPULATION[i].fitness;
    }

    const sortable = [];

    const fitnessesArray = Object.values(fitnesses);

    for (let i = 0; i < fitnessesArray.length; i += 1) {
      sortable.push([i, fitnesses[i]]);
    }


    sortable.sort((a, b) => a[1] - b[1]);

    const sortedPopulation = [];

    for (let i = 0; i < sortable.length; i += 1) {
      sortedPopulation.push(POPULATION[+sortable[i][0]]);
    }

    return sortedPopulation;
  }

  function removeWorst() {
    for (let i = 0; i < CROSS_ITERATIONS * 2; i += 1) {
      POPULATION.splice(POPULATION.length - 1 - i, 1);
    }
  }

  initializeDiagonalBoard();
  generatePopulation();
  calcFitness();
  /* eslint no-unused-vars: */
  let iteration = 1;
  while (POPULATION[0].fitness !== 0) {
    for (let i = 0; i < CROSS_ITERATIONS; i += 1) {
      crossChromosome();
    }
    calcFitness();

    POPULATION = sortResults();
    removeWorst();
    iteration += 1;
  }

  return POPULATION;
}

module.exports = {
  solveNQueensWithGeneticAlgorithm,
};
