function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Т. к. Math.random() работает в полуинтервале [0, 1), то необходимо увеличить стартовую позицию до min, используя min + Math.random()
// умножение на (max - min) ограничивает max в Math.random 