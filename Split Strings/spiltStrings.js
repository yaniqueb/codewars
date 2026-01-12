/* Complete the solution so that it splits the string into pairs of two characters. If the string contains 
an odd number of characters then it should replace the missing second character of the final pair with an 
underscore ('_'). 

Examples
"abc"     => ['ab', 'c_']
"abcedf"  => ['ab', 'cd', 'ef']
"a"       => ['a_']
""        => []
*/

//Solution #1: Loop through the string manually grabbing 2 characters at a time, and handling the odd case at the end.
function splitStrings(str) {
  const result = [];

  // get first character
  for (let i = 0; i < str.length; i += 2) {
    let pair = str[i];

    if (i + 1 < str.length) {
      let pair = str[i];

      if (i + 1 < str.length) {
        pair += str[i + 1]; // Add second character if it exists
      } else {
        pair += "_"; // Add underscore if second character doesn't exist
      }
      result.push(pair);
    }
  }
  return result;
}