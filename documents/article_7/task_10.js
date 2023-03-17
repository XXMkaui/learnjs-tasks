let rows = Array.from(table.rows)
rows.slice(1)
rows.sort((fRow, sRow) => fRow.cells[0].innerHTML > sRow.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...rows);