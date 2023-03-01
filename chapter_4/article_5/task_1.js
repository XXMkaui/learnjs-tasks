// Да, например: 

const there = {}
function A(name) {
  there.name = name;
  return there
}

function B(name) {
  there.name = name;
  return there;
}

let a = new A('George');
let b = new B('George');

console.log(a);
console.log(b);
console.log(a == b);

