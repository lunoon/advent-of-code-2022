const fs = require('fs');
const path = require("path");

const file = fs.readFileSync(path.resolve(__dirname,'./input'), err => console.log(err)).toString();

/*
which position is character of sequence with unique characters of length 4
*/

let positionMarker = 4;

const array = file.split('');

for (let i = 0; i <= array.length-4; i = i + 4) {
    if ((array[i] !== array[i+1]) && (array[i] !== array[i+2]) && (array[i] !== array[i+3])) {
        if ((array[i+1] !== array[i+2]) && (array[i+1] !== array[i+3])) {
            if (array[i+2] !== array[i+3]) {
                console.log(i+3);
                console.log(array.slice(i,i+4).join(''));
                process.exit(0);
            }
        }
    }
}
