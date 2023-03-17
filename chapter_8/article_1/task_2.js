let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

// 2. Быстрее напримую через head.glasses, но в дальнейшем вызов pockets.glasses производете хеширование, так что последующий вызов будет такой же
// быстрый как и head.glasses