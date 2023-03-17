(() => {
  function factorial(num) {
    return (num === 0 || num === 1) ? 1 : num * factorial(num - 1);
  }

  function combinations(num1 = 20, num2 = 40) {
    return (factorial(num2)/(factorial(num1)* factorial(num2-num1)))
  }
  
  console.time('answer time');
  console.log(combinations())
  console.timeEnd('answer time');
})();
