<?php
/*Trolls are attacking your comment section!
A common way to deal with this situation is to remove all the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.  
For Example, the string "This website is for Losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note y isn't considered a vowel.

Examples:
- "This website is for losers LOL!" → "Ths wbst s fr lsrs LL!"
- "Hello World" → "Hll Wrld"
- "AEIOU" → ""
- "bcdfg" → "bcdfg" (no vowels to remove)
*/

//loop with strpos()Check
function disemvowel($str) {
  $result = '';
  $vowels = 'aeiouAEIOU';

  for($i = 0; $i < strlen($str); $i++) {
    //strpos returns false if not found
    if (strpos($vowels, $str[$i]) === false) {
      $result .= $str[$i];
    }
  }
  return $result;
}


?>