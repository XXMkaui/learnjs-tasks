let n = prompt("Введите n: ");
label: for (let i = 2; i <= n; i++) {
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) continue label
  }
  alert(i)
}