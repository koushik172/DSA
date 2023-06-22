var divide = function (dividend, divisor) {
  let result = 0;
  if (dividend > 0) {
    if (divisor > 0) {
      while (dividend >= divisor) {
        dividend = dividend - divisor;
        result++;
      }
    } else {
      while (dividend >= Math.abs(divisor)) {
        dividend = dividend + divisor;
        result--;
      }
    }
  } else if (dividend < 0) {
    if (divisor > 0) {
      while (Math.abs(dividend) >= divisor) {
        dividend = dividend + divisor;
        result--;
      }
    } else {
      while (Math.abs(dividend) >= Math.abs(divisor)) {
        dividend = dividend - divisor;
        result++;
      }
    }
  }
  return result;
};

console.log(divide(7, 3));
console.log(divide(7, -3));
console.log(divide(-7, 3));
console.log(divide(-7, -3));