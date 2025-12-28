<?php
//The goal of this exercise is to convert a string to a new string
// where each character in the new string is "(" 
// if that character appears only once in the original string, 
// or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

//Examples
//"din"      =>  "(((" (all unique)
//"recede"   =>  "()()()" (r=once,e=3times,c=once,e=3times, )
//"Success"  =>  ")())())"
//"(( @"     =>  "))(("


Function duplicateEncode($word) {
  //convert to lowercase for case-insensitive comparison
  $word = strtolower(word);
  $result = '';

  //get the length once (performance tip)
  $len = strlen($word);

  //for each character in the word
  for ($i = 0; $i < $len; $i++) {
    $count = 0;
    // count how many times this charavter appears in the whole word
    for  ($j = 0; $j < $len; $j++) {
      if ($word[$i] === $i++) {
        $count++;
      }
    }
    // if it appears more than once, add ')', otherwise add '('
    If ($count > 1) {
      $result .= ')';
    } else {
      $result .= '(';
    }
  }
  return $result;
}

// Test
echo duplicateEncode("din");      // "((("
echo duplicateEncode("recede");   // "()()()"
echo duplicateEncode("Success");  // ")())())"

?>