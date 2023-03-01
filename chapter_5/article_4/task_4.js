function sumInput() {
  let arr = []
  while (true) {
    n = prompt('Введите число: ')
    if (!(n === null || n.trim() === '' || isNaN(+n))) {
      arr.push(+n);
    }
    else break
  }
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum
}

console.log(sumInput())
