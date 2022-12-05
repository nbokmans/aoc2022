import { readFile } from '../util/util.js';
const data = await readFile('data_1.txt');

const priorities = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'].reduce((acc, item, index) => { acc[item] = index + 1; return acc }, {})

// day 1
const result = data.split('\n').map(row => {
    const halfLength = row.length / 2;
    const split0 = row.substring(0, halfLength);
    let split1 = row.substring(halfLength, row.length);
    let alrdyMapped = [];

    const overlapping = [...split0].reduce((a, b) => {
        if (split1.includes(b) && !alrdyMapped.includes(b)) {
            alrdyMapped = [...alrdyMapped, b];
            return a + priorities[b];
        } else {
            return a;
        }
    }, 0);

    return overlapping;
});

const all = result.reduce((a, b) => a + b, 0);
console.log(all);

// day 2
const chunk = (array, size) => Array(Math.ceil(array.length / size)).fill().map((_, index) => index * size).map(begin => array.slice(begin, begin + size))
const grouped = chunk(data.split('\n'), 3);
const result2 = grouped.map(item => {
    const matchInAll = [...item[0]].find(letter => item.every(grp => grp.includes(letter)));
    console.log(matchInAll);
    return matchInAll;
}).reduce((a, b) => a + priorities[b], 0);
console.log(result2);