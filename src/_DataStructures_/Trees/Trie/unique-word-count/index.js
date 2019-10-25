function uniqueWordCount(root) {
  let result = 0;
  if (root.isEndOfWord) {
    result += 1;
  }
  for (let i = 0; i < 26; i += 1) {
    if (root.children[i]) {
      result += uniqueWordCount(root.children[i]);
    }
  }
  return result;
}

module.exports = uniqueWordCount;
