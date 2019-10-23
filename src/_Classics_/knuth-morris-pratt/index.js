
/* *
* The time complexity of KMP algorithm is O(n) in the worst case
* Example use case: Pattern = ABCABCACA Text = AAABCBAABCABCACACABBCA
* LPSArray = [ 0, 0, 0, 1, 2, 3, 4, 0, 1 ]
* Found = true, at index 7
* */

// Longest prefix suffix - generate an array of the lps for each pattern array value
const createLPS = (pattern, patternLength) => {
  // initialise the current longest prefix suffix length and iterator index values
  const lps = [patternLength];
  lps[0] = 0;

  let length = 0;
  let i = 1;
  // while there is still pattern to iterate over - calculate the lps for i = 1 to patternLength - 1
  while (i < patternLength) {
    /* *
    * if the pattern character at position i matches the pattern character at position length,
    * then increment length, update
    * the lps to the incremted length value and iterate to the next index i.
    * */
    if (pattern.charAt(i) === pattern.charAt(length)) {
      length += 1;
      lps[i] = length;
      i += 1;
      // if not matching
    } else if (length !== 0) {
      // if the length value is not 0, then set the length to be the lps value of index length - 1
      length = lps[length - 1];
    } else {
      // else if length is 0, then set the lps at position i to length, i.e. 0 and increment i.
      lps[i] = length;
      i += 1;
    }
  }
  return lps;
};

/* *
* Invoke the Knuth-Morris-Pratt pattern matching algorithm to find a Pattern with a Text - this
* uses a precomputed prefix-suffix array/table to essentially skip chunks of the text that we
* know will match the pattern. This algorithm will return true if the pattern is a subset of
* the text, else it will return false.
* This algorithm accepts two strings, the pattern and text.
* The time complexity of the KMP algorithm is O(n) in the worst case.
* */
const KMPSearch = (pattern, text) => {
  const patternLength = pattern.length; // Often referred to as M
  const textLength = text.length; // Often referred to as N

  // Longest Pattern Suffix - array containing the lps for all pattern value positions
  const lps = createLPS(pattern, patternLength); // This is preprocessed.
  // console.log({ lpsArray: lps })

  let patternIndex = 0; // Referred to as P
  let textIndex = 0; // Referred to as T
  let found = false;

  // While there is still text left to iterate over and the pattern has not yet been found
  while (textIndex < textLength && found === false) {
    // if the pattern char at index pos P equals the text char at text pos T, then increment indexes
    if (pattern.charAt(patternIndex) === text.charAt(textIndex)) {
      textIndex += 1;
      patternIndex += 1;
    }
    /* *
    * if the pattern index equals the pattern length then the pattern has been successfully
    * found, as such the pattern is a subset of the text the pattern index is set to the longest
    * pattern suffix value (the index is decremented due to being zero indexed).
    * */
    if (patternIndex === patternLength) {
      // console.log(`Pattern found at index ${textIndex-patternIndex}`);
      patternIndex = lps[patternIndex - 1];
      found = true;
    } else if (textIndex < textLength && pattern.charAt(patternIndex) !== text.charAt(textIndex)) {
      /* *
      * else if there is still text left to iterate over and the pattern character does not match
      * the text characterat their respective index positions, then check of the pattern Index is 0,
      * i.e. if it is the first pattern position. If so then jump to the next text character, else
      * (this is not the first pattern position), then update the pattern index using the generated
      * longest prefix suffix, to skip ahead of matching values. This logic will only be encountered
      * after T number of mismatches.
      * */
      if (patternIndex === 0) textIndex += 1;
      else patternIndex = lps[patternIndex - 1];
    }
  }
  // Pattern has not been found, return false. Else return true.
  if (!found) {
    // console.log('The pattern was not found!')
    return false;
  }
  return true;
};

module.exports = {
  KMPSearch,
};
