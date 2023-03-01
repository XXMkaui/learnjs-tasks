function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?

// Ошибка, т. к. this в данном случае = this функции makeUser (undefined). Прочесть метод из undefined нельзя, поэтому - ошибка