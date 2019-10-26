const trie = require('../index');
const wordcounts = require('./index');

describe('Trees Total words in trie', () => {
    //case with non-empty array
    it("Solution for this testarray is 5", () => {
        const testarray = ["one", "two", "three", "four", "five"];
        const t = new trie();

        for (let i of testarray) {
            t.insert(i);
        }
        expect(wordcounts.totalWords(t.root)).toEqual(testarray.length);
    })

    //case with empty array
    it("Solution for this empty_array is empty", () => {
        const empty_array = [];
        const t = new trie();
        for (let j of empty_array) {
            t.insert(j);
        }
        expect(wordcounts.totalWords(t.root)).toEqual(0);
    })
})