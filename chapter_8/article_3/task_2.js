function f(a, b) {
  console.log( a + b );
}

Function.prototype.defer = function(ms) {
  let sum = this;
  return function(...args) {
    setTimeout(() => sum.apply(this, args), ms);
  }
};

f.defer(1000)(1, 2);