"""
You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array.
"""
# solution 01: Use array methods to map(square) then reduce(sum).
def sum_squares(array):
  return sum(map(lambda x: x ** 2, array))

# solution 02: combine squaring and summing in a single reduce operation
from functools import reduce

def sum_square(array):
  return reduce(lambda sum, num: sum + num ** 2, array, 0)

# but python's sum() with generator is more idiomatic
def sum_squares(array):
  return sum(x ** 2 for x in array)