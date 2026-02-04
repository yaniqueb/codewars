/* 
Details: Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples:
16  	-->  1 + 6 = 7
942  	-->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

//Solution 1: Brute Force Iterative with Math
function digitalRoot(n) {
  while (n >= 10) {
    let sum = 0;
    //extract each digit and sum them
    while (n > 0) {
      sum += n % 10;  //get last digit
      n = Math.floor(n/10);  //remove last digit
    }
    n = sum;  // set n to the new sum
  }
  return n;
}

// solution 2: String Conversion
function digitalRoots(n) {
  while (n >= 10){
    let sum =0;
    const digits = String(n).split('');

    for (const digit of digits) {
      sum += Number(digit);
    }
    n = sum
  }
  return n;
}