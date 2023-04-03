// cложность O(n)
let ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

let tenth = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

let hundred = "hundred";

function numberLength(num) {
    if(num === 1000) return "onethousand";
    if(num >= 100) {
        let result = ones[Math.floor(num / 100)] + hundred;
        if(num % 100 !== 0) {
            result += "and" + numberLength(num % 100);
        }
        return result;
    }
    if (num >= 20) {
        return tenth[Math.floor(num / 10)] + ones[num % 10];
    }
    return ones[num];

}

function countLetters(num = 1000) {
    let counter = 0;
    for (let i = 1; i <= num; i++) {
        counter += numberLength(i);
    }
    return counter.length - 1;
}

console.time('time');
// 21124
console.log(countLetters());
console.timeEnd('time');
