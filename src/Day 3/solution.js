import fs from "fs";

const input = fs.readFileSync("./src/Day 3/input.txt", {
    encoding: "ascii",
});

let matches = input.matchAll(/mul\(\d{1,3},\d{1,3}\)/gi);

let sum = 0;

for (let match of matches) {
    sum += eval(match[0]);
}

console.log(`Part 1: ${sum}`);

function mul(a, b) {
    return parseInt(a) * parseInt(b);
}

sum = 0;

let fragments = ("do()" + input).split("do()");
for (let frag of fragments) {
    for (let match of frag
        .split("don't()")[0]
        .matchAll(/mul\(\d{1,3},\d{1,3}\)/gi)) {
        sum += eval(match[0]);
    }
}

console.log(`Part 2: ${sum}`);
