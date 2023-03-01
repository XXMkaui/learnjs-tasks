let date = new Date(2012, 0, 3); 
alert( getWeekDay(date) );   

function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  let weekDay = date.getDay();
  return days[weekDay];
}