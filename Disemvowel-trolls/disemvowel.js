//Trolls are attacking your comment section!
/* A common way to deal with this situation is to remove all the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.  
For Example, the string "This website is for Losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note y isn't considered a vowel.*/
/*
Examples:
- "This website is for losers LOL!" → "Ths wbst s fr lsrs LL!"
- "Hello World" → "Hll Wrld"
- "AEIOU" → ""
- "bcdfg" → "bcdfg" (no vowels to remove)
*/

//Brute Force (Loop & Check Each Character)
function disemvowel (str) {
  let result = '';
  let vowels = 'aeiouAEIOU'; // all vowels to check against

  //check if this character is a vowel
  let isVowel = false;
  for (let j = 0; j < vowels.length; j++) {
    if (char === vowels[j]) {
      isVowel = true;
      break; //found it, stop looking
    }
  
    //If it's NOT a vowel, add it to result
    if(!isVowel) {
      result += char;
    }
  }
  return result;
}


//Optimized (Using Set for fast Lookup)
function disemvowel(str) {
    let result = '';
    // Set provides O(1) lookup time!
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
    for (let char of str) {
        // has() checks set membership in O(1) time
        if (!vowels.has(char)) {
            result += char;
        }
    }
    
    return result;
}