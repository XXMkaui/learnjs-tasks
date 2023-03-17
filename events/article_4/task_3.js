let t = document.getElementById('thumbs')

t.onclick = function (e) {
  let item = e.target;
  if (item.tagName == "img") {
    let href = item.closest("a").href
    largeImg.src = href;
    event.preventDefault()
  }
}