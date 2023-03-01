let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

// WeakMap

let msgRead = new WeakMap();
msgRead.set(messages[0], /*data*/)
