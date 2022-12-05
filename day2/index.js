import { readFile } from '../util/util.js';
const data = await readFile('data_1.txt');

const mapping = {
    'A': 'rock',
    'B': 'paper',
    'C': 'scissor',
    'X': 'rock',
    'Y': 'paper',
    'Z': 'scissor'
};

const mapping2 = {
    'X': 'lose',
    'Y': 'tie',
    'Z': 'win'
}

const scores = {
    'rock': 1,
    'paper': 2,
    'scissor': 3,
    'win': 6,
    'tie': 3,
    'lose': 0
};

const winningMap = (lhs, desiredResult) => {
    switch (lhs) {
        case 'rock':
            return desiredResult === 'win'
                ? 'paper'
                : desiredResult === 'tie'
                    ? 'rock'
                    : 'scissor';

        case 'scissor':
            return desiredResult === 'win'
                ? 'rock'
                : desiredResult === 'tie'
                    ? 'scissor'
                    : 'paper';
        case 'paper':
            return desiredResult === 'win'
                ? 'scissor'
                : desiredResult === 'tie'
                    ? 'paper'
                    : 'rock'
    }
}

const calcResult = (lhs, rhs) => {
    if (lhs == rhs) {
        return scores['tie'];
    } else {
        if (lhs === 'rock') {
            return rhs === 'paper' ? scores['win'] : scores['lose'];
        } else if (lhs === 'paper') {
            return rhs === 'scissor' ? scores['win'] : scores['lose'];
        } else if (lhs === 'scissor') {
            return rhs === 'rock' ? scores['win'] : scores['lose'];
        }
    }
}

const calculated = data.split('\n').map(d => {
    const split = d.split(' ');
    const lhs = mapping[split[0]];
    const rhs = mapping[split[1]];

    const result = calcResult(lhs, rhs);
    const symbolScore = scores[rhs];
    return result + symbolScore;
});

// day1
const sum = calculated.reduce((a, b) => a + b, 0);
console.log(sum)

// day2
const calculated2 = data.split('\n').map(d => {
    const split = d.split(' ');
    const lhs = mapping[split[0]];
    const desiredResult = mapping2[split[1]];

    const needed = winningMap(lhs, desiredResult);
    const res = calcResult(lhs, needed);
    const symbolScore = scores[needed];

    console.log(lhs, needed, res, symbolScore);

    return res + symbolScore;
});

const sum2 = calculated2.reduce((a, b) => a + b, 0);
console.log(sum2);

