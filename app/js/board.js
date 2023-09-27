const board = [];
const size = 10;

function populate(arr, size) {
    for (let i = 0; i < size; i++) {
        // Option 1: Regular tile, return i + 1
        arr.push(i + 1);
        // Option 2: Snake, return number between 1 and i
        // Option 3: Ladder, return number between i + 1 and size - 1
    }
}

populate(board, size);

let player = 1;

function roll() {
    return 1 + Math.floor(Math.random() * 6);
}

function takeTurn() {
    let r = roll();
    console.log("I rolled " + r);
    let next = player + r;
    if (next <= size) {
        player = next;
    }
    if (next === size) {
        console.log("I win!");
    }
    return player;
}