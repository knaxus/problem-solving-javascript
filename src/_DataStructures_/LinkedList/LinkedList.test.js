const { Node, LinkedList } = require('.');

describe('Data Structures: Linked Lists', () => {
  describe('Node of a List', () => {
    it('Should be a class', () => {
      expect(typeof Node.prototype.constructor).toEqual('function');
    });

    it('Should set the data and next field of a node', () => {
      const node = new Node('Hello', null);
      expect(node.data).toEqual('Hello');
      expect(node.next).toEqual(null);
    });
  });

  describe('LinkedList Instance', () => {
    it('Should be a class', () => {
      expect(typeof LinkedList.prototype.constructor).toEqual('function');
    });

    it('Should set the data and next field of a node', () => {
      const list = new LinkedList();
      expect(list.head).not.toEqual(undefined);
      expect(list.head).toEqual(null);
    });
  });

  describe('LinkedList API', () => {
    let list = new LinkedList();

    beforeEach(() => {
      list = new LinkedList();
    });

    it('Should add element at beginning using list.addAtBeginning()', () => {
      list.addAtBeginning(12);
      expect(list.head.data).toEqual(12);

      list.addAtBeginning(15);
      expect(list.head.data).toEqual(15);
    });

    it('Should add element at end using list.addAtEnd()', () => {
      list.addAtEnd(12);
      expect(list.head.data).toEqual(12);

      list.addAtEnd(15);
      expect(list.head.data).toEqual(12);
      expect(list.head.next.data).toEqual(15);
    });

    it('Should return the present size of the list using list.length()', () => {
      expect(list.length()).toEqual(0);
      list.addAtBeginning(1);
      list.addAtBeginning(2);
      list.addAtBeginning(3);
      expect(list.length()).toEqual(3);
    });
  });
});
