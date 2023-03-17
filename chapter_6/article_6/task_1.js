function makeCounter() {
  let count = 0;
  let counter = () => count++
  counter.set = value => count = value
  counter.decrease = () => count--
  return counter;
}