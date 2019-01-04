function getMiddleNode(linkedList) {
  let slow = linkedList.getFirst();
  let fast = linkedList.getFirst();

  if (!slow) {
    return null;
  }

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

module.exports = {
  getMiddleNode,
};
