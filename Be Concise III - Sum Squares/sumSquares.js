/*
You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array.
*/

// Solution 01: Use array methods to map(square) then reduce(sum)
function sumSquares(array) {
  return array
    .map(num => num * num)
    .reduce((sum, squared) => sum + squared, 0);
}