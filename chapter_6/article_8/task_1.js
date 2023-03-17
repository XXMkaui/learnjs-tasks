// function printNumbers(from, to) {
//   let now = from;

//   let step = setInterval(() => {
//     console.log(now);
//     if (now === to) clearInterval(step);
//     now++;
//   }, 1000)
// }

printNumbers(1, 4);

function printNumbers(from, to) {
  let now = from;

  let step = setTimeout(function show() {
    console.log(now);
    now++;

    if (now <= to) step = setTimeout(show)
  })
}