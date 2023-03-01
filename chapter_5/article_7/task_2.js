function aclean(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].toLowerCase().split('').sort().join('') == arr[j].toLowerCase().split('').sort().join('')) {
        arr.splice(j, 1);
      }
    }
  }
  return arr
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));