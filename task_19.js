//сложность О(n*n)

console.time('time');

(() => {
  let sundays = 0;
  for (let year = 1901; year <= 2000; year++) {
    for (let month = 1; month <= 12; month++) {
      if ((new Date(year, month, 1)).getDay() == 0) {
        sundays++;
      }
    }
  }
  console.log(sundays);
})();

console.timeEnd('time'); 
