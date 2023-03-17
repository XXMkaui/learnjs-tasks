// Если не перезаписан prototype у функциик конструктора, то сработает

function Animal(color) {
  this.color = color;
}

let animal1 = new Animal('black');
let animal2 = new animal1.constructor('white');

// Если перезаписать prototype, то undefined

function Animal(color) {
  this.color = color;
}

Animal.prototype = {}

let animal1 = new Animal('black');
let animal2 = new animal1.constructor('white');