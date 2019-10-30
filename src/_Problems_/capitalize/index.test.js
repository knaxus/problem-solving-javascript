const { capitalize } = require('.');

describe('Capitalize', () => {
    it('Should capitalize the first letter of every word in a sentence', () =>{
        expect(capitalize('i love programming')).toEqual('I Love Programming');
    });
})