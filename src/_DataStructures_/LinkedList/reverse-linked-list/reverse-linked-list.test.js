const { LinkedList } = require('../index');
const { reverseLinkedList } = require('.');

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
    let reversedList = reverseLinkedList(list);
    expect(reversedList.data).toEqual('5');
    expect(reversedList.next.data).toEqual('4');
    expect(reversedList.next.next.data).toEqual('3');
    expect(reversedList.next.next.next.data).toEqual('2');
    expect(reversedList.next.next.next.next.data).toEqual('1');
  });

  it('Should return `3`->`2`->`1` after deleting 2 last nodes of the list', () => {
    list.removeFromEnd();
    list.removeFromEnd();
    let reversedList2 = reverseLinkedList(list);
    expect(reversedList2.data).toEqual('3');
    expect(reversedList2.next.data).toEqual('2');
    expect(reversedList2.next.next.data).toEqual('1');
  });
});
