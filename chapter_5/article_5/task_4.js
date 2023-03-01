let arr = [5, 2, 1, -10, 8];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] > arr[i]) {
      let interim = arr[j];
      arr[j] = arr[i];
      arr[i] = interim;
    }
  }
}

// 2 способ
//
// arr.sort((a, b) => b - a);

console.log(arr);