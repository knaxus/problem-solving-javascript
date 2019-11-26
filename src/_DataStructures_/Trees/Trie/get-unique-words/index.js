const Trie = require('../index');
const TrieNode = require('../Node');

function getAllUniqueWords(root, level, word) {
  let result = [];

  if (root.isEndOfWord) {
    let temp = '';
    for (let i = 0; i < level; i += 1) {
      temp += String(word[i]);
    }
    result = [...result, temp];
  }

  for (let i = 0; i < 26; i += 1) {
    if (root.children[i]) {
      // eslint-disable-next-line no-param-reassign
      word[level] = String.fromCharCode(i + 'a'.charCodeAt(0));
      result = [...result, ...getAllUniqueWords(root.children[i], level + 1, word)];
    }
  }
  return result;
}

function allUniqueWordsFromTrie(root) {
  if (!(root instanceof TrieNode)) {
    throw new Error('Invalid argument: Root of Trie is required');
  }
  const word = []; // char arr to store a word
  for (let i = 0; i < 26; i += 1) {
    word[i] = null;
  }
  return getAllUniqueWords(root, 0, word);
}

// const words = ['bed', 'ball', 'apple', 'java', 'javascript', 'bed'];
// const trie = new Trie();

// words.forEach(word => trie.insert(word));
// console.log(allUniqueWordsFromTrie(trie.root));

module.exports = allUniqueWordsFromTrie;
