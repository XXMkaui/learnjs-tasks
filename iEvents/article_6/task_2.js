goTop.hidden = true;
goTop.onclick = function () {
  window.scrollTo(0, 0)
}
window.onscroll = function () {
  goTop.hidden = window.scrollY < window.innerHeight ? true : false
}