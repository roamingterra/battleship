import { Ship, GameBoard } from "./index.js";

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
test("test a hit on a long ship that should not sink", () => {
  // Define testing variables
  const length = 3;
  const hits = 1;
  const shipInstance = shipTestFixture(length, hits);

  // Perform test
  expect(shipInstance.isSunk()).toBe(false);
});

test("test several hits on a long ship that should sink", () => {
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
  const gameBoardInstance = GameBoard(
    carrierCoordinates,
    battleshipCoordinates,
    cruiserCoordinates,
    submarineCoordinates,
    patrolBoatCoordinates
  );

  const allShipCoordinates = [
    carrierCoordinates,
    battleshipCoordinates,
    cruiserCoordinates,
    submarineCoordinates,
    patrolBoatCoordinates,
  ];

  let testHits = 0;

  loopBeginning: for (let i = 0; i < allShipCoordinates.length; i++) {
    for (let j = 0; j < allShipCoordinates[i].length; j++) {
      gameBoardInstance.receiveAttack(allShipCoordinates[i][j]);
      testHits++;
      if (testHits === hits) break loopBeginning;
    }
  }

  return gameBoardInstance;
}

test("hit some battle ships on the board, which should not end the game", () => {
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

test("hit all battle ships on the board, which should end the game", () => {
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
