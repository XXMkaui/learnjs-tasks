let list = document.querySelectorAll('li');

for (let e of list) {
  let n = e.getElementsByTagName('li').length;
  if (n == 0) continue;
  e.firstChild.data += ' [' + n + ']';
}