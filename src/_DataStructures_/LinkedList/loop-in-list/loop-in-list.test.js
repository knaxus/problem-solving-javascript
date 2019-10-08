const { LinkedList } = require('../index');
const { detectLoop } = require('.');

describe('Loop a LinkedList', () => {
  let loopList = null;
  let last = null;
  beforeEach(() => {
    loopList = new LinkedList();
    loopList.addAtBeginning('1');
    loopList.addAtEnd('2');
    loopList.addAtEnd('3');
    loopList.addAtEnd('4');
    loopList.addAtEnd('5');
    // Create loop in list
    last = loopList.getLast();
    last.next = loopList.getFirst();
  });

  it('Should break for empty list', () => {
    loopList.delete();
    expect(() => detectLoop(loopList)).toThrow(TypeError);
  });

  it('Should return `true` when looping list', () => {
    expect(detectLoop(loopList)).toEqual(true);
  });

  it('Should return `false` for non loop list', () => {
    last.next = null; // remove loop in list
    expect(detectLoop(loopList)).toEqual(false);
  });

  it('Should return `false` for non loop list', () => {
    const list = new LinkedList();
    list.addAtBeginning('1');
    list.addAtEnd('1');
    list.addAtEnd('1');
    expect(detectLoop(list)).toEqual(false);
  });
});
