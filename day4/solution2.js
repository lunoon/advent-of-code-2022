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

5-7,7-9 overlaps in a single section, 7.
2-8,3-7 overlaps all of the sections 3 through 7.
6-6,4-6 overlaps in a single section, 6.
2-6,4-8 overlaps in sections 4, 5, and 6.
*/

let counter = 0;

const isOverlapping = (left, right) => {
    left.map(i => Number(i));
    right.map(i => Number(i));
    const var1 = [left[0],right[0],left[1],right[1]];
    const var2 = [right[0],left[0],right[1],left[1]];
    const var3 = [left[0],right[0],right[1],left[[1]]];
    const var4 = [right[0],left[0],left[1],right[1]];
    return [var1,var2,var3,var4].some(l => checkOrder(l));
}

const checkOrder = (list) => {
    let sorted = [...list].sort(((a, b) => a - b));
    return arraysEqual(list, sorted);
}

function arraysEqual(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

const isIncluded = (a,b) => {
    let rangeA = a.split('-');
    let rangeB = b.split('-');
    if (isOverlapping(rangeA, rangeB)) {
        counter++;
    } 
}

array.map((line) => isIncluded(...line.split(',')));

console.log(counter);