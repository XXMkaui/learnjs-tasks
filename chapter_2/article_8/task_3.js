"" + 1 + 0
// '10', т. к. между операндами стоит оператор +, а один из операндов является строкой => остальные операнды будут преобразованы к строковому типу
"" - 1 + 0
// -1, т.к. - и + имеют одинаковый приоритет => действия выполняются слева направо. Бинарный оператор - преобразует операнды к числу, пустая строка = 0;
// 0 - 1 = -1; -1 + 0 = -1
true + false
// 1, т. к. true преобразуется в 1, false в 0; 0 + 1 = 1
6 / "3"
// 2, т. к. бинарный оператор / преобразует операнды к числам; 6 / 3 = 2
"2" * "3"
// 6, т. к. бинарный оператор * преобразуется операнды к числам; 2 * 3 = 6
4 + 5 + "px"
// '9px', т. к. 4 + 5 = 9; 9 + 'px' преобразует операнды к строке, т. к. один из операндов - строка => '9' + 'px' = '9px' 
"$" + 4 + 5
// '$45', т. к. один из операндов - строка, то бинарный оператор + преобразует другие операторы к строке => '$' + '4' + '5' = '$45'
"4" - 2
// 2, т. к. бинарный оператор - преобразует операнды к числам; 4 - 2 = 2
"4px" - 2
// NaN, т. к. бинарный оператор - преобразует операнды к числам; '4px' = NaN; NaN - 2 = NaN
"  -9  " + 5
// '  -9   5', т. к. бинарный оператор + преобразует операнды к строке; '  -9  ' + '5' = '  -9   5'
"  -9  " - 5
// -14, т. к. бинарный оператор - преобразует операнды к числам; -9 - 5 = -14
null + 1
// 1, т. к. null преобразуется в 0; 0 + 1 = 1
undefined + 1
// NaN, т. к. undefined преобразуется в NaN; NaN + 1 = NaN
" \t \n" - 2
// -2, т. к. ' \t \n' становится ''; '' - 2 преобразуется в 0 - 2; 0 - 2 = -2