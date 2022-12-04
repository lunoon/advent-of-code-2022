const fs = require('fs');
const path = require("path");

const file = fs.readFileSync(path.resolve(__dirname,'./input'), err => console.log(err)).toString();

const rucksackArray = file.split('\n');

/**
 * two large compartments. 
 * one item type per rucksack
 * 
 * Every item type is identified by a single lowercase or uppercase letter (that is, a and A refer to different types of items).
 * The list of items for each rucksack is given as characters all on a single line
 * 
 * so the first half of the characters represent items in the first compartment, 
 * while the second half of the characters represent items in the second compartment.
 * 
 * Lowercase item types a through z have priorities 1 through 26.
 * Uppercase item types A through Z have priorities 27 through 52.
 * 
 * Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?
 * 
 * 
 * 3 lines => 1 group
 * matching item occurs in each line
 * add priority 
 */

let prioritySum = 0;

const findMatches = (a, b, c) => {
    let matches = {};
    for (leta in a) {
        for (letb in b) {
            for (letc in c) {
                if (a[leta] == b[letb]) {
                    if (a[leta] == c[letc]) { 
                        matches[findScore(a[leta])] = a[leta]; 
                    }
                }
            }
        }
    }
    return matches;
}

const findScore = (letter) => {
    let pos = letter.charCodeAt(0);
    if (pos >= 97) { 
        return pos - 96;
    } else {
        return pos - 38;
    }
}


for (let i = 0; i < rucksackArray.length; i = i + 3) {
    let matches = findMatches(...rucksackArray.slice(i,i+3));
    prioritySum = prioritySum + Number(Object.keys(matches).at(-1));
}

console.log(prioritySum);