import { readFile } from '../util/util.js';

const data = (await readFile('data_1.txt')).split('\n\n')[1];

const idxOffset = (index) => index - 1;

const calc = (retainStackOrder) => {
    const containers = [
        ['D', 'H', 'N', 'Q', 'T', 'W', 'V', 'B'],
        ['D', 'W', 'B'],
        ['T', 'S', 'Q', 'W', 'J', 'C'],
        ['F', 'J', 'R', 'N', 'Z', 'T', 'P'],
        ['G', 'P', 'V', 'J', 'M', 'S', 'T'],
        ['B', 'W', 'F', 'T', 'N'],
        ['B', 'L', 'D', 'Q', 'F', 'H', 'V', 'N'],
        ['H', 'P', 'F', 'R'],
        ['Z', 'S', 'M', 'B', 'L', 'N', 'P', 'H'],
    ];

    const instructions = data.split('\n').map(i => {
        const split = i.split(' ');
        return [+split[1], idxOffset(split[3]), idxOffset(split[5])]
    });

    for (let instruction of instructions) {
        console.log(instruction);
        let amount = instruction[0];

        let removed = containers[instruction[1]].splice(containers[instruction[1]].length - amount, amount)

        if (!retainStackOrder) {
            removed = removed.reverse();
        }

        containers[instruction[2]] = [...containers[instruction[2]], ...removed];
    }

    const result = containers.reduce((a, b) => a + b.filter(f => f !== '').slice(-1), '');
    return result;
}

const day1 = calc(false);
const day2 = calc(true);

console.log(day1);
console.log(day2);