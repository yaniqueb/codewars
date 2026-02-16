<?php
// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array.

// solution 01: using built-in functions to square and sum
function sumSquares($array) {
    $squared = array_map(function($num) {
        return $num ** 2;
    }, $array);
    
    return array_sum($squared);
}

?>