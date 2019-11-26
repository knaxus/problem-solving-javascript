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

    describe('addAtBeginning(value)', () => {
      it('Should add element at beginning', () => {
        list.addAtBeginning(12);
        expect(list.head.data).toEqual(12);

        list.addAtBeginning(15);
        expect(list.head.data).toEqual(15);
      });

      it('Should return the 10 as the first element in the list', () => {
        list.addAtBeginning(10);
        expect(list.getFirst().data).toEqual(10);
      });
    });

    describe('addAtEnd(value)', () => {
      it('Should add element at end', () => {
        list.addAtBeginning(10);
        list.addAtEnd(12);
        expect(list.getLast().data).toEqual(12);
      });

      it('Should add at the beginning if the list is empty', () => {
        list.addAtEnd(15);

        expect(list.head.data).toEqual(15);
        expect(list.head.next).toEqual(null);
      });

      it('Should return 4 as length of the list after adding at the end', () => {
        list.addAtEnd(15);
        list.addAtEnd(23);
        list.addAtEnd(33);
        list.addAtEnd(10);

        expect(list.length()).toEqual(4);
        expect(list.traverseList()).toEqual([15, 23, 33, 10]);
      });
    });

    describe('length() of the list', () => {
      it('Should return 0 if the list is empty', () => {
        expect(list.length()).toEqual(0);
      });

      it('Should return the present size of the list after adding elements', () => {
        list.addAtBeginning(1);
        list.addAtBeginning(2);
        list.addAtBeginning(3);
        expect(list.length()).toEqual(3);
      });

      it('Should return the present size of the list after removing elements', () => {
        list.addAtBeginning(1);
        list.addAtBeginning(2);
        list.addAtBeginning(3);
        expect(list.length()).toEqual(3);

        list.removeFromEnd();
        list.removeFromBeginning();
        expect(list.length()).toEqual(1);
      });
    });

    describe('removeFromBeginning()', () => {
      it('Should remove element at front', () => {
        list.addAtBeginning(12);
        expect(list.removeFromBeginning().data).toEqual(12);
        expect(list.length()).toEqual(0);
      });

      it('Should return the element after removing it', () => {
        list.addAtBeginning(15);
        list.addAtBeginning(16);
        expect(list.removeFromBeginning().data).toEqual(16);
      });

      it('Should not throw error if the list is empty', () => {
        expect(() => list.removeFromBeginning()).not.toThrow();
      });
    });

    describe('removeFromEnd()', () => {
      it('Should return `null` for empty list', () => {
        expect(list.removeFromEnd()).toEqual(null);
      });

      it('Should remove element at last', () => {
        list.addAtBeginning('Hello');
        list.addAtBeginning(14);
        list.addAtEnd(15);
        expect(list.removeFromEnd().data).toEqual(15);
      });

      it('Should reduce the lengh of the list', () => {
        list.addAtBeginning(14);
        list.addAtEnd(15);
        expect(list.length()).toEqual(2);

        list.removeFromEnd();
        expect(list.length()).toEqual(1);
      });

      it('Should return the last element after removing it', () => {
        list.addAtBeginning(14);
        list.addAtEnd(15);
        expect(list.removeFromEnd().data).toEqual(15);
      });
    });

    describe('getLast()', () => {
      it('Should return `null` if the list is empty', () => {
        expect(list.getLast()).toEqual(null);
      });

      it('Should return 10 as the last item in the list', () => {
        list.addAtEnd(15);
        list.addAtEnd(23);
        list.addAtEnd(33);
        list.addAtEnd(10);
        expect(list.getLast().data).toEqual(10);
      });
    });

    describe('getFirst()', () => {
      it('Should return `null` if the list is empty', () => {
        expect(list.getFirst()).toEqual(null);
      });

      it('Should return 15 as the last item in the list', () => {
        list.addAtBeginning(15);
        list.addAtEnd(23);
        list.addAtEnd(33);
        list.addAtEnd(10);
        expect(list.getFirst().data).toEqual(15);
      });
    });

    describe('Get/Add/Remove at specific positions', () => {
      beforeEach(() => {
        list.addAtBeginning('Hello');
        list.addAtEnd('There!');
        list.addAtEnd('Welcome');
      });

      describe('getAt(index)', () => {
        it('Should return `null` for empty list regardless of index value', () => {
          list.delete();
          expect(list.getAt(10)).toEqual(null);
        });

        it('Should return the node for given index', () => {
          expect(list.getAt(1).data).toEqual('There!');
        });

        it('Should return the last element for large index', () => {
          expect(list.getAt(10).data).toEqual('Welcome');
        });
      });

      describe('addAt(index, value)', () => {
        it('Should add at the beginning of empty list', () => {
          list.delete();
          list.addAt(10, 'Boom');
          expect(list.getFirst().data).toEqual('Boom');
        });

        it('Should add at the end of the list if the index is out of bound', () => {
          list.addAtEnd(1010);
          list.addAt(10, 'Boom');
          expect(list.getLast().data).toEqual('Boom');
        });

        it('Should add new element at the given position', () => {
          list.addAt(2, 'Stranger');
          expect(list.getAt(2).data).toEqual('Stranger');
          expect(list.getAt(1).data).toEqual('There!');
          expect(list.getAt(0).data).toEqual('Hello');
        });
      });

      describe('removeAt(index)', () => {
        it('Should return null for empty list', () => {
          list.delete();
          expect(list.removeAt(10)).toEqual(null);
        });

        it('Should remove and return last element for large index value', () => {
          expect(list.removeAt(10).data).toEqual('Welcome');
        });

        it('Should remove and return the element at given index value', () => {
          list.delete();
          [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(el => list.addAtBeginning(el));
          expect(list.removeAt(10).data).toEqual(1);
          expect(list.removeAt(0).data).toEqual(9);
          expect(list.removeAt(5).data).toEqual(3);
        });
      });
    });
  });
});
