function getSecondsToTomorrow() {
  let now = new Date();
  let totalSecondsToday = (now.getHours() * 60 + now.getMinutes()) * 60 + now.getSeconds();
  return 86400 - totalSecondsToday;
}

alert(getSecondsToTomorrow())