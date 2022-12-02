const fs = require('fs');
const path = require("path");

/*
first column: A for Rock, B for Paper, and C for Scissors
second column: what you should play in response: X for Rock, Y for Paper, and Z for Scissors

The winner of the whole tournament is the player with the highest score.
total score is the sum of your scores for each round

each round:
score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) 
score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

A Y
B X
C Z
*/

const file = fs.readFileSync(path.resolve(__dirname,'./input'), err => console.log(err)).toString();

const array = file.split('\n');

let myScore = 0;
const isWinning = (enemy, me) => {
    if (enemy == 'A') { // rock
        if (me == 'X') { // rock 
            return 3;
        }
        if (me == 'Y') { // paper 
            return 6;
        }
        if (me == 'Z') { // scissors
            return 0;
        }
    } 
    if (enemy == 'B') { // paper
        if (me == 'X') { // rock -> loss
            return 0;
        }
        if (me == 'Y') { // paper -> draw
            return 3;
        }
        if (me == 'Z') { // scissors -> win
            return 6;
        }
    }
    if (enemy == 'C') { // scissors
        if (me == 'X') { // rock -> win
            return 6;
        }
        if (me == 'Y') { // paper -> loss
            return 0;
        }
        if (me == 'Z') { // scissors -> draw
            return 3;
        }
    }
};

const score = (me) => { 
    if (me == 'X') {
        return 1;
    } 
    if (me == 'Y') {
        return 2;
    }
    if (me == 'Z') {
        return 3;
    }
}

for (round of array) {
    myScore = myScore + isWinning(round[0], round[2]) + score(round[2]);
}

console.log(myScore);