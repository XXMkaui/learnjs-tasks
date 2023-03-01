function camelize(str) {
  str = str.split('');
  str = str.map((value, i, arr) => { if (value === '-') arr[i + 1] = arr[i + 1].toUpperCase();  return value } )
           .filter(value => value !== '-')
  return str.join('');
}

// 2 способ
//
// function camelize(str) {
//   str = str.split('');
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '-') {
//       str[i + 1] = str[i + 1].toUpperCase();
//       str = str.slice(0, i).concat(str.slice(i + 1));
//     }
//   }
//   return str.join('');
// }

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));