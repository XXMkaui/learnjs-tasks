thumb.addEventListener('mousedown', function (e) {
  function msUp() {
    document.removeEventListener('mousemove', msOn);
    document.removeEventListener('mouseup', msUp);
  }

  let p = e.clientX - thumb.getBoundingClientRect().left;
  document.addEventListener('mousemove', msOn);
  document.addEventListener('mouseup', msUp);
  function msOn(e) {
    let left = e.clientX - slider.getBoundingClientRect().left - p;
    if (left > slider.offsetWidth - thumb.offsetWidth) {
      left = slider.offsetWidth - thumb.offsetWidth;
    }
    thumb.style.left = left + 'px';
  }
 
});