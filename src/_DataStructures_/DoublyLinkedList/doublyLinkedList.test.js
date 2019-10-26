const DLL = require('.');

describe('Doubly Linked List', () => {
  it('Doubly linked list should be class', () => {
    expect(typeof DLL.prototype.constructor).toEqual('function');
  });

  const doublyLinkedList = new DLL();

  it('It should create a DLL', () => {
    expect(doublyLinkedList.head.next).toEqual(doublyLinkedList.tail);
    expect(doublyLinkedList.tail.previous).toEqual(doublyLinkedList.head);
    expect(doublyLinkedList.length()).toEqual(0);
  });

  it('It should add at beginning (addAtBeginning)', () => {
    doublyLinkedList.addAtBeginning(1);
    doublyLinkedList.addAtBeginning(2);
    doublyLinkedList.addAtBeginning(3);
    expect(doublyLinkedList.traverse()).toEqual([3, 2, 1]);
  });

  it('It should add at end (addAtEnd)', () => {
    doublyLinkedList.addAtEnd(1);
    doublyLinkedList.addAtEnd(2);
    doublyLinkedList.addAtEnd(3);
    expect(doublyLinkedList.traverse()).toEqual([3, 2, 1, 1, 2, 3]);
  });

  it('It should remove at beginning (removeAtBeginning)', () => {
    doublyLinkedList.removeAtBeginning();
    doublyLinkedList.removeAtBeginning();
    doublyLinkedList.removeAtBeginning();
    expect(doublyLinkedList.traverse()).toEqual([1, 2, 3]);
  });

  it('It should remove at end (removeAtEnd)', () => {
    doublyLinkedList.removeAtEnd();
    doublyLinkedList.removeAtEnd();
    doublyLinkedList.removeAtEnd();

    expect(doublyLinkedList.traverse()).toEqual([]);
  });
});
