// eslint-disable-next-line no-unused-vars
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

module.exports.totalWords = totalWords;
