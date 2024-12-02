import fs from 'fs'

const input = fs.readFileSync('./src/Day 1/input.txt', {
    encoding: "ascii"
});

let left = [], right = [];
let sum = 0;

//parse input data into 2 seperate arrays of numbers
for(let row of input.split("\n")) {
    let parts = row.split("   ");
    left.push(parseInt(parts[0]));
    right.push(parseInt(parts[1]))
}

//sort both arrays
left = left.sort();
right = right.sort();

//sum the difference beween each array
for(let i = 0; i < left.length; i++) {
    sum += Math.abs(left[i] - right[i])
}
console.log(`Part 1: ${sum}`)

sum = 0;

//sum the product of the left and the number of times it occurs in the right
for(let i = 0; i < left.length; i++) {
    sum += left[i] * right.filter(r => r === left[i]).length;
}

console.log(`Part 2: ${sum}`)