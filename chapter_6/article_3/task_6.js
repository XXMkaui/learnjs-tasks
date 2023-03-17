let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(row) {
  return function(a, b) { 
    a[row] > b[row] ? 1 : -1; 
  }
}