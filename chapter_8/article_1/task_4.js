let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],

  __proto__: hamster
};

let lazy = {
  stomach: [],

  __proto__: hamster
};

speedy.eat("apple");
console.log( speedy.stomach ); 

console.log( lazy.stomach ); 

// Вызывая метод this.stomach.push(food) у любого хомяка мы не находим ни у одного из них свойство stomach, поэтому
// ищем его и изменяем соотвественно в прототипе 