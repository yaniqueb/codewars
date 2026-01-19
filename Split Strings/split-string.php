<?php
// Complete the solution so that it splits the string into pairs of two characters. If the string contains 
// an odd number of characters then it should replace the missing second character of the final pair with an 
// underscore ('_'). 

// Examples
// "abc"     => ['ab', 'c_']
// "abcedf"  => ['ab', 'cd', 'ef']
// "a"       => ['a_']
// ""        => []

// Solution 1: Loop through the string manually
function splitString($str) {
  $result = [];

  for ($i = 0; $i < strlen($str); $i += 2) {
    $pair = $str[$i]; // Get first character

    if ($i + 1 < strlen($str)) {
      $pair . $str[$i + 1]; // Add second character if it exists
    } else {
      $pair . '_'; // Add underscore if second character dosen't exist
    }
    $result[] = $pair;
  }
  return result;
}

//solution 2 : use built-in string slicing
function splitStrings($str) {
  // handle odd length by adding underscore
  if (strlen($str) % 2 != 0) {
    $str .= '_';
  }

  $result = [];
  for ($i = 0; $i < strlen($str); $i += 2) {
    $result[] = substr($str, $i, 2);
  }
  return $result;
}









?>