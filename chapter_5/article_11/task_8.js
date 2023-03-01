function formatDate(date) {
  let diff = new Date() - date; 
  let sec = Math.floor(diff / 1000);
  let min = Math.floor(diff / 60000);

  let year = date.getFullYear().toString().slice(-2);
  let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();


  return diff < 1000 ? 'прямо сейчас' : sec < 60 ? sec + ' сек. назад' : min < 60 ? min + ' мин. назад' : `${day}.${month}.${year} ${hour}:${minutes}`
}
