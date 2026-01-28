<?php
/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" 
 */

// solution 1: Brute force
function reverseWords($str) {
  $result = '';
  $currentWord = '';

  for ($i = 0; $i < strlen($str); $i++) {
    $char = $str[$i];

    if ($char === ' ') {
      //reverse current word and add to result
      $result .= strrev($currentWord);
      $result .= ' '; //add the space
      $currentWord = ''; //reset current word
    } else {
      $currentWord .= $char; //build the word
    }
  }
  //reverse and add the last word
  $result .= strrev($currentWord);

  return $result;
}
echo(reverseWords('The quick brown fox jumps over the lazy dog.'));
echo(reverseWords('apple'));
echo(reverseWords('  double  spaced  words  '));


//solution 2: clean & simplified 
function reverseWord($str) {
  //split by spaces, reverse each word, join back
  $words = explode(' ', $str);
  $reversed = array_map('strrev', $words);
  return implode(' ', $reversed);
}

?>