let userLogin = prompt('Кто там?', '');
if (userLogin === 'Админ') {
  let userPass = prompt('Пароль?', '');
  if (userPass === 'Я Главный') {
    alert('Здравствуйте!')
  } else if (userPass === null || userPass === '') {
    alert('Отменено')
  } else {
    alert('Неверный пароль')
  }
} else if (userLogin === null || userLogin === '') {
  alert('Отменено')
} else {
  alert('Я вас не знаю')
}