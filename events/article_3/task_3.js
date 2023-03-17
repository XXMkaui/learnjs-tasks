let t = document.getElementById('grid');

t.addEventListener('click', e => {
  if (e.target.tagName != 'th') return 1;
  const innerTable = grid.querySelector('tbody');
  const row = Array.from(innerTable.rows);
  const col = e.target.cellIndex;
  
  row.sort((rowA, rowB) => {
  const cellA = rowA.cells[col].textContent;
  const cellB = rowB.cells[col].textContent;
  if (Number(cellA)) return cellA - cellB;
  });
  
  innerTable.append(...row);
  });