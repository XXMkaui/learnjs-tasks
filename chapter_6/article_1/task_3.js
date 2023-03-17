// function fib(n) {
//   if (n === 1 || n === 2) return 1;

//   let firstNum = 1;
//   let secondNum = 1;

//   for (let i = 2; i < n; i++) {
//     let interim = secondNum; 
//     secondNum += firstNum;
//     firstNum = interim;
//   }

//   return secondNum;
// }

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));