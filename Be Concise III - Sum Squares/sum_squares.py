"""
You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array.
"""
# solution 01: Use array methods to map(square) then reduce(sum).
def sum_squares(array):
  return sum(map(lambda x: x ** 2, array))