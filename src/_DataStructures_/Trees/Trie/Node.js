class TrieNode {
  constructor(char) {
    this.char = char;
    this.children = [];
    this.isEndOfWord = false;

    // mark all the alphabets as null
    for (let i = 0; i < 26; i += 1) this.children[i] = null;
  }

  markAsLeaf() {
    this.isEndOfWord = true;
  }

  unmarkAsLeaf() {
    this.isEndOfWord = false;
  }
}

module.exports = TrieNode;
