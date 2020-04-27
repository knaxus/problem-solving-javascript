const Queue = require('.');

describe('Data Structure : Queue', () => {
  it('Queue should be class', () => {
    expect(typeof Queue.prototype.constructor).toEqual('function');
  });

  describe('Queue API', () => {
    let queue = null;

    beforeEach(() => {
      queue = new Queue();
    });

    it('Should add element to a queue', () => {
      queue.enqueue(5);
      expect(queue.peek()).toEqual(5);
    });

    it('Should dequeue() an element from the queue', () => {
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.dequeue()).toEqual(2);
      expect(queue.peek()).toEqual(3);
      expect(queue.length()).toEqual(1);
    });

    describe('peek()', () => {
      beforeEach(() => {
        queue.enqueue(2);
        queue.enqueue(5);
      });

      it('Should return the elemet to be removed using peek()', () => {
        expect(queue.peek()).toEqual(2);
      });

      it('Should not remove the element', () => {
        expect(queue.peek()).toEqual(2);
        expect(queue.dequeue()).toEqual(2);
      });
    });

    it('Should maintain the order of elements', () => {
      // first in first out
      queue.enqueue(2);
      queue.enqueue(1);
      queue.enqueue(4);
      queue.enqueue(3);

      expect(queue.dequeue()).toEqual(2);
      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(4);
      expect(queue.dequeue()).toEqual(3);
      expect(queue.dequeue()).toEqual(null);
    });

    it('Shoud return size of Queue', () => {
      const queue2 = new Queue();
      queue2.enqueue(2);
      queue2.enqueue(1);
      queue2.enqueue(4);
      queue2.enqueue(3);
      expect(queue2.length()).toEqual(4);
    });

    it('Should Destroy Queue', () => {
      queue.destroy();
      expect(queue.length()).toEqual(0);
    });
  });
});
