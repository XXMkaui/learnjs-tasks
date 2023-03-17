function createTree(main, o) {
  main.innerHTML = innerText(o);
}

const innerText = o => {
  let e = '';
  let ul;
  for (let key in obj) {
    e += '<li>' + key + innerText(obj[key]) + '</li>';
  }
  if (e) ul = '<ul>' + e + '</ul>'
  return ul ? ul : ''
}

createTree(main, data);