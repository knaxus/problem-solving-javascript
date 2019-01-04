const { getElementFromlast } = require('.');
const { LinkedList } = require('../index');

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
    expect(getElementFromlast(list, 10)).toEqual(null);
  });

  it('Should return `world` as 3rd from last of the list', () => {
    expect(getElementFromlast(list, 3).data).toEqual('world');
  });

  it('Should return `Welcome` as 6th from last of the list', () => {
    expect(getElementFromlast(list, 6).data).toEqual('Welcome');
  });
});
