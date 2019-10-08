/* eslint-disable no-plusplus */
/*
Implemented by watching this conceptually video: https://www.youtube.com/watch?v=VA9m_l6LpwI

Suffix for banana are :
banana
anana
nana
ana
na
a

Constructing a suffix tree is O(n*d) where d is length of max string

Searching a suffix of a string is O(d) where d is length of suffix string.
If found then return the index, else return -1

*/

class Node {
  constructor(value, isEnd, index) {
    this.data = value;
    this.isEnd = isEnd;
    this.index = index;
    this.next = new Map();
  }
}

class SuffixTree {
  constructor(string) {
    this.head = new Node();
    this.string = string;
  }

  constructSuffixTree() {
    const { string } = this;
    let currentString = '';
    for (let i = string.length - 1; i >= 0; i -= 1) {
      currentString = string[i] + currentString;
      let j = 0;
      let currentNode = this.head;
      while (j < currentString.length) {
        if (!currentNode.next.has(currentString[j])) {
          currentNode.next.set(currentString[j], new Node(currentString, true, i));
          break;
        } else {
          let k = 0;
          const partialMatchNode = currentNode.next.get(currentString[j]);
          const partialMatchString = partialMatchNode.data;

          let matchString = '';
          while (k < partialMatchString.length && j < currentString.length && partialMatchString[k] === currentString[j]) {
            matchString += currentString[j];
            k++;
            j++;
          }

          let diffString = '';
          while (k < partialMatchString.length) {
            diffString += partialMatchString[k];
            k++;
          }
          partialMatchNode.data = matchString;
          if (diffString) {
            partialMatchNode.next.set(diffString[0], new Node(diffString, true, partialMatchNode.index));
            partialMatchNode.isEnd = false;
            partialMatchNode.index = null;
          }

          if (partialMatchNode.next.has(currentString[j])) {
            currentNode = partialMatchNode;
          } else {
            let nextString = '';
            while (j < currentString.length) {
              nextString += currentString[j];
              j++;
            }
            partialMatchNode.next.set(nextString[0], new Node(nextString, true, i));
            break;
          }
        }
      }
    }
  }

  findSubstring(string) {
    if (!this.head.next.has(string[0])) {
      return -1;
    }

    let currentNode = this.head.next.get(string[0]);
    let currentNodeValue = currentNode.data;

    let i = 0; let j = 0;

    while (i < string.length) {
      j = 0;
      while (i < string.length && j < currentNodeValue.length && string[i++] === currentNodeValue[j++]);

      if (i === string.length && j === currentNodeValue.length && currentNode.isEnd) {
        return currentNode.index;
      }

      if (currentNode.next.has(string[i])) {
        currentNode = currentNode.next.get(string[i]);
        currentNodeValue = currentNode.data;
      } else {
        return -1;
      }
    }
    return -1;
  }
}

// const s = new SuffixTree('banana');
// s.constructSuffixTree();

//  console.log(s.findSubstring('nana'));


module.exports = SuffixTree;
