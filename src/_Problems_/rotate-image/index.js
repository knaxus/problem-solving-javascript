/*
  Rotate Image (LeetCode #48)

  - You are given an n x n 2D matrix representing an image, rotate the 
    image by 90 degrees (clockwise).
  - You have to rotate the image in-place, which means you have to modify 
    the input 2D matrix directly. DO NOT allocate another 2D matrix and do 
    the rotation.

  Example 1:

  1 2 3      7 4 1
  4 5 6 ---> 8 5 2
  7 8 9      9 6 3

  - Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
  - Output: [[7,4,1],[8,5,2],[9,6,3]]

  Example 2: 

  5  1  9  11      15 13 2  5
  2  4  8  10 ---> 14 3  4  1
  13 3  6  7       12 6  8  9
  15 14 12 16      16 7  10 11

  - Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
  - Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

  Constraints:
  - n == matrix.length == matrix[i].length
  - 1 <= n <= 20
  - -1000 <= matrix[i][j] <= 1000
*/

/* 
  Solution:

  1. First, take the transpose of the matrix
    - Example:
    1 2 3      1 4 7
    4 5 6 ---> 2 5 8
    7 8 9      3 6 9

  2. Second, flip the matrix horizontally
    - Example:
    1 4 7      7 4 1
    2 5 8 ---> 8 5 2
    3 6 9      9 6 3

  3. Problem solved!

  - Solution is O(n) where n is the size (total number of entries) of the 
    input matrix
*/

function rotateImage(matrix) {
  const n = matrix.length;

  // take transpose
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // flip horizontally
  for (let i = 0; i < n; i++) {
    let left = 0;
    let right = n - 1;

    while (left < right) {
      const temp = matrix[i][left];
      matrix[i][left] = matrix[i][right];
      matrix[i][right] = temp;
      left++;
      right--;
    }
  }
}

module.exports = { rotateImage };
