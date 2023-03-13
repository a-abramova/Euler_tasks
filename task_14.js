// сложность O(N Log N).
(() => {
    function collatz() {
        let maxLength = 0;
        let startNum = 0;
        
        for (let i = 1; i < 1000000; i++) {
            const array = [];
            let num = i;
            while (num != 1) {
                if (num % 2 === 0) {
                    num /= 2;
                    array.push(num);
                } else {
                    num = (num * 3) + 1;
                    array.push(num);
                }
            }
            if (maxLength < array.length) {
                maxLength = array.length
                startNum = i;
              } 
        }
        console.log(startNum)
    }

    console.time('answer time');
    const rez = collatz();
    console.timeEnd('answer time');
})();
