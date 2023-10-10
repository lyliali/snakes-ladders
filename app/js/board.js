const board = [];
// Let board[0] be the player's location
const size = 100;

function populate(arr, size) {
    arr.push(1);
    for (let i = 1; i <= size; i++) {
        arr.push(i);
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
    console.log("You rolled " + r);
    let current = board[0];
    let next = board[current + r];
    if (next <= size) {
        updateActiveTile(current, next);
        board[0] = next;
    }
    if (next === size) {
        alert("You win!");
        location.href = "https://www.youtube.com/watch_popup?v=Qc7_zRjH808&autoplay=1";
    }
    return board[0];
}

function updateActiveTile(prev, current) {
    document.getElementById(prev).classList.remove("active");
    document.getElementById(current).classList.add("active");
}

updateActiveTile(board[0], board[0]);