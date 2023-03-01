let user = {
  name: "Василий Иванович",
  age: 35
};

user = JSON.stringify(user);
let newUser = JSON.parse(user);

console.log(user);
console.log(newUser);