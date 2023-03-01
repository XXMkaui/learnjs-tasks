function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    let num1;
    while (!num1 || num1 == NaN) {
      num1 = +prompt('Введите первое число', '');
    }
    this.value += num1;
  }
}

const accumulator1 = new Accumulator(10);