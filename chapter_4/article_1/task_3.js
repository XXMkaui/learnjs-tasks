const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete";

// Да, объект, объявленный через const, лишь защищает user от переприсваивания. Сами же свойства могут быть изменены, удалены