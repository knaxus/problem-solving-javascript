const Queue = require('.');

describe('Immitated Queue using 2 Stacks', () => {
  it('Should be class', () => {
    expect(typeof Queue.prototype.constructor).toEqual('function');
  });

  describe('Queue API', () => {
    let queue = null;

    beforeEach(() => {
      queue = new Queue();
    });

    it('Should add() element to a queue', () => {
      queue.add(5);
      expect(queue.data).toEqual([5]);
    });

    it('Should remove() an element from the queue', () => {
      queue.add(2);
      queue.add(3);

      expect(queue.remove()).toEqual(2);
      expect(queue.data).toEqual([3]);
    });

    describe('peek()', () => {
      beforeEach(() => {
        queue.add(2);
        queue.add(5);
      });

      it('Should return the elemet to be removed using peek()', () => {
        expect(queue.peek()).toEqual(2);
      });

      it('Should not remove the element', () => {
        expect(queue.peek()).toEqual(2);
        expect(queue.remove()).toEqual(2);
      });
    });

    it('Should maintain the order of elements', () => {
      // first in first out
      queue.add(2);
      queue.add(1);
      queue.add(4);
      queue.add(3);

      expect(queue.remove()).toEqual(2);
      expect(queue.remove()).toEqual(1);
      expect(queue.remove()).toEqual(4);
      expect(queue.remove()).toEqual(3);
    });
  });
});
