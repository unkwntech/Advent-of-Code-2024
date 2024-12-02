import fs from "fs";

const input = fs.readFileSync("./src/Day 2/input.txt", {
    encoding: "ascii",
});

let count = 0;

//parse input data into 2 seperate arrays of numbers
for (let row of input.split("\n")) {
    let parts = row.split(" ").map((p) => parseInt(p));
    let last;
    let dir;
    let lastDir;
    let safe = true;

    for (let p of parts) {
        if (last === undefined) {
            last = p;
            continue;
        }

        let delta = last - p;

        dir = delta > 0;

        if (lastDir === undefined) {
            lastDir = dir;
            last = p;
            continue;
        }

        if (Math.abs(delta) > 3 || delta === 0 || dir !== lastDir) {
            safe = false;
            lastDir = dir;
            last = p;
            break;
        }

        lastDir = dir;
        last = p;
    }

    if (safe) count++;
}

console.log(`Part 1: ${count}`);

count = 0;

//parse input data into 2 seperate arrays of numbers
for (let row of input.split("\n")) {
    console.log(row);
    let parts = row.split(" ").map((p) => parseInt(p));
    let last;
    let dir;
    let lastDir;
    let safe = true;

    let faults = 0;

    for (let i = 0; i < parts.length; i++) {
        let p = parts[i];

        if (last === undefined) {
            last = p;
            continue;
        }

        let delta = last - p;

        dir = delta > 0;

        if (lastDir === undefined) {
            lastDir = dir;
            last = p;
            continue;
        }

        if (Math.abs(delta) > 3 || delta === 0 || dir !== lastDir) {
            safe = false;
            lastDir = dir;
            last = p;
            faults++;

            //test without current case
            delta = last - p[i + 1];
            dir = delta > 0;
            if (Math.abs(delta) > 3 || delta === 0 || dir !== lastDir) {
                safe = false;
                break;
            } else {
                last = p[++i];
                lastDir = dir;
            }
        }

        lastDir = dir;
        last = p;
    }

    if (safe || faults < 2) {
        console.log("Safe\n");
        count++;
    } else {
        console.log("Unsafe\n");
    }
}

console.log(`Part 2: ${count}`);
