const MinHeap = require('.');

describe('MinHeap', () => {
  it('Should be a class', () => {
    expect(typeof MinHeap.prototype.constructor).toEqual('function');
  });

  const mh = new MinHeap();

  beforeEach(() => {
    mh.destroy();
  });

  it('Should create an instance of MinHeap', () => {
    expect(mh instanceof MinHeap).toEqual(true);
  });

  it('Should create a MinHeap using collection', () => {
    const mHBulk = new MinHeap([112, 3, 21, 9, 10, 0]);
    expect(mHBulk.getMin()).toEqual(0);
  });

  it('Should add an element to the MinHeap', () => {
    mh.add(10);
    expect(mh.getMin()).toEqual(10);
  });

  it('Should keep the smallest element at the root', () => {
    [12, 5, 34].forEach(el => mh.add(el));
    expect(mh.getMin()).toEqual(5);
  });

  it('Should retain Heap properties after removal of an element', () => {
    [12, 45, 1, 34].forEach(el => mh.add(el));
    expect(mh.getMin()).toEqual(1);
    mh.remove();
    expect(mh.getMin()).toEqual(12);
  });

  it('Should return `null` when heap is empty', () => {
    [1, 34, 43, 54, 123].forEach(el => mh.add(el));
    expect(mh.getMin()).toEqual(1);
    mh.remove();
    mh.remove();
    mh.remove();
    mh.remove();
    mh.remove();
    mh.remove();
    expect(mh.getMin()).toEqual(null);
  });

  it('Should return the elelment value on `remove()`', () => {
    [1, 34].forEach(el => mh.add(el));
    expect(mh.getMin()).toEqual(1);
    expect(mh.remove()).toEqual(1);
    expect(mh.remove()).toEqual(34);
    expect(mh.getMin()).toEqual(null);
  });

  it('Should return `null` on `remove() called on empty heap`', () => {
    expect(mh.getMin()).toEqual(null);
  });
});
