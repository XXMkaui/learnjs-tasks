let calculator = {
  read() {
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
  },

    sum() {
      return this.num1 + this.num2;
    },

    mul() {
      return this.num1 * this.num2;
    }
};

calculator.read();
