function Calculator() {
  this.operations = {
    '+': (a, b) => a + b ,
    '-': (a, b) => a - b ,
  }

  this.calculate = function (str) {
    str = str.split(' ')
    return this.operations.hasOwnProperty(str[1]) ? this.operations[str[1]](+str[0], +str[2]) : 0
  }

  this.addMethod = function (name, func) {
    this.operations[name] = func;
  }
}

let calc = new Calculator();
console.log(calc.calculate('9 + 12'))
calc.addMethod('*', (a, b) => a * b)
console.log(calc.calculate('9 * 10'))