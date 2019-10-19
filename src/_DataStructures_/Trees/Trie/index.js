const Node = require('./Node');

class Trie {
  constructor() {
    this.root = new Node('');
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
    return true;
  }

  // helper to get the index of a character
  // eslint-disable-next-line class-methods-use-this
  getIndexOfChar(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }
}

module.exports = Trie;
