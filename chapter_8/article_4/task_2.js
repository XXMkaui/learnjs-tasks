function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // rabbit, т. к. вызывается метод у объекта rabbit
Rabbit.prototype.sayHi(); // undefined, констркутор не содержит метода 
Object.getPrototypeOf(rabbit).sayHi(); // undefined, т. к. прототип не имеет этого метода
rabbit.__proto__.sayHi(); // undefined, т. к. прототип не имеет этого метода