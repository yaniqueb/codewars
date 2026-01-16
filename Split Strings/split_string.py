"""
Complete the solution so that it splits the string into pairs of two characters. If the string contains 
an odd number of characters then it should replace the missing second character of the final pair with an 
underscore ('_'). 

Examples
"abc"     => ['ab', 'c_']
"abcedf"  => ['ab', 'cd', 'ef']
"a"       => ['a_']
""        => []
"""

# solution 1: Loop through the string manually, grabbing 2 characters at a time, and handle the odd case at the end.
def split_strings(s):
  result = []

  for i in range(0, len(s), 2):
    pair = s[i + 1] # Add second character if it exists
  else:
    pair += '_' #Add underscore if second character dosen't exist
    
    result.append(pair)

  return result

# solution 2: simplified code
def split_string(s):
  # handle odd length by adding uncerscore
  if len(s) % 2 != 0:
    s += '_'

  result = []
  for i in range(0, len(s), 2):
    result.append(s[i:i+2])

  return result

