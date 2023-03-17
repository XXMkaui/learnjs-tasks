function f() {
  console.log('Hello!');
}

Function.prototype.defer = function(ms) {
  setTimeout(() => {
    f()
  }, ms)
}

f.defer(1000);

