/**
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 * 
 */

//solution 1: manually identify words, reverse each char by char then rebuild the string preserving spaces.
function reverseWords(str) {
  let result = '';
  let currentWord = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === ' ') {
      //reverse current word and add to result
      for (let j = currentWord.length - 1; j >= 0; j--){
        result += currentWord[j];
        }
      result += ' '; //add the space
      currentWord = ''; //reset current word
    } else {
      currentWord += char; //build the word
    }
  }
  for (let j = currentWord.length - 1; j >= 0; j--) {
    result += currentWord[j];
  }
  return result
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log(reverseWords('apple'));
console.log(reverseWords('  double  spaced  words  '));


// solution 2: using js buil-in functions 
function reverseWords(str) {
  return str.split(' ').map(word => [...word].reverse().join('')).join(' ');
}

