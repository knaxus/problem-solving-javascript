const errFirstArgument = 'Invalid Argument: Expected an array as first argument';
const errSecondArguemnt = 'Invalid Argument: Expected a positive number as second argument';

function validateArguments(array, size) {
  if (!Array.isArray(array)) {
    throw new Error(errFirstArgument);
  }

  if (typeof size !== 'number' || size < 0) {
    throw new Error(errSecondArguemnt);
  }

  if (size > array.length) {
    return [array];
  }
  return 0;
}

function arrayChunk({ array, size }) {
  validateArguments(array, size);

  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    const lastChunk = result[result.length - 1];

    if (!lastChunk || lastChunk.length === size) {
      result.push([array[i]]);
    } else {
      lastChunk.push(array[i]);
    }
  }

  return result;
}

function chunkUsingSlice({ array, size }) {
  validateArguments(array, size);

  let index = 0;
  const result = [];

  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }

  return result;
}

module.exports = {
  errFirstArgument,
  errSecondArguemnt,
  arrayChunk,
  chunkUsingSlice,
};
