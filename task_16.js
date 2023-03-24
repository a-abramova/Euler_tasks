// сложность O(n)

console.time('time');
((degree) => {
  console.log(BigInt(2 ** degree)
    .toString()
    .split('')
    .reduce((acc, num) => acc += Number(num), 0));
})(1000);
console.timeEnd('time');
