/**
 * Given an integer N, remove consecutive repeated digits from it.
 * Input:133445
 * Output:1345
 */

const Stack = require('../index');


function removeConsecutiveDigits(no) {
    let s = new Stack();
    let newNo = "";
    //initally push first digit into stack
    newNo += no[0];
    s.push(no[0]);
    for (let i = 1; i < no.length; i++) {
        const digit = no[i];
        //if stack top and incoming digit is same ignore it else append to newNo.
        if (s.peek() !== digit) {
            newNo += digit;
            s.push(digit);
        }
    }
    return newNo
}
