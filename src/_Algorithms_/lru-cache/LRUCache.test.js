const { LRUCache } = require('.');

describe('Algorithms: LRU Cache', () => {
  describe('LRUCache Instance', () => {
    it('Should be a class', () => {
      expect(typeof LRUCache.prototype.constructor).toEqual('function');
    });
  });

  describe('LRUCache API', () => {
    let lruCache = new LRUCache(4);

    beforeEach(() => {
      lruCache = new LRUCache(4);
    });

    describe('get(key)', () => {
      it('Should return false if the LRUCache is empty', () => {
        expect(lruCache.get('foo')).toEqual(false);
      });

      it('Should return cached value if the key exists in the LRUCache', () =>{
        lruCache.set('foo', 'bar');
        expect(lruCache.get('foo')).toEqual('bar');
      });

      it('Should move least recently used key to the beginning of the list', () => {
        lruCache.set('key1', 'value1');
        lruCache.set('key2', 'value2');

        expect(lruCache.list.head.next.data['key']).toEqual('key2');
        expect(lruCache.list.head.next.data['value']).toEqual('value2');

        // The least recently used key is moved at the beginning of the list
        lruCache.get('key1');
        expect(lruCache.list.head.next.data['key']).toEqual('key1');
        expect(lruCache.list.head.next.data['value']).toEqual('value1');
      });
    });

    describe('set(key, value)', () =>{
      it('Should append each <key:value> pair to the beginning of list', () => {
        lruCache.set('foo', 'bar');
        expect(lruCache.list.head.next.data['key']).toEqual('foo');
        expect(lruCache.list.head.next.data['value']).toEqual('bar');
      });

      it('Should update value if key already exists', () => {
        lruCache.set('foo', 'bar');
        lruCache.set('foo', 'newBar');
        expect(lruCache.get('foo')).toEqual('newBar');
      });

      it('Should remove node at the end if the LRUCache capacity is filled', () => {
        lruCache.set('key5', 'value5');
        lruCache.set('key4', 'value4');
        lruCache.set('key3', 'value3');
        lruCache.set('key2', 'value2');
        lruCache.set('key1', 'value1');

        expect(lruCache.list.length()).toEqual(lruCache.size);
        expect(lruCache.list.head.next.data['key']).toEqual('key1');
        expect(lruCache.list.head.next.data['value']).toEqual('value1');
        expect(lruCache.list.head.next.next.data['key']).toEqual('key2');
        expect(lruCache.list.head.next.next.data['value']).toEqual('value2');
        expect(lruCache.list.head.next.next.next.data['key']).toEqual('key3');
        expect(lruCache.list.head.next.next.next.data['value']).toEqual('value3');
        expect(lruCache.list.head.next.next.next.next.data['key']).toEqual('key4');
        expect(lruCache.list.head.next.next.next.next.data['value']).toEqual('value4');
      });
    });
  });
});