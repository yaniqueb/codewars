/* We need a function that can transform a string into a number. What ways of achieving this do you know?
Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234"  --> 1234
"605"   --> 605
"1405"  --> 1405
"-7"    --> -7
*/

// solution 1: Use js built-in parser designed specifically for this 
function stringToNumber(str) {
  return parseInt(str);
}

//Examples
console.log(parseInt("1234"));  // 1234
console.log(parseInt("605"));   // 605
console.log(parseInt("1405"));  // 1405
console.log(parseInt("-7"));    // -7