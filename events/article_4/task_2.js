let main = document.getElementById('contents');

main.addEventListener('click', (e) => {
  let a = e.a.closest('a');
  if (a && main.contains(a)) {
    let isVisited = confirm(`Out from ${a.getAttribute('href')}?`);
    if (isVisited) return 1
    e.preventDefault()
  }
});