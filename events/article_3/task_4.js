document.addEventListener('mouseover', tip);
document.addEventListener('mouseout', tip);

function tip(e) {
  if (e.type == 'mouseover' && e.target.dataset.tooltip) {
    let div = document.createElement('div');
    div.className = 'tooltip';
    div.textContent = e.target.dataset.tooltip;
    document.body.append(div);
    div.style.left = parseInt(e.target.getBoundingClientRect().left) + 'px';
    div.style.top = parseInt(e.target.getBoundingClientRect().top) - parseInt(div.getBoundingClientRect().height) + 'px';
    if (parseInt(div.style.top) < 0) {
      div.style.top = e.target.getBoundingClientRect().bottom + 'px';
    }
  }
  if (e.type == 'mouseout' && e.target.dataset.tooltip) {
    document.querySelector('.tooltip').remove();
  }
}