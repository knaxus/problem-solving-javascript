const { LinkedList } = require('../index');
const { reverseLinkedList } = require('.').default;

describe('Reverse a LinkedList', () => {
  let list = null;
  beforeEach(() => {
    list = new LinkedList();
    list.addAtBeginning('1');
    list.addAtEnd('2');
    list.addAtEnd('3');
    list.addAtEnd('4');
    list.addAtEnd('5');
  });

  it('Should return `null` for empty list', () => {
    list.delete();
    expect(reverseLinkedList(list)).toEqual(null);
  });

  it('Should return `5`->`4`->`3`->`2`->`1` for the given list', () => {
    expect(reverseLinkedList(list).data).toEqual('5');
    expect(reverseLinkedList(list).next.data).toEqual('4');
    expect(reverseLinkedList(list).next.next.data).toEqual('3');
    expect(reverseLinkedList(list).next.next.next.data).toEqual('2');
    expect(reverseLinkedList(list).next.next.next.next.data).toEqual('1');
  });

  it('Should return `3`->`2`->`1` after deleting 2 last nodes of the list', () => {
    list.removeFromEnd();
    list.removeFromEnd();
    expect(reverseLinkedList(list).data).toEqual('3');
    expect(reverseLinkedList(list).next.data).toEqual('2');
    expect(reverseLinkedList(list).next.next.data).toEqual('1');
  });
});
