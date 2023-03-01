function getMaxSubSum(arr) {
  if (arr.length === 0) return 0;

  let max = -Infinity;
  let negNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) negNum++;

    let sum = arr[i];
    if (sum > max) max = sum;

    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum > max) max = sum;
    }
  }
  return negNum === arr.length ? 0 : max;
}

console.log(getMaxSubSum([2, -1, 2, 3, -9]))
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
console.log(getMaxSubSum([-2, -1, 1, 2]))
console.log(getMaxSubSum([100, -9, 2, -3, 5]))
console.log(getMaxSubSum([1, 2, 3]))