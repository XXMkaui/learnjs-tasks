function sum(num) {
  let sum = num;
  const step = (num2) => {
    sum += num2;
    return num2;
  }

  // ?
  step.toString = () => sum;
  return step;
}