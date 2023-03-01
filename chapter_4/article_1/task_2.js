function isEmpty(obj) {
  for (let i in obj) {
    if (i in obj) return false
  }
  return true
}
