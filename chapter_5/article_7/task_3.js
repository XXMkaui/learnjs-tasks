let map = new Map();

map.set("name", "John");

// Необходимо добавить:
let keys = Array.from(map.keys());
//

keys.push("more");

console.log(keys)