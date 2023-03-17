function debounce(f, ms) {
  let isExe = false;

  return function() {
    if (isExe) return 1;
    isExe = true;

    f.apply(this, arguments);
    setTimeout(() => isExe = false, ms);
  };
}
