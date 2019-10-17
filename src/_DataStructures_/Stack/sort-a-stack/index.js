/**
 * Sort a stack with the help of a temporary stack.
 * Input:[1,10,21,3,9,-11,32]
 * Output:[32,21,10,9,3,1,-11]
 * Time Complexity:O(N^2) 
*/
const Stack = require('../index');

function sortStack(stack) {
    const tempStack = new Stack();
    while (!stack.isEmpty()) {
        //pop the first element from stack
        let temp = stack.pop();
        //for ascending order (tempStack.peek() < temp)
        while (!tempStack.isEmpty() && tempStack.peek() > temp) {
            stack.push(tempStack.pop());
        }
        //push the first element(temp) onto tempStack if tempStack.peek()<temp
        tempStack.push(temp);
    }
    return tempStack;
}
/*
const s = new Stack();

s.push(1);
s.push(10);
s.push(21);
s.push(3);
s.push(9);
s.push(-11);
s.push(32);
console.log(s.data);
const s1 = sortStack(s);
console.log(s1.data);
*/