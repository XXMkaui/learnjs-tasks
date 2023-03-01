let x = prompt("Введите x: ", '');
let n = prompt("Введите n: ", '');

function pow(x, n) {
  let interim = x;
  for (let i = 1; i < n; i++) {
    interim *= x;
  }
  return interim;
}

if (n < 1) {
  alert('Число n должно быть натуральным!')
} else alert(pow(x, n))