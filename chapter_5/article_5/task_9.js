let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge(arr) {
  return arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

// 2 способ
//
// function sortByAge(users) {
//   for (let i = 0; i < users.length - 1; i++) {
//     for (let j = i + 1; j < users.length; j++) {
//       if (users[j].age < users[i].age) {
//         let interim = users[j];
//         users[j] = users[i];
//         users[i] = interim;
//       }
//     }
//   }
//   console.log(users);
// }

console.log(sortByAge(arr))