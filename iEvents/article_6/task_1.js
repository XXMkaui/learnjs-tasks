function iScroll() {

  while (true) {
    let main = document.documentElement.getBoundingClientRect().bottom;
    let height = document.documentElement.clientHeight;
    if (main > pageHeight + 100) break;
    document.body.insertAdjacentHTML("beforeend", `Date: ${new Date()}`);

  }
}
iScroll();
