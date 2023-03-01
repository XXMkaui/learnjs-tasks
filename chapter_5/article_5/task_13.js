let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

// 2 способ (без reduce)
//
// function groupById(users) {
//   let result = {}
//   for (let i of users) {
//     result[i.id] = i;
//   }
//   return result
// }

let usersById = groupById(users);


console.log(usersById)