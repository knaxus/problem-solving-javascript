/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
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

const alphabets = 'abcdefghijklmnopqrstuvwxyz';
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
    this.string = string.toLowerCase();
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
          let nextString = '';
          while (j < currentString.length) {
            nextString += currentString[j];
            j++;
          }
          currentNode.next.set(nextString[0], new Node(nextString, true, i));
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
            const oldMap = partialMatchNode.next;
            const newNode = new Node(diffString, partialMatchNode.isEnd, partialMatchNode.index);
            const alphabetsArray = alphabets.split('');

            for (const char of alphabetsArray) {
              if (oldMap.has(char)) {
                newNode.next.set(char, oldMap.get(char));
              }
            }
            partialMatchNode.next = new Map();
            partialMatchNode.next.set(diffString[0], newNode);
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
    string = string.toLowerCase();
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

// const st = 'CatatecheeseMouseatecheesetooCatatemousetoo';
// const s = new SuffixTree(st);
// s.constructSuffixTree();


// for (let i = 0; i < st.length; i++) {
//   const e = st.substring(i);
//   if (s.findSubstring(e) !== i) {
//     console.log(e, i, s.findSubstring(e));
//   }
// }

module.exports = SuffixTree;
