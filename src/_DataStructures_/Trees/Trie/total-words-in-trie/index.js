// eslint-disable-next-line no-unused-vars
const Trie = require('../index');

function totalWords(root) {
  let result = 0;
  if (root.isEndOfWord) {
    result += root.wordCount;
  }
  for (let i = 0; i < 26; i += 1) {
    if (root.children[i] !== null) {
      result += totalWords(root.children[i]);
    }
  }
  return result;
}

// const words = ['bed', 'ball', 'apple', 'java', 'javascript', 'bed'];
// const trie = new Trie();

// words.forEach(word => trie.insert(word));
// console.log(totalWords(trie.root));

module.exports = totalWords;
