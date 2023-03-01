let name = "Ilya";

alert( `hello ${1}` ); 
// вывод: 'hello 1', т. к. в ${1} вычисляется значение числа 1

alert( `hello ${"name"}` ); 
// вывод: 'hello "name"', т. к. в ${"name"} передается строка, а не вычисляется значение переменной name

alert( `hello ${name}` ); 
// вывод: 'hello Ilya', т.к. в ${name} вычисляется значение переменной name