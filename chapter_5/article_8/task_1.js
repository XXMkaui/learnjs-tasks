let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

// WeakSet, т. к. коллекция должна быть уникальной, чтобы не хранить сообщение, прочтенное несколько раз

let checkedMsg = new WeakSet();
checkedMsg.add(messages[0]) 
// и т. д.