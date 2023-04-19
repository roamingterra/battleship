import { Ship, GameBoard } from "./index";

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

// GameBoard testing:
// Factory function that should place ships at specific coordinates by calling Ship factory function
// .. so gameBoard should contain a 10X10 grid, which should contain the following ships:
// 1. Carrier: length 5
// 2. Battleship: length 4
// 3. Cruiser: length 3
// 4. Submarine: length 3
// 5. Patrol Boat: length 2
// .. so the grid will be represented by a 2D array, which will initially contain values "empty".
// .. When placing ships, the instances will be created, and with the given coordinates, they will
// .. be placed in the 2D array as name values (ex: .. "empty", "Cruiser", "Cruiser", "Cruiser", "empty" ..)
// receiveAttack() method that takes a pair of coordinates, determines if an attack hit a ship, then sends
// .. hit function to correct ship, or records the coordinates of the missed shot
// Keep track of missed attacks: by replacing "empty" values in the 2D array with "miss" values
// Report if all ships have been sunk or not areShipsSunk() method

// What to test?
// receiveAttack() method is an outgoing command because it gets called from outside the unit to change
// .. the state of the unit
// areShipsSunk() method is an incoming query because it gets called from outside the unit to return
// .. information on the state of the unit
