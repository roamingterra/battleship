import { Ship, GameBoard, Player } from "./index.js";

// Ship object test fixture
function shipTestFixture(length, hits) {
  const shipInstance = Ship(length);
  for (let i = 0; i < hits; i++) {
    shipInstance.hit();
  }
  return shipInstance;
}
// Ship Methods to be tested (related to object public interface)
// hit() method: Outgoing command method (called from outside the object to change the state of the object)
// isSunk() method: incoming query method (called from outside the object to return and receive information on the state of the object)
test.skip("test a hit on a long ship that should not sink", () => {
  // Define testing variables
  const length = 3;
  const hits = 1;
  const shipInstance = shipTestFixture(length, hits);

  // Perform test
  expect(shipInstance.isSunk()).toBe(false);
});

test.skip("test several hits on a long ship that should sink", () => {
  // Define testing variables
  const length = 3;
  const hits = 3;
  const shipInstance = shipTestFixture(length, hits);

  // Perform test
  expect(shipInstance.isSunk()).toBe(true);
});

// GameBoard Methods to be tested (related to object public interface)
// receiveAttack() method is an outgoing command because it gets called from outside the unit to change
// .. the state of the unit
// areShipsSunk() method is an incoming query because it gets called from outside the unit to return
// .. information on the state of the unit

// GameBoard object test fixture which needs to accept coordinates for all game pieces
function gameBoardFixture(
  carrierCoordinates,
  battleshipCoordinates,
  cruiserCoordinates,
  submarineCoordinates,
  patrolBoatCoordinates,
  hits
) {
  const allShipCoordinates = [];
  for (let i = 0; i < arguments.length && i < 5; i++) {
    allShipCoordinates.push(arguments[i]);
  }
  const gameBoardInstance = GameBoard(...allShipCoordinates);

  let testHits = 0;

  loopBeginning: for (let i = 0; i < allShipCoordinates.length; i++) {
    if (hits === 0 || hits === undefined) break loopBeginning;
    for (let j = 0; j < allShipCoordinates[i].length; j++) {
      gameBoardInstance.receiveAttack(allShipCoordinates[i][j]);
      testHits++;
      if (testHits === hits) break loopBeginning;
    }
  }

  return gameBoardInstance;
}

test.skip("hit some battle ships on the board, which should not end the game", () => {
  // Define testing variables
  const carrierCoordinates = ["F9", "G9", "H9", "I9", "J9"];
  const battleshipCoordinates = ["B4", "B5", "B6", "B7"];
  const cruiserCoordinates = ["H3", "H4", "H5"];
  const submarineCoordinates = ["E2", "E3", "E4"];
  const patrolBoatCoordinates = ["D6", "E6"];

  const gameBoardInstance = gameBoardFixture(
    carrierCoordinates,
    battleshipCoordinates,
    cruiserCoordinates,
    submarineCoordinates,
    patrolBoatCoordinates,
    9
  );

  // Perform test
  expect(gameBoardInstance.areShipsSunk()).toBe(false);
});

test.skip("hit all battle ships on the board, which should end the game", () => {
  // Define testing variables
  const carrierCoordinates = ["F9", "G9", "H9", "I9", "J9"];
  const battleshipCoordinates = ["B4", "B5", "B6", "B7"];
  const cruiserCoordinates = ["H3", "H4", "H5"];
  const submarineCoordinates = ["E2", "E3", "E4"];
  const patrolBoatCoordinates = ["D6", "E6"];

  const gameBoardInstance = gameBoardFixture(
    carrierCoordinates,
    battleshipCoordinates,
    cruiserCoordinates,
    submarineCoordinates,
    patrolBoatCoordinates,
    17
  );

  // Perform test
  expect(gameBoardInstance.areShipsSunk()).toBe(true);
});

// Player Methods to be tested (related to object public interface)
// - Test if player correctly hits a ship by placing a ship on a Gameboard at a certain position
// .. (I should add a feature to the gameBoard where an attack is performed, to return the status of the hit)
// - Test if player hits all spaces of a ship and see if the ship is sunk or not
// - Test if a player misses a ship
// - Test if player AI makes legal moves
// - Test player turns (have starting player make a shot, update its turn, then test if players turn
// .. status is correct)

// I CAN USE THE PREVIOUSLY MADE GAMEBOARD FIXTURE FOR MY UPCOMING PLAYER TESTS, AND SEND IT AN ARGUMENT OF
// .. 0.

test.skip("player correctly hits ship", () => {
  // Define testing variables
  const playerInstance = Player("human");
  const carrierCoordinates = ["F9", "G9", "H9", "I9", "J9"];
  const gameBoardInstance = gameBoardFixture(carrierCoordinates);
  const playerAttack = playerInstance.attack("F9");

  // Perform test
  expect(gameBoardInstance.receiveAttack(playerAttack)).toBe("hit");
});

test.skip("player sinks ship", () => {
  // Define testing variables
  const playerInstance = Player("human");
  const carrierCoordinates = ["F9", "G9", "H9", "I9", "J9"];
  const gameBoardInstance = gameBoardFixture(carrierCoordinates);

  // Perform test
  for (let i = 0; i < carrierCoordinates.length; i++) {
    const playerAttack = playerInstance.attack(carrierCoordinates[i]);
    if (i === carrierCoordinates.length - 1) {
      expect(gameBoardInstance.receiveAttack(playerAttack)).toBe("sink");
      break;
    }
    gameBoardInstance.receiveAttack(playerAttack);
  }
});

test.skip("player misses", () => {
  // Define testing variables
  const playerInstance = Player("human");
  const carrierCoordinates = ["F9", "G9", "H9", "I9", "J9"];
  const gameBoardInstance = gameBoardFixture(carrierCoordinates);
  const playerAttack = playerInstance.attack("A1");

  // Perform test
  expect(gameBoardInstance.receiveAttack(playerAttack)).toBe("miss");
});

// I can initialize a board with every single space being taken up either hits or misses
// .. (except for two spaces) and the AI should attack either of the two remaining spaces
// that are empty or a part of a ship
test("AI makes legal moves", () => {
  // Define testing variables
  const computer = Player("computer");
  const carrierCoordinates = ["F9", "G9", "H9", "I9", "J9"];
  const battleshipCoordinates = ["B4", "B5", "B6", "B7"];
  const cruiserCoordinates = ["H3", "H4", "H5"];
  const submarineCoordinates = ["E2", "E3", "E4"];
  const patrolBoatCoordinates = ["D6", "E6"];
  const gameBoardInstance = gameBoardFixture(
    carrierCoordinates,
    battleshipCoordinates,
    cruiserCoordinates,
    submarineCoordinates,
    patrolBoatCoordinates,
    0
  );

  // Hit every block in board except for one ship block and one empty block
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const x = String.fromCharCode(i + 65);
      const y = j + 1;
      const coordinate = x + y;

      if (coordinate !== "E6" || coordinate !== "E7") {
        computer.receiveAttackInfo(
          gameBoardInstance.receiveAttack(computer.attack(coordinate))
        );
      }
    }
  }

  // Perform test
  const attack = computer.attack();
  expect(
    gameBoardInstance.receiveAttack(attack) === "sink" ||
      gameBoardInstance.receiveAttack(attack) === "miss"
  );
});

test("AI prioritizes attacking blocks adjacent to successful hits", () => {
  // Define testing variables
  const computer = Player("computer");
  const carrierCoordinates = ["F9", "G9", "H9", "I9", "J9"];
  const gameBoardInstance = gameBoardFixture(carrierCoordinates);

  // Perform test
  computer.receiveAttackInfo(
    gameBoardInstance.receiveAttack(computer.attack("H9"))
  );
  const attack = computer.attack();
  expect(
    attack === "G9" || attack === "H8" || attack === "I9" || attack === "H10"
  );
});

test("AI prioritizes attacking blocks in a line after two successful hits", () => {
  // Define testing variables
  const computer = Player("computer");
  const carrierCoordinates = ["F9", "G9", "H9", "I9", "J9"];
  const gameBoardInstance = gameBoardFixture(carrierCoordinates);

  // Perform test
  computer.receiveAttackInfo(
    gameBoardInstance.receiveAttack(computer.attack("G9"))
  );
  computer.receiveAttackInfo(
    gameBoardInstance.receiveAttack(computer.attack("H9"))
  );
  const attack = computer.attack();
  expect(attack === "F9" || attack === "I9");
});

test("AI misses once after two consecutive hits, then pivots to attack towards other direction", () => {
  // Define testing variables
  const computer = Player("computer");
  const carrierCoordinates = ["F9", "G9", "H9", "I9", "J9"];
  const gameBoardInstance = gameBoardFixture(carrierCoordinates);

  // Perform test
  computer.receiveAttackInfo(
    gameBoardInstance.receiveAttack(computer.attack("G9"))
  );
  computer.receiveAttackInfo(
    gameBoardInstance.receiveAttack(computer.attack("F9"))
  );
  computer.receiveAttackInfo(
    gameBoardInstance.receiveAttack(computer.attack("E9"))
  );
  const attack = computer.attack();
  expect(attack).toBe("H9");
});

test.skip("player turn updates", () => {
  // Define testing variables
  const human = Player("human");
  const computer = Player("computer");

  // Perform test
  human.setTurn(true);
  computer.setTurn(false);

  expect(human.getTurn()).toBe(true);
  expect(computer.getTurn()).toBe(false);

  human.setTurn(false);
  computer.setTurn(true);

  expect(human.getTurn()).toBe(false);
  expect(computer.getTurn()).toBe(true);
});
