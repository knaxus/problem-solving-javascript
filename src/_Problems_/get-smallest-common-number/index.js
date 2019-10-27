// Get the common smallest number between two integer arrays

const getSmallestCommonNumber = (a1, a2) => {
  const map = {};
  let i = 0;
  let min;

  while (a1.length > i || a2.length > i) {
    if (i < a1.length) {
      map[`${a1[i]}a`] = true;
      if (map[`${a1[i]}b`] && (min > a1[i] || !min)) {
        min = a1[i];
      }
    }

    if (i < a2.length) {
      map[`${a2[i]}b`] = true;
      if (map[`${a2[i]}a`] && (min > a2[i] || !min)) {
        min = a2[i];
      }
    }

    i += 1;
  }

  return min || -1;
};

module.exports = { getSmallestCommonNumber };
