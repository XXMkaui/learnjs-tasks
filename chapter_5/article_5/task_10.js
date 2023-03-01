function shuffle(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[Math.floor(Math.random() * array.length)]);
  }
  return result;
}

let arr = [1, 2, 3];
console.log(shuffle(arr));