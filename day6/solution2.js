const fs = require('fs');
const path = require("path");

const file = fs.readFileSync(path.resolve(__dirname,'./input'), err => console.log(err)).toString();

/*
which position is character of sequence with unique characters of length 14
*/

let positionMarker = 4;

const array = file.split('');

for (let i = 0; i <= array.length-14; i = i + 14) {
    let origin = array.slice(i,i+14);
    let check = new Set(origin);
    if (origin.join('') === [...check].join('')) {
        console.log(i+13);
        console.log(origin.length);
        console.log(origin.join(''));
    }
}
