const letters = require('./index');

describe('Data Structure : Set', () => {


  it('X Set should be a Class', () => {
    expect(typeof XSet.prototype.constructor).toEqual('function');
  });
  
  describe('Creation of Set', () => {
    
    it('Should create a new Set with no elements', () => {
      letters = new XSet();
      expect(letters === 0);
    });
    
    it('Should add letter A', () => {
      letters.add('a');
      expect(letters.has('a');
    });
    
    it('Should add letter B', () => {
      letters.add('b');
      expect(letters.has('b');
    });
    
    it('Should add letter C', () => {
      letters.add('c');
      expect(letters.has('c');
    });
    
    it('Should remove letter A', () => {
      letters.remove('a');
      expect(!letters.has('a');
    });
    
    it('Should remove letter B', () => {
      letters.remove('b');
      expect(!letters.has('b');
    });

    
  });
