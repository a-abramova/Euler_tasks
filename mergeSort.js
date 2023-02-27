// сложность в наилучшем и наихудшем случае — O(N Log N).
(() => {
    const merge = (arrLeft, arrRight) => {
        const arrSort = [];
        let i = 0;
        let j = 0;
    
        while (i < arrLeft.length && j < arrRight.length) {
                arrLeft[i] < arrRight[j] ?
                arrSort.push(arrLeft[i++]) :
                arrSort.push(arrRight[j++]);
        }
    
        return [
            ...arrSort,
            ...arrLeft.slice(i),
            ...arrRight.slice(j)
        ];
    };
    
    const mergeSort = arr => {
        if (arr.length > 1) {
            const middle = Math.floor(arr.length / 2);
            const arrLeft = arr.slice(0, middle);
            const arrRight = arr.slice(middle);
            arr = merge(mergeSort(arrLeft), mergeSort(arrRight));
        }
        return arr;
    }
    console.time('answer time');
    const rez = mergeSort([5, 18, 1, 100, 4, 400]);
    console.timeEnd('answer time');
    console.log(rez);
    
})();
