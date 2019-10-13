const { weaveQueues } = require('.');
const Queue = require('../index');

describe('Weave two queues using weaveQueues()', () => {
  it('Should weave be a function', () => {
    expect(typeof weaveQueues).toEqual('function');
  });

  it('Should weave 2 queues', () => {
    const q1 = new Queue();
    const q2 = new Queue();

    q1.enqueue('Hello');
    q2.enqueue(1);
    q1.enqueue('World');
    q2.enqueue(2);
    q2.enqueue(3);

    const q3 = weaveQueues(q1, q2);

    expect(q3.dequeue()).toEqual('Hello');
    expect(q3.dequeue()).toEqual(1);
    expect(q3.dequeue()).toEqual('World');
    expect(q3.dequeue()).toEqual(2);
    expect(q3.dequeue()).toEqual(3);
  });
});
