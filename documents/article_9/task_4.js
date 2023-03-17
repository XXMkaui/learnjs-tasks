// 1. clientWidth = размер - полоса прокрутеи; getComputerStyle(elem).width - производит предварительные вычисления
// 2. clientWidth учитывает padding; getComputedStyle(elem).width может не учитывать, если не border-box
// 3. getComputedStyle(elem).width - String; clientWidth - Number