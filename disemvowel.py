#Trolls are attacking your comment section!
# A common way to deal with this situation is to remove all the vowels from the trolls' comments, neutralizing the threat.
# Your task is to write a function that takes a string and return a new string with all vowels removed.  
# For Example, the string "This website is for Losers LOL!" would become "Ths wbst s fr lsrs LL!".
# Note y isn't considered a vowel.*/

# Examples:
# - "This website is for losers LOL!" → "Ths wbst s fr lsrs LL!"
# - "Hello World" → "Hll Wrld"
# - "AEIOU" → ""
# - "bcdfg" → "bcdfg" (no vowels to remove)

# Brute Force (Loop & Check Each Character)
def disemvowel (string):
  result = ''
  vowels = 'aeiouAEIOU' # all vowels to check against

  # go through each character in the string
  for char in string:
    #check if this character is a vowel
    is_vowel = False
    for vowel in vowels:
      if char == vowel:
        is_vowel = True
        break # found it, stop looking

    # if it's NOT a vowel, add it to result
    if not is_vowel:
      result += char

  return result


# Optimized (using set for fast Lookup)
def disemvowel(string):
    result = ''
    # Set provides O(1) lookup time!
    vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}
    
    for char in string:
        # 'in' on sets is O(1)
        if char not in vowels:
            result += char
    
    return result