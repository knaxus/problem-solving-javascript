// eslint-disable-next-line no-unused-vars
const Trie = require('../index');
const TrieNode = require('../Node');

function getAllWords(root, level, word) {
  let result = [];

  if (root.isEndOfWord) {
    let temp = '';
    for (let i = 0; i < level; i += 1) {
      temp += String(word[i]);
    }
    // get the count and push all the occurences
    const res = [];
    for (let i = 0; i < root.wordCount; i += 1) {
      res.push(temp);
    }
    result = [...result, ...res];
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
  if (!(root instanceof TrieNode)) {
    throw new Error('Invalid argument: Root of Trie is required');
  }

  const word = []; // char arr to store a word
  for (let i = 0; i < 26; i += 1) {
    word[i] = null;
  }
  return getAllWords(root, 0, word);
}

// const words = ['bed', 'ball', 'apple', 'java', 'javascript', 'bed'];
// const trie = new Trie();

// words.forEach(word => trie.insert(word));
// console.log(allWordsFromTrie(trie.root));

module.exports = allWordsFromTrie;
