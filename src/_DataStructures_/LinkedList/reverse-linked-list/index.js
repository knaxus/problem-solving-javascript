function reverseLinkedList(linkedList) {
    let next = linkedList.getFirst();
    let current = null;
    let prev;
    while(next != null){
        prev = current;
        current = next;
        next = next.next;
        current.next = prev;
    }
    return current;
};
module.exports = {
    reverseLinkedList,
  };
