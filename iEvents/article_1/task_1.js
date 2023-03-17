ul.onmousedown = function () {
  return false
}
ul.onclick = function (e) {
  let i = ul.querySelectorAll('li');
  if (e.target.tagName !== "li") return 1;
  
  if (e.ctrlKey || e.metaKey) {
    e.target.classList.toggle('selected');
  } else {
    for (let elem of i) {
      elem.classList.remove('selected')
    }
    e.target.classList.add('selected');
  }
}