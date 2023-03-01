let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];
let usersMapped = [];

users = users.map(value => ({ fullname: value.name + ' ' + value.surname, id: value.id}))

// 2 способ
//
// for (let i of users) {
//   usersMapped.push({fullname: i.name + ' ' + i.surname, id: i.id});
// }

// console.log(usersMapped);


console.log(users)