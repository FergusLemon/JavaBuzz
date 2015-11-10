var Javabuzz = function() {};

Javabuzz.prototype.isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype.says = function(number) {
  if (number === 0) {
    return number;
  }
  if (this.isDivisibleBy(number, 15)) {
    return "JavaBuzz";
  }
  if (this.isDivisibleBy(number, 5)) {
    return "Buzz";
  }
  if (this.isDivisibleBy(number, 3)) {
    return "Java";
  }
  return number;
};
