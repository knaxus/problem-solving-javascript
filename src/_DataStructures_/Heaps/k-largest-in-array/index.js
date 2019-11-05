const MaxHeap = require('../MaxHeap');

/**
 * Find the 4 largest elements from an array
 */

function findKLargest(collection, k) {
  if (!collection || !Array.isArray(collection)) {
    throw new Error('Invalid / missing collection');
  }

  // create a MaxHeap using the collection
  const mh = new MaxHeap(collection);
  const result = [];

  for (let i = 0; i < k; i += 1) {
    result.push(mh.remove());
  }
  return result;
}

module.exports = findKLargest;
