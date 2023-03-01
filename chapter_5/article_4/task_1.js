let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?

// 4, т. к. переменные fruits и shoppingCart ссылаются на один и тот же массив (подвид объекта)