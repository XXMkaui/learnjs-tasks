function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}

// Функции равны, т. к. если age > 18, то в обоих случаях возвратится значние true и функция закончит свое выполнение, else в случае
// age > 18 будет игнорироваться