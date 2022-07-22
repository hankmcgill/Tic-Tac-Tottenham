//////////////// GAME BOARD DESIGN //////////////////////
const mainContainer = document.getElementById("container");
for (i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cellStyle");
  cell.id = i;
  mainContainer.appendChild(cell);
}
const gameSpaceOne = document.getElementById("0");
const gameSpaceTwo = document.getElementById("1");
const gameSpaceThree = document.getElementById("2");
const gameSpaceFour = document.getElementById("3");
const gameSpaceFive = document.getElementById("4");
const gameSpaceSix = document.getElementById("5");
const gameSpaceSeven = document.getElementById("6");
const gameSpaceEight = document.getElementById("7");
const gameSpaceNine = document.getElementById("8");

const clearBoard = () => {
  gameSpaceOne.innerHTML = "";
  gameSpaceTwo.innerHTML = "";
  gameSpaceThree.innerHTML = "";
  gameSpaceFour.innerHTML = "";
  gameSpaceFive.innerHTML = "";
  gameSpaceSix.innerHTML = "";
  gameSpaceSeven.innerHTML = "";
  gameSpaceEight.innerHTML = "";
  gameSpaceNine.innerHTML = "";
};

////////////////// GAME LOGIC ///////////////////////////
const playerFactory = (name, isHuman, playerSymbol) => {
  return { name, isHuman, playerSymbol };
};
const playerOne = playerFactory("Hank", "Human", "X");
const playerTwo = playerFactory("HAL", "Computer", "O");

const gameBoard = (() => {
  const stateOfBoard = ["O", "", "O", "", "O", "", "O", "", "O"];
  let gameButtons = document.querySelectorAll(".cellStyle");
  gameButtons.forEach(function (cell) {
    cell.addEventListener("click", function () {
      if (cell.innerHTML != "X" && cell.innerHTML != "O") {
        gameBoard.stateOfBoard[cell.id] = "X";
        console.log(gameBoard.stateOfBoard);
      }
      drawBoard();
    });
  });
  return { stateOfBoard };
})();

const drawBoard = () => {
  /////add PLAYERTURN for checking whose turn + player choice //////
  //   clearBoard();
  gameBoard.stateOfBoard.forEach((element, index) => {
    let cellsUpdated = document.querySelectorAll(".cellStyle");
    cellsUpdated[index].innerHTML = element;
  });
  //   const updatedBoardDisplay = drawBoard(gameBoard.stateOfBoard);
  ////add WINNERCHECK to see if winner has been determined///////
  //   return { playerTurn, winnerCheck };
};

drawBoard();
