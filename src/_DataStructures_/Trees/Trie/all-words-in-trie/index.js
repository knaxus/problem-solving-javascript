// eslint-disable-next-line no-unused-vars
const Trie = require('../index');

function getAllWords(root, level, word) {
  let result = [];

  if (!root) return result;

  if (root.isEndOfWord) {
    let temp = '';
    for (let i = 0; i < level; i += 1) {
      temp += String(word[i]);
    }
    result = [...result, temp];
  }

  for (let i = 0; i < 26; i += 1) {
    if (root.children[i] !== null) {
      // eslint-disable-next-line no-param-reassign
      word[level] = String.fromCharCode(i + 'a'.charCodeAt(0));
      result = [...result, ...getAllWords(root.children[i], level + 1, word)];
    }
  }
  return result;
}

function allWordsFromTrie(root) {
  const word = []; // char arr to store a word
  for (let i = 0; i < 26; i += 1) {
    word[i] = null;
  }
  return getAllWords(root, 0, word);
}

// const words = ['bed', 'ball', 'apple', 'java', 'javascript'];
// const trie = new Trie();

// words.forEach(word => trie.insert(word));
// console.log(allWordsFromTrie(trie.root));

module.exports = allWordsFromTrie;
