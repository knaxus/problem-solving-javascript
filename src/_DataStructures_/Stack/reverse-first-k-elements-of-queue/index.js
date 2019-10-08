/**
 * Reverse first K elements of a Queue
 * Given an integer K and a queue of integers,reverse the order of the first K elements of the queue, leaving the other elements in the same relative order.
 * Input : Q = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11] k = 5
 * Output : Q = [  20, 19, 18, 17, 16, 11, 12, 13, 14, 15]
 * 
 */
//const Queue = require.resolve('Queue');

const Queue = require('../../Queue/index');

const Stack = require('../index');

function reverseQueueElements(queue, k) {
  let s = new Stack();

  if (queue.isEmpty()) {
    throw new Error("Empty Queue");
  }
  if(k<=0 || k>queue.length()){
    throw new Error("Invalid K value");
  }

  for (let i = 0; i < k; i++) {
    //push first k elements from queue and push in stack
    s.push(queue.remove());
  }

  for (let i = 0; i < k; i++) {
    //we reverse the k elements with the help of stack.
    //pop all the k elements from stack and add to queue.
    let no = s.pop();
    queue.add(no);
  }

  for (let i = 0; i < queue.length() - k; i++) {
    //bring the k elments again back to front to maintain the queue order.
    queue.add(queue.peek());
    queue.remove();

  }
  return queue;
}

/*
let queue = new Queue();
queue.add(11);
queue.add(12);
queue.add(13);
queue.add(14);
queue.add(15);
queue.add(16);
queue.add(17);
queue.add(18);
queue.add(19);
queue.add(20);
console.log("Queue before:", queue.data);
let k = 5;
let reversedQueue=reverseQueueElements(queue, k);
console.log("Queue after:", queue.data);
*/