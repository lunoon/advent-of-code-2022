const fs = require('fs');
const path = require("path");

const file = fs.readFileSync(path.resolve(__dirname,'./input'), err => console.log(err)).toString();

const array = file.split('\n');

/**
 *  crate stack all at once
 * 
 *  1-8 starting point
 *  9   assignment
 * 
 *  which crate will be on top?
 */

const rawStack = array.slice(0,9); // 0,9

const assignments = array.slice(10); // 10,11

const multiStack = {};

const moveOp = (amount, source, dest) => {
    let valList = []
    if ((amount >= 1) && (multiStack[source].length)) {
        valList.push(multiStack[source].pop());
        moveOp(amount-1,source,dest);
    }
    multiStack[dest] = [...multiStack[dest],...valList.reverse()];
}


for (char of rawStack[8].split('')) {
    if (Number(char) != 0) { // found a real number
        let position = rawStack[8].indexOf(char);
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

console.log(Object.values(multiStack).map(s => s.at(-1)).join(''));