// Floyd’s Cycle-Finding Algorithm

function detectLoop(linkedList) {
  let slow = linkedList.getFirst();
  let fast = linkedList.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
}

module.exports = {
  detectLoop,
};
