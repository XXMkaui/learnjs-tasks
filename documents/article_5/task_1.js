for (let e of document.querySelectorAll('li')) {
  let eName = e.firstChild.data.trim();
  let count = e.getElementsByTagName('li').length;

  alert(eName + ': ' + count);
}