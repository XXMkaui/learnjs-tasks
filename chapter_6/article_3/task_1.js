function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ?

// вызов функции counter2 покажет 0 и 1, т. к. counter и counter2 - две разные объявленные переменные, которым присвоена функция =>
// они имеют свое окружение