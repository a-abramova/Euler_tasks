// Сложность: O(n)
// Ответ: 648

(() => {
  function factorial(number) {
    let answer = 1n;
    if (number === 0 || number === 1) {
      return answer;
    } else {
        for(i = number; i >= 2; i--) {
        answer *= BigInt(i);
      }
      return answer;
    }
  }

  console.time('answer time');
  const result = factorial(100).toString().split("").reduce(
    (acc, current) => acc + Number(current),
    0
  );
  console.timeEnd('answer time');
  console.log(result);
})();
