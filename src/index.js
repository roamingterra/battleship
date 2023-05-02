import { GameBoard, Player, randomizeShipPositions } from "./logic.js";
import {
  gameBuilder,
  displayPlayerShips,
  displayMiss,
  displayHit,
  removeShipLifeBlock,
  hideNonActivePlayerBoard,
  displayWinner,
} from "./dom-manipulation";
import "./style.css";

async function gameLoop() {
  gameBuilder();

  // Initialize human player and computer player. Make human player start first
  const human = Player("human");
  human.setTurn(true);
  const computer = Player("computer");
  computer.setTurn(false);

  // Randomize ship positions for each board
  const gameBoard1 = randomizeShipPositions();
  const gameBoard2 = randomizeShipPositions();

  // Initialize human board and computer board
  const carrierCoordinatesHuman = gameBoard1[0];
  const battleshipCoordinatesHuman = gameBoard1[1];
  const cruiserCoordinatesHuman = gameBoard1[2];
  const submarineCoordinatesHuman = gameBoard1[3];
  const patrolBoatCoordinatesHuman = gameBoard1[4];

  const carrierCoordinatesComputer = gameBoard2[0];
  const battleshipCoordinatesComputer = gameBoard2[1];
  const cruiserCoordinatesComputer = gameBoard2[2];
  const submarineCoordinatesComputer = gameBoard2[3];
  const patrolBoatCoordinatesComputer = gameBoard2[4];

  const humanGameBoard = GameBoard(
    carrierCoordinatesHuman,
    battleshipCoordinatesHuman,
    cruiserCoordinatesHuman,
    submarineCoordinatesHuman,
    patrolBoatCoordinatesHuman
  );

  displayPlayerShips(
    carrierCoordinatesHuman,
    battleshipCoordinatesHuman,
    cruiserCoordinatesHuman,
    submarineCoordinatesHuman,
    patrolBoatCoordinatesHuman
  );

  const computerGameBoard = GameBoard(
    carrierCoordinatesComputer,
    battleshipCoordinatesComputer,
    cruiserCoordinatesComputer,
    submarineCoordinatesComputer,
    patrolBoatCoordinatesComputer
  );

  // Create array of enemy board blocks with event listeners and return that array
  const board = document.getElementById("player-2-board");
  const clickedBlocks = [];
  const promises = [];

  board.addEventListener("click", function (event) {
    const block = event.target;
    if (
      block.classList.contains("block") &&
      !clickedBlocks.includes(block.classList[1])
    ) {
      const index = block.classList[1];
      const promise = new Promise((resolve) => {
        resolve(index);
      });
      clickedBlocks.push(index);
      promises.push(promise);
    }
  });

  hideNonActivePlayerBoard(human.getTurn(), computer.getTurn());

  // Beginning of game loop
  while (true) {
    if (promises.length === 0) {
      await new Promise((resolve) => setTimeout(resolve, 100)); // wait for promises to be added
      continue; // start the while loop again
    }
    // Human attack
    const humanAttack = await Promise.race(promises);
    promises.length = 0;

    const humanAttackBlock = document.querySelector(
      `#player-2-board > .${humanAttack}`
    );

    // do stuff with human attack
    const humanAttackResult = computerGameBoard.receiveAttack(humanAttack); // should return hit status and ship hit
    if (humanAttackResult[0] === "miss") {
      human.setTurn(false);
      computer.setTurn(true);
      displayMiss(humanAttackBlock);
      hideNonActivePlayerBoard(human.getTurn(), computer.getTurn());
    }

    if (humanAttackResult[0] === "hit" || humanAttackResult[0] === "sink") {
      const shipBlocks = document.querySelector(
        `#player-2-ships > .${humanAttackResult[1]}`
      );

      removeShipLifeBlock(shipBlocks);
      displayHit(humanAttackBlock);
    }

    if (computerGameBoard.areShipsSunk()) {
      displayWinner("player 1 wins");
      return; // Escape game loop
    }

    // Computer attack
    if (computer.getTurn() && !human.getTurn()) {
      let computerPlayAgain = true;
      do {
        await new Promise((resolve) => setTimeout(resolve, 500)); // add a delay of 1 second
        const computerAttack = computer.attack();
        if (computerAttack) {
          const computerAttackResult =
            humanGameBoard.receiveAttack(computerAttack); // should return hit status and ship hit
          computer.receiveAttackInfo(computerAttackResult[0]);

          const computerAttackBlock = document.querySelector(
            `#player-1-board > .${computerAttack}`
          );

          if (computerAttackResult[0] === "miss") {
            human.setTurn(true);
            computer.setTurn(false);
            displayMiss(computerAttackBlock);
            await new Promise((resolve) => setTimeout(resolve, 500)); // add a delay of 1 second
            hideNonActivePlayerBoard(human.getTurn(), computer.getTurn());
            computerPlayAgain = false;
          }

          if (
            computerAttackResult[0] === "hit" ||
            computerAttackResult[0] === "sink"
          ) {
            const shipBlocks = document.querySelector(
              `#player-1-ships > .${computerAttackResult[1]}`
            );

            removeShipLifeBlock(shipBlocks);
            displayHit(computerAttackBlock);
          }

          if (humanGameBoard.areShipsSunk()) {
            displayWinner("player 2 wins");
            return; // Escape game loop
          }
        }
      } while (computerPlayAgain === true);
    }
  }
}

gameLoop();
