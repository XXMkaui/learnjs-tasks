function getSecondsToday() {
  let curr = new Date();
  return curr.getHours() * 3600 + curr.getMinutes() * 60 + curr.getSeconds();
}