/*
You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array.
*/

// Solution 01: Use array methods to map(square) then reduce(sum)
function sumSquares(array) {
  return array
    .map(num => num * num)
    .reduce((sum, squared) => sum + squared, 0);
}

// solution 02: single pass reduce with exponentiation
function sumSquare(array) {
  return array.reduce((sum, num) => sum + num ** 2, 0);
}