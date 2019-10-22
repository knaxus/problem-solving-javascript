const Node = require('./Node');

class Trie {
  constructor() {
    this.root = new Node('');
  }

  // helper to get the index of a character
  // eslint-disable-next-line class-methods-use-this
  getIndexOfChar(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  insert(key) {
    if (!key) {
      return false;
    }

    // convert to lower case
    // keys are basically words
    const word = key.toLowerCase();
    let currentNode = this.root;

    for (let level = 0; level < word.length; level += 1) {
      const index = this.getIndexOfChar(word[level]);
      if (!currentNode.children[index]) {
        currentNode.children[index] = new Node(word[level]);
      }
      currentNode = currentNode.children[index];
    }

    // when we are done with inserting all the character of the word,
    // mark the node as end leaf
    currentNode.markAsLeaf();
    currentNode.increaseCount();
    return true;
  }

  search(key) {
    if (!key) {
      return false;
    }

    // convert word to lower case
    const word = key.toLowerCase();
    let currentNode = this.root;

    for (let level = 0; level < word.length; level += 1) {
      const index = this.getIndexOfChar(word[level]);
      if (!currentNode.children[index]) {
        return false;
      }
      currentNode = currentNode.children[index];
    }
    if (currentNode !== null && currentNode.isEndOfWord) {
      return true;
    }
    return false;
  }
}

// const words = ['bed', 'ball', 'apple', 'java', 'javascript'];
// const trie = new Trie();

// words.forEach(word => trie.insert(word));

// console.log(trie.root);

// console.log(trie.search(words[3]));
// console.log(trie.search('word'));
// console.log(trie.search(words[4]));
// console.log(trie.search('random'));

module.exports = Trie;
