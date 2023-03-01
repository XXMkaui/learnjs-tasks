let ladder = {
  step: 0,
  up() {
    this.step++;
    return ladder;
  },
  down() {
    this.step--;
    return ladder;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return ladder;
  }
};


