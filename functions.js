/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
function numberToString(number) {
  var n = number.toString();
  return (n);
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function increase(number) {
  var n = number + 1;
  return (n);
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease(number) {
  var n = number -1;
  return (n);
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x, y) {
  return (x + y);
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract(x, y) {
  return (x - y);
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(x, y) {
  return (x * y);
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(x, y) {
  return (x / y);
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(x) {
  return (x * x);
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function calculate(ops, x, y) {
var result;

  if (ops === "add") {
    console.log(x + ' + ' + y + ' = ' + add(x, y));
    result = add(x, y);
  }
  else if (ops === "subtract") {
    console.log(x + ' - ' + y + ' = ' + subtract(x, y));
    result = subtract(x, y);
  }
  else if (ops === "multiply") {
    console.log(x + ' * ' + y + ' = ' + multiply(x, y));
    result = multiply(x, y);
  }
  else if (ops === "divide") {
    console.log(x + ' / ' + y + ' = ' + divide(x, y));
    result = divide(x, y);
  }
return result;
}


/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function minimum(x, y) {
  return Math.min(x, y);
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum(x, y) {
  return Math.max(x, y);
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd(number) {
  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function letterGrade(score, total) {
  var score;

  var calc = (score/total) * 100;

  switch (true) {
    case (calc >= 90 && calc <= 100):
      return "A";
      break;
    case (calc >= 80 && calc < 90):
      return "B";
      break;
    case (calc >= 70 && calc < 80):
      return "C";
      break;
    case (calc >= 60 && calc < 70):
      return "D";
      break;
    case (calc >= 0 && calc < 60):
      return "F";
      break;
  }
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
function incrementReviews(restaurant) {

  if (restaurant.reviews > 0) {
    restaurant.reviews++;
  } else {
    restaurant.reviews = 1;
  }

  return restaurant;
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function combine(word1, word2) {
  return (word1 + " " + word2);
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
function createCircle(radius) {

  var circle = {
    circumference: 2 * Math.PI * radius,
    area: Math.PI * square(radius)
  };
  return circle;
}
