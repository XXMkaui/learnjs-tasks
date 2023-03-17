function runOnKeys(func, ...codes) {
  let keyOn = new Set();

  let everyOn = false;
  document.addEventListener('keydown', e => {
    keyOn.add(e.code);
    for (let code of codes) {
      everyOn = keyOn.has(code) ? true : false
    }
    if (everyOn) {
      keyOn.clear();
      func();
    }
  });

  document.addEventListener('keyup', e => {
    keyOn.delete(e.code);
  })
}