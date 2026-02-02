<?php
//Given n, take the sum of the digits of n. 
// If that value has more than one digit, 
// continue reducing in this way until a 
// single-digit number is produced. 
// The input will be a non-negative integer.
//Examples:
//16  	-->  1 + 6 = 7
//942  	-->  9 + 4 + 2 = 15  -->  1 + 5 = 6
//132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
//493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

//Solution 1: Loop until single digit, using modulo and division to extract digits
function digital_root($n) {
  //keep summing until we have a single digit
  while ($n >= 10) {
    $sum = 0;

    //extract each digit and sum them
    while ($n > 0) {
      $sum += $n % 10;  // get last digit
      $n = intdiv($n, 10);  //remove last digit
    }
    $n = $sum;  //set n to the new sum
  }
  return $n;
}


?>