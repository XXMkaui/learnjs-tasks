let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // true, т. к. rabbit имеет свое собственное свойство jumps => в прототипе это свойство искаться не будет

delete rabbit.jumps;

alert( rabbit.jumps ); // null, т. к. в rabbit больше нет свойства jumps => оно будет искаться в прототипе

delete animal.jumps;

alert( rabbit.jumps ); // undefined, т. к. ни у себя, ни в прототипе такого свойство не обнаружено