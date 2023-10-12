const board = [];
const flavorText = [];
// Let board[0] be the player's location
const size = 100;

function populate(arr, size) {
    arr.push(1);
    for (let i = 1; i <= size; i++) {
        arr.push(i);
    }
}

populate(board, size);
populate(flavorText, size);

// Match the Behance design
function customize() {
    board[2] = 41;
    flavorText[2] = "It's love at first sight! Cupid's arrow sends you straight to square 41."
    board[3] = 25;
    flavorText[3] = "You're not gonna find someone if you don't put yourself out there! Maybe square 25 will loosen you up.";
    board[5] = 1;
    flavorText[5] = "It's been a month and they still haven't texted. Back to square 1!"
    //board[6] = ;
    board[8] = 31;
    flavorText[8] = "A secret admirer has sent you chocolates and flowers, shooting you to square 31!";
    board[9] = 10;
    flavorText[9] = "You feel you've found your other half in square 10. 😍"
    board[11] = 12;
    flavorText[11] = "Someone sends you flowers and a one-square move forward."
    board[14] = 20;
    flavorText[14] = "You decide to stay in, and the extra rest and relaxation propels you to square 20."
    board[17] = 39;
    flavorText[17] = "Your astrologer says you and your crush are compatible. Proceed to square 39!";
    board[18] = 16;
    flavorText[18] = "What has love done to you? You hardly recognize yourself. Go 2 squares back!";
    board[19] = 20;
    flavorText[19] = "Rereading your diary gives you insight to your love life, progressing you a square.";
    board[21] = 41;
    flavorText[21] = "Serenaded by your loved one, the force of your emotions sends you up to square 41."
    //board[24] = ;
    board[27] = 20;
    flavorText[27] = "Time for some self reflection. Go back to square 20."
    board[28] = 75;
    flavorText[28] = "You decide to move in together and a year is gone before you know it. You wake up to reality on square 75.";
    board[35] = 67;
    flavorText[35] = "Ay caliente! 🌶 Sparks send you flying to square 67."
    board[36] = 15;
    flavorText[36] = "A fight sends you back to square 15. But don't worry, it's just a hiccup, right?";
    board[37] = 57;
    flavorText[37] = "It's time to get out of bed! Move on to square 57.";
    board[38] = 32;
    flavorText[38] = "You want to make it official, but they want to keep it a secret. Talk it out on square 32."
    board[43] = 1;
    flavorText[43] = "You decide to take a break from dating, and start back up again on square 1."
    board[45] = 20;
    flavorText[45] = "It takes two to be toxic! Go back to square 20."
    board[46] = 88;
    flavorText[46] = "Pregnancy scare! 😱 Move to square 88 to contemplate your life choices.";
    board[49] = 76;
    flavorText[49] = "Your style catches someone's eye, and you leave the party to get drinks on square 76.";
    board[50] = 94;
    flavorText[50] = "A secret admirer sent you a love letter! Move to square 94 and write one back.";
    board[55] = 71;
    flavorText[55] = "You have a magical night out that ends on square 71.";
    board[58] = 85;
    flavorText[58] = "You've been waiting for this call! Get a move on to square 85.";
    board[61] = 48;
    flavorText[61] = "Your relationship has turned into dependence. This throws you back to square 48.";
    board[62] = 42;
    flavorText[62] = "You find yourself in a love triangle and need time to sort it out. Go back to square 42.";
    board[68] = 87;
    flavorText[68] = "You buy a present at a sex shop. It has a happy ending on square 87.";
    board[69] = 96;
    flavorText[69] = "Yes, yes, it's square 69. But to be discreet, I'm sending you to square 96.";
    board[70] = 71;
    flavorText[70] = "You spend a romantic night under the stars on square 71.";
    board[74] = 32;
    flavorText[74] = "You've become the object of gossip! Maybe next time you won't kiss and tell?";
    board[83] = 98;
    flavorText[83] = "An unusually fancy date ends with a surprise on square 98!"
    board[84] = 48;
    flavorText[84] = "You've read a letter that wasn't addressed to you. Clean up the mess on square 48.";
    board[90] = 51;
    flavorText[90] = "A wild night out leaves you dazed on square 51."
    board[92] = 72;
    flavorText[92] = "After a night out at the bar, you come home in the morning to a scolding, sending you back to square 72.";
    board[93] = 51;
    flavorText[93] = "You drank too much and ran your mouth. Sleep it off and start a new day on square 51."
    board[95] = 56;
    flavorText[95] = "Your nostalgia for a past love sends you back to square 56."
    board[99] = 81;
    flavorText[99] = "Are you sure you're ready to commit? Let's reassess on square 81.";
}

customize();

const tiles = document.getElementsByClassName("tile");
for (let i = 0; i < tiles.length; i++) {
    tiles[i].innerHTML += '<img src="./images/' + tiles[i].id + '.png">';
}

function roll() {
    return 1 + Math.floor(Math.random() * 6);
}

function takeTurn() {
    let r = roll();
    alert("🎲 You rolled a " + r + "!");
    let current = board[0];
    let next = current + r;
    if (next <= size) {
        updateActiveTile(current, next);
    } else {
        let n = size - current;
        alert("Too bad, you need a " + n + " to win.");
    }
    if (next === size) {
        alert("You win!");
        if (r % 2 === 0) {
            location.href = "https://www.youtube.com/watch_popup?v=Qc7_zRjH808&autoplay=1";
        } else {
            location.href = "https://www.youtube.com/watch_popup?v=w9m6cwAU384&autoplay=1";
        }
    }
    return board[0];
}

function mouseover() {
    const position = board[0];
    if (position != board[position]) {
        console.log(position);
        console.log(board[position]);
        alert(flavorText[position]);
        updateActiveTile(position, board[position]);
    }
}

const activeText = '<div id="activeText"><span class="hereText">you are here</span>'
                 + '<span class="rollText">roll the die? 🎲</span></div>';

function updateActiveTile(current, next) {
    const c = document.getElementById(current);
    const n = document.getElementById(next);
    c.classList.remove("active");
    try {
        //needed to add try/catch to circumvent undefined exception in initial page setup
        c.removeEventListener("click", takeTurn);
        c.removeEventListener("mouseover", mouseover);
        document.getElementById("activeText").remove();
    } catch {}
    n.classList.add("active");
    n.innerHTML += activeText;
    n.addEventListener("click", takeTurn);
    n.addEventListener("mouseover", mouseover);
    board[0] = next;
}

updateActiveTile(board[0], board[0]);