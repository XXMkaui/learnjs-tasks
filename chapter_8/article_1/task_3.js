let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

// Свойство full получить объект rabbit, т. к. animal не имеет свойства full, а лишь метод eat, который добавляет свойство full в тот объект,
// который вызвал этот метод (rabbit в нашем случае)