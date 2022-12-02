const fs = require('fs');
const path = require("path");

/*
first column: A for Rock, B for Paper, and C for Scissors
second column: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

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
        if (me == 'X') { // lose
            return 0 + score('s');
        }
        if (me == 'Y') { // draw 
            return 3 + score('r');
        }
        if (me == 'Z') { // win
            return 6 + score('p');
        }
    } 
    if (enemy == 'B') { // paper
        if (me == 'X') { // rock -> loss
            return 0 + score('r');
        }
        if (me == 'Y') { // paper -> draw
            return 3 + score('p');
        }
        if (me == 'Z') { // scissors -> win
            return 6 + score('s');
        }
    }
    if (enemy == 'C') { // scissors
        if (me == 'X') { // loss
            return 0 + score('p');
        }
        if (me == 'Y') { // draw
            return 3 + score('s');
        }
        if (me == 'Z') { // win
            return 6 + score('r');
        }
    }
};

const score = (me) => { 
    if (me == 'r') {
        return 1;
    } 
    if (me == 'p') {
        return 2;
    }
    if (me == 's') {
        return 3;
    }
}

for (round of array) {
    myScore = myScore + isWinning(round[0], round[2])
}

console.log(myScore);