function reverseLinkedList(linkedList) {
    var next = linkedList.getFirst();
    var current = null;
    var prev;
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