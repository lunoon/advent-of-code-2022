const fs = require('fs');
const path = require("path");

const file = fs.readFileSync(path.resolve(__dirname,'./input'), err => console.log(err)).toString();

const array = file.split('\n');

const array2 = [
    '[D]        ',
    '[N] [C]    ',   
    '[Z] [M] [P]',
    ' 1   2   3 ',
    '           ',
    'move 1 from 2 to 1',
    'move 3 from 1 to 3',
    'move 2 from 2 to 1',
    'move 1 from 1 to 2'
]

/**
 *  crate stack 1 at a time
 * 
 *  1-8 starting point
 *  9   assignment
 * 
 *  which crate will be on top?
 */

const rawStack = array.slice(0,9);

const assignments = array.slice(10);

const multiStack = {};

const moveOp = (amount, source, dest) => {
    if ((amount >= 1) && (multiStack[source].length)) {
        let val = multiStack[source].pop();
        multiStack[dest].push(val);
        moveOp(amount-1,source,dest);
    }
}


for (char of rawStack[8].split('')) { // 8
    if (Number(char) != 0) { // found a real number
        let position = rawStack[8].indexOf(char); // 8
        multiStack[char] = [];
        for (line of rawStack.slice(0,8).reverse()) {
            if (Boolean(line[position].match(/[a-zA-Z]/))) {
                multiStack[char].push(line[position]);
            }
        }
    }
}

console.log(multiStack);
for (a of assignments) {
    let inst = a.replace(/\D/g, "").split('');
    if (inst.length == 4) {
        inst = [inst[0]+inst[1],inst[2],inst[3]];
    }
    moveOp(...inst);
}

console.log(multiStack);
console.log(Object.values(multiStack).map(s => s.at(-1)).join(''));