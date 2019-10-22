/* eslint-disable no-unused-vars */
const Trie = require('../index');

function uniqueWordCount(root) {
  let result = 0;
  if (root.isEndOfWord) {
    result += 1;
  }
  for (let i = 0; i < 26; i += 1) {
    if (root.children[i]) {
      result += uniqueWordCount(root.children[i]);
    }
  }
  return result;
}

// const words = ['bed', 'ball', 'apple', 'java', 'javascript', 'bed'];
// const trie = new Trie();

// words.forEach(word => trie.insert(word));
// console.log(uniqueWordCount(trie.root));

module.exports = uniqueWordCount;
