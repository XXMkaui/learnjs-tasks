function getDay(date) { 
  let day = date.getDay();
  return day == 0 ? 6 : day - 1
}

function createCalendar(elem, year, month) {
  let currDate = new Date(year, month - 1);
  let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
  for (let i = 0; i < getDay(currDate); i++) {
    table += '<td></td>';
  }
  while (currDate.getMonth() == month - 1) {
    table += '<td>' + currDate.getDate() + '</td>';
    if (getDay(currDate) % 7 == 6) table += '</tr><tr>';
    currDate.setDate(currDate.getDate() + 1);
  }
  if (getDay(currDate) != 0) {
    for (let i = getDay(currDate); i < 7; i++) {
      table += '<td></td>';
    }
  }
  table += '</tr></table>';
  elem.innerHTML = table;
}

createCalendar(calendar, 2022, 1);