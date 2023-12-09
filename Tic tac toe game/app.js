let boxes = document.querySelectorAll(".box");
let Reset = document.querySelector("#Reset");
let newgame = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
msgcontainer.classList.add("hide"); // Initially hide the message container

let turnO = true; //playerx, playerO
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner(); // Call checkWinner after each move
  });
});

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes(); // Disable all boxes when a winner is found
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const checkWinner = () => {
  for (let Pattern of winPatterns) {
    let pos1val = boxes[Pattern[0]].innerText;
    let pos2val = boxes[Pattern[1]].innerText;
    let pos3val = boxes[Pattern[2]].innerText;
    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("Winner", pos1val);
        showWinner(pos1val);
      }
    }
  }
};


const Resetgame = () => {
  // Reset the game logic here
  // Reset the board, enable all boxes, hide the message container, etc.
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  msgcontainer.classList.add("hide");
  turnO = true;
};

newgame.addEventListener("click", Resetgame);
Reset.addEventListener("click", Resetgame);
