// сложность в наилучшем/среднем случае: O(n Log n), в наихудшем: O(n^2)
(() => {
  function quickSort(arr) {
    if (arr <= 1) return arr;

    const middleValue = arr[Math.floor((arr.length - 1) / 2)];
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > middleValue) { rightArr.push(arr[i]) }
      else if (arr[i] < middleValue) { leftArr.push(arr[i]) }
      else { arr[i] = middleValue }
    }

    return quickSort(leftArr).concat(middleValue, quickSort(rightArr));
  };
  console.time('answer time');
  // [200, 201, 300, 400, 500, 700, 800]
  const rez = quickSort([700, 500, 800, 400, 300, 200, 201]);
  console.timeEnd('answer time');
  console.log(rez);
})();
