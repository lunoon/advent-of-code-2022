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
 */

const findPriorityItem = (rucksack) => {
    const compartments = [rucksack.slice(0,rucksack.length/2), rucksack.slice(rucksack.length/2)]; // [asd, kal]
    const matches = findMatches(compartments[0], compartments[1]); // matches[1] = 'a'
    console.log(matches);
    return Number(Object.keys(matches).at(-1));
}

const findMatches = (a, b) => {
    const matches = {};
    for (leta of a) {
        for (letb of b) {
            if (leta == letb) {
                matches[findScore(leta)] = leta; 
            }
        }
    }
    return matches
}

const findScore = (letter) => {
    let pos = letter.charCodeAt(0);
    if (pos >= 97) { 
        return pos - 96;
    } else {
        return pos - 38;
    }
}

console.log(rucksackArray.map(r => findPriorityItem(r)).reduce((a, b) => a + b));
