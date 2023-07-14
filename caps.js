// Anonymous Function
var stringArray = ["Hi", "guvi", "assignment"];

var titleArray = (function(arr) {
  return arr.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
})(stringArray);

console.log(titleArray);

// IIFE 
var stringArray = ["Hi", "guvi", "assignment"];

var titleArray = (function(arr) {
  return arr.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
})(stringArray);

console.log(titleArray);

// Arrow Function
var stringArray = ["Hi", "guvi", "assignment"];

var titleArray = ((arr) => {
  return arr.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
})(stringArray);

console.log(titleArray);
