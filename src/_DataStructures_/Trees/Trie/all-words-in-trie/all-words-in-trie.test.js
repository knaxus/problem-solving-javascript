const Trie = require("../index");
const allWordsFromTrie = require(".");

describe("Find all words in Trie", () => {
	let trie = new Trie();
	const words = ["bed", "ball", "apple", "java", "javascript", "bed"];

	it("Should return an empty array when null is passed in", () => {
		expect(allWordsFromTrie(null)).toEqual([]);
	});

	it("Should return an empty array when trie is empty", () => {
		expect(allWordsFromTrie(trie.root)).toEqual([]);
	});

	it("Should return all words in the trie", () => {
		words.forEach(word => trie.insert(word));
		expect(allWordsFromTrie(trie.root).sort()).toEqual(words.sort());
	});
});
