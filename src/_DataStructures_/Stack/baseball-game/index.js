/**
 
You're now a baseball game point recorder.

Given a list of strings, each string can be one of the 4 following types:

Integer (one round's score): Directly represents the number of points you get in this round.
"+" (one round's score): Represents that the points you get in this round are the sum of the last two valid round's points.
"D" (one round's score): Represents that the points you get in this round are the doubled data of the last valid round's points.
"C" (an operation, which isn't a round's score): Represents the last valid round's points you get were invalid and should be removed.
Each round's operation is permanent and could have an impact on the round before and the round after.

You need to return the sum of the points you could get in all the rounds.

*/

const Stack = require('../index');

// The given solution is on O(n)

function sumOfPoints(arr) {
  const pointsTracker = new Stack();
  let sum = 0;

  if (!Array.isArray(arr)) {
    throw new Error('Invalid Argument!');
  }
  // Track the value of `sum` accordingly
  // eslint-disable-next-line no-restricted-syntax
  for (const el of arr) {
    // console.log('data : ', pointsTracker.data);
    // console.log('sum : ', sum);

    if (el === 'C') {
      // pop if the value is `C`
      const top = pointsTracker.pop();
      if (top) {
        sum -= top;
      }
    } else if (el === 'D') {
      // Double the top id the value is 'D'
      const top = pointsTracker.peek();
      sum += top * 2;
      pointsTracker.push(top * 2);
    } else if (el === '+') {
      const top = pointsTracker.pop();
      const secondTop = pointsTracker.peek();

      const result = top + secondTop;
      sum += result;

      pointsTracker.push(top);
      pointsTracker.push(result);
    } else {
      // push to the Stack if the value is integer
      sum += parseInt(el, 10);
      pointsTracker.push(parseInt(el, 10));
    }
  }
  return sum;
}

/**
 * Let's Try it out
 
console.log(sumOfPoints(['5', '2', 'C', 'D', '+']));
console.log(sumOfPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']));
 */

/** 
 
Input: ["5","2","C","D","+"]
Output: 30

Explanation: 

Round 1: You could get 5 points. The sum is: 5.
Round 2: You could get 2 points. The sum is: 7.
Operation 1: The round 2's data was invalid. The sum is: 5.  
Round 3: You could get 10 points (the round 2's data has been removed). The sum is: 15.
Round 4: You could get 5 + 10 = 15 points. The sum is: 30.
Example 2:
Input: ["5","-2","4","C","D","9","+","+"]
Output: 27

Explanation: 

Round 1: You could get 5 points. The sum is: 5.
Round 2: You could get -2 points. The sum is: 3.
Round 3: You could get 4 points. The sum is: 7.
Operation 1: The round 3's data is invalid. The sum is: 3.  
Round 4: You could get -4 points (the round 3's data has been removed). The sum is: -1.
Round 5: You could get 9 points. The sum is: 8.
Round 6: You could get -4 + 9 = 5 points. The sum is 13.
Round 7: You could get 9 + 5 = 14 points. The sum is 27.

Note:

The size of the input list will be between 1 and 1000.
Every integer represented in the list will be between -30000 and 30000.

*/
