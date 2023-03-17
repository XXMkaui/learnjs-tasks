tree.addEventListener('click', function (e) {
  let item = e.target;
  if (item.tagName == 'li' && item.childElementCount) {
      item.children[0].hidden = !item.children[0].hidden;
  }
});