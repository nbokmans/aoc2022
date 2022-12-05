import { readFile } from '../util/util.js';

const data = await readFile('data_1.txt');
const split = data.split('\n\n');
const parsed = split.map(i => i.replaceAll('\n', ' ').split(' ').map(i => parseInt(i)).reduce((a, b) => a + b, 0))

// Day 1
const max = Math.max(...parsed);
const index = parsed.indexOf(max);
console.log(parsed);
console.log(max, index);

// Day 2
const top3 = parsed.sort((a, b) => b - a);
console.log(top3[0], top3[1], top3[2]);
console.log(top3[0] + top3[1] + top3[2])