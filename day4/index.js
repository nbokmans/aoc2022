import { readFile } from '../util/util.js';

const data = await readFile('data_1.txt');

const range = (start, end) => Array(end - start + 1).fill().map((_, idx) => start + idx);

const calculateDay = (data, shouldOverlapEntirely) => {
    const pairs = data.split('\n');

    return pairs.map((p, i) => {
        const split = p.split(',');
        const lhs = split[0].split('-');
        const rhs = split[1].split('-');

        const [lowerLeft, upperLeft, lowerRight, upperRight] = [parseInt(lhs[0]), parseInt(lhs[1]), parseInt(rhs[0]), parseInt(rhs[1])];
        const left = range(lowerLeft, upperLeft);
        const right = range(lowerRight, upperRight);

        const contains = shouldOverlapEntirely
            ? left.every(l => right.includes(l)) || right.every(r => left.includes(r))
            : right.some(l => left.includes(l)) || right.some(r => left.includes(r));

        return contains;
    }).filter(pairHasOverlap => pairHasOverlap).length;
}

console.log(calculateDay(data, true));
console.log(calculateDay(data, false));