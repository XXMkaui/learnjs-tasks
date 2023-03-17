let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null
        }
      }
    }
  }
};

// function printList(list) {
//   let interim = list;
//   while (interim) {  
//     console.log(interim.value);
//     interim = interim.next;
//   }
// }

printList(list)

function printList(list) {
  if (list) {
    console.log(list.value);
    return printList(list.next)
  }
}

