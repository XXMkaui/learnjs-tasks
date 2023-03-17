let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// function printListReverse(list) {
//   let arr = [];
//   let interim = list;
//   while (interim) {  
//     arr.push(interim.value);
//     interim = interim.next;
//   }
//   console.log(arr.reverse().join(' '));
// }

printListReverse(list);

function printListReverse(list) {
  if (list.next) {
    printListReverse(list.next); 
  }
  console.log(list.value)
}
