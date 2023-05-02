import { GameBoard, Player } from "./logic.js";
import {
  gameBuilder,
  displayPlayerShips,
  displayMiss,
  displayHit,
  removeShipLifeBlock,
  hideNonActivePlayerBoard,
} from "./dom-manipulation";
import "./style.css";

async function gameLoop() {
  gameBuilder();

  // Initialize human player and computer player. Make human player start first
  const human = Player("human");
  human.setTurn(true);
  const computer = Player("computer");
  computer.setTurn(false);

  // Initialize human board and computer board (with predetermined ship positioning for now)
  const carrierCoordinates = ["F9", "G9", "H9", "I9", "J9"];
  const battleshipCoordinates = ["B4", "B5", "B6", "B7"];
  const cruiserCoordinates = ["H3", "H4", "H5"];
  const submarineCoordinates = ["E2", "E3", "E4"];
  const patrolBoatCoordinates = ["D6", "E6"];

  const humanGameBoard = GameBoard(
    carrierCoordinates,
    battleshipCoordinates,
    cruiserCoordinates,
    submarineCoordinates,
    patrolBoatCoordinates
  );

  displayPlayerShips(
    carrierCoordinates,
    battleshipCoordinates,
    cruiserCoordinates,
    submarineCoordinates,
    patrolBoatCoordinates
  );

  const computerGameBoard = GameBoard(
    carrierCoordinates,
    battleshipCoordinates,
    cruiserCoordinates,
    submarineCoordinates,
    patrolBoatCoordinates
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
            return; // Escape game loop
          }
        }
      } while (computerPlayAgain === true);
    }
  }
}

gameLoop();
