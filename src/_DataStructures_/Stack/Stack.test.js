const Stack = require('.');

describe('Data Structure : Stack', () => {
  it('Should be class', () => {
    expect(typeof Stack.prototype.constructor).toEqual('function');
  });

  describe('Stack API', () => {
    let stack = null;

    beforeEach(() => {
      stack = new Stack();
    });

    it('Should add() element to a stack', () => {
      stack.push(5);
      expect(stack.data).toEqual([5]);
    });

    it('Should remove() an element from the stack', () => {
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).toEqual(3);
      expect(stack.data).toEqual([2]);
    });

    describe('peek()', () => {
      beforeEach(() => {
        stack.push(2);
        stack.push(5);
      });

      it('Should return the elemet to be removed using peek()', () => {
        expect(stack.peek()).toEqual(5);
      });

      it('Should not remove the element', () => {
        expect(stack.peek()).toEqual(5);
        expect(stack.pop()).toEqual(5);
      });
    });

    it('Should maintain the FILO order of elements', () => {
      // first in last out
      stack.push(2);
      stack.push(1);
      stack.push(4);
      stack.push(3);

      expect(stack.pop()).toEqual(3);
      expect(stack.pop()).toEqual(4);
      expect(stack.pop()).toEqual(1);
      expect(stack.pop()).toEqual(2);
    });
  });
});
