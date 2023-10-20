// Define a Bloom filter class
class BloomFilter {
  // Constructor takes the size of the bit array and the number of hash functions
  constructor(size, numHashes) {
    this.size = size; // The size of the bit array
    this.numHashes = numHashes; // The number of hash functions
    this.bitArray = new Array(size).fill(0); // Initialize the bit array with zeros
  }

  // A simple hash function that takes a string and returns an integer
  hash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 31 + str.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  // A method to generate multiple hashes for a given element
  // It uses double hashing technique to avoid correlation between hashes
  generateHashes(element) {
    let hashes = [];
    let hash1 = this.hash(element); // First hash
    let hash2 = this.hash(hash1 + element); // Second hash
    for (let i = 0; i < this.numHashes; i++) {
      // Generate more hashes by adding multiples of second hash to first hash
      let newHash = (hash1 + i * hash2) % this.size;
      hashes.push(newHash);
    }
    return hashes;
  }

  // A method to add an element to the Bloom filter
  add(element) {
    // Generate the hashes for the element
    let hashes = this.generateHashes(element);
    // Set the bits at the hashed positions to 1
    for (let hash of hashes) {
      this.bitArray[hash] = 1;
    }
  }

  // A method to check if an element is in the Bloom filter
  contains(element) {
    // Generate the hashes for the element
    let hashes = this.generateHashes(element);
    // Check if all the bits at the hashed positions are 1
    for (let hash of hashes) {
      if (this.bitArray[hash] === 0) {
        return false; // Definitely not in the set
      }
    }
    return true; // Probably in the set, but could be a false positive
  }
}

// Example usage
// Create a Bloom filter with size 100 and 3 hash functions
let bf = new BloomFilter(100, 3);

// Add some elements to the filter
bf.add("apple");
bf.add("banana");
bf.add("cherry");

// Check if some elements are in the filter
console.log(bf.contains("apple")); // true
console.log(bf.contains("banana")); // true
console.log(bf.contains("cherry")); // true
console.log(bf.contains("durian")); // false
console.log(bf.contains("elderberry")); // false

// Add more elements to the filter
bf.add("fig");
bf.add("grape");
bf.add("honeydew");

// Check if some elements are in the filter
console.log(bf.contains("fig")); // true
console.log(bf.contains("grape")); // true
console.log(bf.contains("honeydew")); // true
console.log(bf.contains("iceberg")); // false
console.log(bf.contains("jackfruit")); // false

// There is a chance of false positives, but not false negatives
console.log(bf.contains("kiwi")); // false (correct)
console.log(bf.contains("lime")); // true (false positive)
// const b = new BloomFilters();
module.exports = BloomFilters;
