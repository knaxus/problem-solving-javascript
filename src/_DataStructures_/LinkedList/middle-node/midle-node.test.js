const { LinkedList } = require('../index');
const { getMiddleNode } = require('.');

describe('Find the middle node of a LinkedList', () => {
  let list = null;
  beforeEach(() => {
    list = new LinkedList();
    list.addAtBeginning('Hello');
    list.addAtEnd('World!');
    list.addAtEnd('Welcome');
    list.addAtEnd('to');
    list.addAtEnd('the');
    list.addAtEnd('world');
    list.addAtEnd('of');
    list.addAtEnd('JavaScript');
  });

  it('Should return `null` for empty list', () => {
    list.delete();
    expect(getMiddleNode(list)).toEqual(null);
  });

  it('Should return `to` for the given list', () => {
    expect(getMiddleNode(list).data).toEqual('to');
  });

  it('Should return `Welcome` after deleting 3 last nodes of the list', () => {
    list.removeFromEnd();
    list.removeFromEnd();
    list.removeFromEnd();
    expect(getMiddleNode(list).data).toEqual('Welcome');
  });
});
