<?php
// We need a function that can transform a string into a number. What ways of achieving this do you know?
//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234"  --> 1234
// "605"   --> 605
// "1405"  --> 1405
// "-7"    --> -7


// solution 1: use php's explicit type casting
// Note: generally faster than using built-in intval() function, but cannot be used in callback functions like array_map()

function stringToNumber($str) {
  return (int)$str;
}

// Examples
echo (int)"123";   // 123
echo (int)"-456";  // -456
echo (int)"0";     // 0


//solution 2: build the number digit by digit (Brute Force)
function stringToNumbers($str){
  $result = 0;
  $isNegative = False;
  $startIndex = 1;

  //check for negative sign
  if ($str[0] === '-') {
    $isNegative = True;
    $startIndex = 1;
  }

  //process each digit
  for ($i = $startIndex; $i < strlen($str); $i++) {
    $digit = ord($str[$i]) - ord('0');
    $result = $result * 10 + $digit;
  }
  return $isNegative ? -$result : $result;
} 
?>