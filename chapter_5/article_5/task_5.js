function copySorted(arr) {
  let newArr = arr.slice().sort();
  return newArr;
}

let arr = ["HTML", "JavaScript", "CSS"];

console.log(copySorted(arr));
console.log(arr);