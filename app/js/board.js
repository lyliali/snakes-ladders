const board = [];
// Let board[0] be the player's location
const size = 101;

function populate(arr, size) {
    arr.push(1);
    for (let i = 1; i < size; i++) {
        // Option 1: Regular tile, return i + 1
        arr.push(i + 1);
        // Option 2: Snake, return number between 1 and i
        // Option 3: Ladder, return number between i + 1 and size - 1
    }
}

populate(board, size);

// Match the Behance design
function customize(arr) {
    arr[8] = 31;
    arr[17] = 39;
    arr[28] = 75;
    arr[36] = 15;
    arr[37] = 57;
    arr[58] = 85;
    arr[62] = 42;
    arr[68] = 87;
    arr[70] = 71;
    arr[84] = 48;
    arr[92] = 72;
    arr[99] = 81;
}

customize(board);

const tiles = document.getElementsByClassName("tile");
for (let i = 0; i < tiles.length; i++) {
    tiles[i].innerHTML = '<img src="./images/' + tiles[i].id + '.png">';
}

function roll() {
    return 1 + Math.floor(Math.random() * 6);
}

function takeTurn() {
    let r = roll();
    console.log("I rolled " + r);
    let next = board[0] + r;
    if (next <= size) {
        board[0] = next;
    }
    if (next === size) {
        alert("I win!");
    }
    return board[0];
}