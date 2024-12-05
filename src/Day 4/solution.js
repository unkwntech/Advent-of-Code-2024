import fs from "fs";

const input = fs.readFileSync("./src/Day 4/input.txt", {
    encoding: "ascii",
});

//convert input to matrix
let matrix = [];

for (let row of input.split("\n")) {
    matrix.push(row.trim().split(""));
}

function rotateMatrix(input) {
    let output = [];

    for (let i = 0; i < input.length; i++) {
        output[i] = [];
    }

    for (let i = 0; i < input.length; i++) {
        let col = input.length - i - 1;
        for (let j = 0; j < input[i].length; j++) {
            output[j][col] = input[i][j];
        }
    }

    return output;
}

let count = 0;
for (let rotations = 4; rotations > 0; rotations--) {
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let matches = row.join("").match(/XMAS/gi);
        if (matches && matches.length > 0) {
            count += matches.length;
        }

        //diagonal
        for (let j = 0; j < row.length; j++) {
            //console.log(row, i, j);
            if (i + 3 > matrix.length - 1) continue;
            if (j + 3 > row.length - 1) continue;
            if (matrix[i][j] !== "X") continue;

            if (matrix[i + 1][j + 1] !== "M") continue;

            if (matrix[i + 2][j + 2] !== "A") continue;

            if (matrix[i + 3][j + 3] !== "S") continue;

            count++;
        }
    }
    matrix = rotateMatrix(matrix);
}

console.log(`Part 1: ${count}`);
