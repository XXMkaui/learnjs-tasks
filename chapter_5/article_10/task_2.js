let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  if (Object.keys(salaries).length == 0) return null;

  let max = -Infinity;
  let maxUser = '';

  for (let [key, value] of Object.entries(salaries)) {
    console.log(value)
    if (value > max) {
      max = value;
      maxUser = key;
    }
  }
  return maxUser
}

console.log(topSalary(salaries))