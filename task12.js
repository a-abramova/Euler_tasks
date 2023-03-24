(() => {
  function getTriangleNumber(rightAmount) {
    let i = 1;
    let triangleNumber = 0;

    while (true) {
      triangleNumber += i;

      let count = getDivisorsCount(triangleNumber);
      if (count > rightAmount) {
        return triangleNumber;
      }
      i++;
    }
  }

  function getDivisorsCount(num) {
    let counter = 0;

    for (let j = 1; j * j <= num; j++) {
      if (num % j === 0) {
        counter += 2;
      }
    }
    return counter;
  }

  console.time('answer time');
  const rez = getTriangleNumber(500);
  console.timeEnd('answer time');

  // 76576500
  console.log(rez);
})();
