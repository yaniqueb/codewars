/*The goal of this exercise is to convert a string to a new string
where each character in the new string is "(" 
if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.
*/
//Examples
/* "din"      =>  "(((" (all unique)
"recede"   =>  "()()()" (r=once,e=3times,c=once,e=3times, )
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/

function duplicateEncode(word) {
    // Convert to lowercase so 'A' and 'a' are treated the same
    word = word.toLowerCase();
    let result = '';
    
    // For each character in the word
    for (let i = 0; i < word.length; i++) {
        let count = 0;
        
        // Count how many times this character appears in the whole word
        for (let j = 0; j < word.length; j++) {
            if (word[i] === word[j]) {
                count++;
            }
        }
        
        // If it appears more than once, add ')', otherwise add '('
        if (count > 1) {
            result += ')';
        } else {
            result += '(';
        }
    }
}    
