let date = new Date(2012, 0, 3); 
alert( getLocalDay(date) ); 

function getLocalDay(date) {
  let weekDay = date.getDay();
  return weekDay == 0 ? 7 : weekDay
} 