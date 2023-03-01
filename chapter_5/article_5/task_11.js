function getAverageAge(users) {
  return users.reduce((x, y) => x + y.age, 0) / users.length 
}

// 2 способ
//
// function getAverageAge(users) {
//   let sum = 0;
//   for (let i of users) {
//     sum += i.age;
//   }
//   return sum / users.length;
// }



let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr));