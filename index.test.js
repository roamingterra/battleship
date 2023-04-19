import { Ship } from "./index";

// Ship object test fixture
function shipTestFixture(length, hits) {
  const shipInstance = Ship(length);
  for (let i = 0; i < hits.length; i++) {
    shipInstance.hit();
  }
  return shipInstance;
}
// Methods to be tested (related to object public interface)
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
  const shipInstance = shipFixture(length, hits);

  // Perform test
  expect(shipInstance.isSunk()).toBe(true);
});
