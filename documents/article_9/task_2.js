let e = document.createElement('div');
e.style.overflowY = 'scroll';
e.style.height = '720px';
e.style.width = '1024px';
document.body.append(e);
let scrollWidth = e.offsetWidth - e.clientWidth;
