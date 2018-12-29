const { weaveQueues } = require('.');
const Queue = require('../index');

describe('Weave two queues using weaveQueues()', () => {
  it('Should weave be a function', () => {
    expect(typeof weaveQueues).toEqual('function');
  });

  it('Should weave 2 queues', () => {
    const q1 = new Queue();
    const q2 = new Queue();

    q1.add('Hello');
    q2.add(1);
    q1.add('World');
    q2.add(2);
    q2.add(3);

    const q3 = weaveQueues(q1, q2);

    expect(q3.remove()).toEqual('Hello');
    expect(q3.remove()).toEqual(1);
    expect(q3.remove()).toEqual('World');
    expect(q3.remove()).toEqual(2);
    expect(q3.remove()).toEqual(3);
  });
});
