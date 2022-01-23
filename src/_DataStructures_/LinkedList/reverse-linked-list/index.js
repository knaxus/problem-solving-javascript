function reverseLinkedList(linkedList) {
    let current = linkedList.getFirst();
    let prev = null;
    let keeper = null;
    do{
        keeper = current.next;
        current.next = prev;
        prev = current;
        current = keeper;
    } while(current.next != null);
    
  return current;
};
module.exports = {
    reverseLinkedList,
  };
