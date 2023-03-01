function Calculator() {
  this.read = function() {
    let num1;
    while (!num1 || num1 == NaN) {
      num1 = +prompt('Введите первое число', '');
    }
    this.num1 = num1;

    let num2;
    while (!num2 || num2 == NaN) {
      num2 = +prompt('Введите второе число', '');
    }
    this.num2 = num2;
  }

  this.sum = function() {
    return this.num1 + this.num2;
  }

  this.mul = function() {
    return this.num1 * this.num2;
  }
}

const calc1 = new Calculator()