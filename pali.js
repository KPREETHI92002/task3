// Anonymous Function
var array = ["Guvi", "hello", "noon", "world", "madam"];

var palindromes = (function(arr) {
  return arr.filter(function(str) {
    return str === str.split('').reverse().join('');
  });
})(array);

console.log(palindromes);

// IIFE (Immediately Invoked Function Expression)
var array = ["Guvi", "hello", "noon", "world", "madam"];

var palindromes = (function(arr) {
  return arr.filter(function(str) {
    return str === str.split('').reverse().join('');
  });
})(array);

console.log(palindromes);

// Arrow Function
var array = ["Guvi", "hello", "noon", "world", "madam"];

var palindromes = ((arr) => {
  return arr.filter((str) => {
    return str === str.split('').reverse().join('');
  });
})(array);

console.log(palindromes);
