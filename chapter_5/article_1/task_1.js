let str = "Привет";

str.test = 5;

alert(str.test);

// undefined, т. к. объект-обертка над str не имеет свойства test