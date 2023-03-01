let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); 
alert( getDateAgo(date, 2) ); 
alert( getDateAgo(date, 365) ); 

function getDateAgo(date, n) {
  let newDate = new Date(date);
  newDate.setDate(date.getDate() - n);
  return newDate.getDate();
}

