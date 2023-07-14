
// Anonymous Function
const primesUsingAnonymous = function (arr) {
  return arr.filter(function (num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
};

console.log(primesUsingAnonymous([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// IIFE (Immediately Invoked Function Expression)
const primesUsingIIFE = (function (arr) {
  return arr.filter(function (num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(primesUsingIIFE);


// Arrow Function
const primesUsingArrow = (arr) => {
  return arr.filter((num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
};

console.log(primesUsingArrow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
