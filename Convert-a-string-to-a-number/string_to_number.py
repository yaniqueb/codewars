# We need a function that can transform a string into a number. What ways of achieving this do you know?
# Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

# Examples
# "1234"  --> 1234
# "605"   --> 605
# "1405"  --> 1405
# "-7"    --> -7


# solution 1: use pythons's built-in parse function
def string_to_number(s) :
  return int(s)

#Examples
print(int("1234"))  # 1234
print(int("605"))   # 605
print(int("1405"))  # 1405
print(int("-7"))    # -7

# Solution 2: Brute force
def string_to_numbers(s) :
  result = 0
  is_negative = False
  start_index = 0

  # check for negative sign
  if s[0] == '-':
    is_negative = True
    start_index = 1
  
  # Process each digit
  for i in range(start_index, len(s)):
    digit = ord(s[i]) - ord('0') # convert char to digit
    result = result * 10 + digit

  return -result if is_negative else result