function getElementFromlast(linkedList, index) {
  let normal = linkedList.getFirst();
  let nth = linkedList.getFirst();
  let count = 0;

  if (!normal) {
    return null;
  }

  while (normal) {
    if (count >= index) {
      nth = nth.next;
    }
    normal = normal.next;
    count += 1;
  }
  return nth;
}

module.exports = {
  getElementFromlast,
};
