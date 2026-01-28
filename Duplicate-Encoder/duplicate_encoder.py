"""
The goal of this exercise is to convert a string to a new string
where each character in the new string is "(" 
if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "(((" (all unique)
"recede"   =>  "()()()" (r=once,e=3times,c=once,e=3times, )
"Success"  =>  ")())())"
"(( @"     =>  "))(("
"""
def duplicate_encode(word):
    # Convert to lowercase so 'A' and 'a' are treated the same
    word = word.lower()
    result = ''
    
    # For each character in the word
    for i in range(len(word)):
        count = 0
        
        # Count how many times this character appears in the whole word
        for j in range(len(word)):
            if word[i] == word[j]:
                count += 1
        
        # If it appears more than once, add ')', otherwise add '('
        if count > 1:
            result += ')'
        else:
            result += '('
    
    return result


# solution 2 : Using Built-in count function
def duplicate_encoder(word):
    # convert the word to lowercase to ignore capitalizations
    word = word.lowercase()
    result = ''

    #for each character use pythons built-in count() method
    for char in word:
        if word.count(char) > 1:
            result += ')'
        else:
            result += '('

    return result