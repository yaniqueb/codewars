"""
Docstring for Reverse-words.reverse_words
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
"""

# solution 1: Brute force
def reverse_words(text):
  result = ''
  current_word = ''

  for char in text:
    if char == ' ':
      # reverse current word and add to result
      result += current_word[::-1]
      result += ' ' #add the space
      current_word = '' #reset current word
    else:
      current_word += char #build the word

      #reverse and add the last word
  result += current_word[::-1]

  return result

print(reverse_words('The quick brown fox jumps over the lazy dog.'))
print(reverse_words('apple'))
print(reverse_words('  double  spaced  words  '))

# solution 2: clean/readable
def reverse_word(text):
  # split by spaces, reverse each word, join back
  return ' '.join(word[::-1]for word in text.split(' '))