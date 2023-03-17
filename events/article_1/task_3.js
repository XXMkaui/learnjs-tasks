button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);

// Вывод: 1 => удаляется событие, которого нет, т. к. removeEvent удаляет именно функцию => Вывод: 2