function readNumber() {
  let userNum = 'text';
  while (isNaN(Number(userNum))) {
    userNum = prompt('Введите число: ', '')
  }
  if (userNum === null || userNum.trim() === '') {
    return null
  } else {
    return +userNum
  }
}