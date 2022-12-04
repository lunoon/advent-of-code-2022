const fs = require('fs');
const path = require("path");

const file = fs.readFileSync(path.resolve(__dirname,'./input'), err => console.log(err)).toString();

const array = file.split('\n');

/*
Elves have been assigned the job of cleaning up sections of the camp. Every section has a unique ID number
Each Elf is assigned a range of section IDs.
big list of the section assignments for each pair

pair contains other pair fully

2-96,3-97
24-24,24-76
24-96,4-97
45-84,46-84
62-90,63-91
*/

let counter = 0;

const isPart = (inner, outer) => {
    inner.map(i => Number(i));
    outer.map(i => Number(i));
    const test = [outer[0],inner[0],inner[1],outer[1]];
    const test1 = [...test].sort(((a, b) => a - b));
    return arraysEqual(test, test1);
}

function arraysEqual(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

const isIncluded = (a,b) => {
    let rangeA = a.split('-');
    let rangeB = b.split('-');
    if (isPart(rangeA, rangeB)) { // a in b
        counter++;
    } else if (isPart(rangeB, rangeA)) { // b in a
        counter++;
    }
}

array.map((line) => isIncluded(...line.split(',')));

console.log(counter);