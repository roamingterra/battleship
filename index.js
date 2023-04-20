function Ship(length, name) {
  let hitsTaken = 0;
  return {
    name: name,
    hit: function () {
      hitsTaken++;
    },
    isSunk: function () {
      if (hitsTaken === length) return true;
      else return false;
    },
  };
}

function GameBoard(
  carrierCoordinates,
  battleshipCoordinates,
  cruiserCoordinates,
  submarineCoordinates,
  patrolBoatCoordinates
) {
  // Create board
  const board = [];
  for (let i = 0; i < 10; i++) {
    board[i] = [];
    for (let j = 0; j < 10; j++) {
      board[i][j] = "empty";
    }
  }

  const shipCoordinates = [
    carrierCoordinates,
    battleshipCoordinates,
    cruiserCoordinates,
    submarineCoordinates,
    patrolBoatCoordinates,
  ];

  const shipNames = [
    "carrier",
    "battleship",
    "cruiser",
    "submarine",
    "patrolBoat",
  ];

  // Need to take coordinates of ships, and replace "empty" values in board with appropriate ship names for each ship coordinates
  for (let i = 0; i < shipCoordinates.length; i++) {
    for (let j = 0; j < shipCoordinates[i].length; j++) {
      // Use regex to extract x and y coordinates and ship name
      const regex1 = /[A-J]/i;
      const regex2 = /[1-9]|10/;
      // Convert x coordinate to an ascii number and convert that to a number from 0 to 9
      // Convert y coordinate to a number from 0 to 9
      const xCoordinate =
        shipCoordinates[i][j].match(regex1)[0].charCodeAt(0) - 65;
      const yCoordinate = shipCoordinates[i][j].match(regex2)[0] - 1;
      const shipName = shipNames[i];
      // Replace "empty" value in board coordinate with ship name
      board[xCoordinate][yCoordinate] = shipName;
    }
  }
  // Create ship objects
  const carrier = Ship(5, "carrier");
  const battleship = Ship(4, "battleship");
  const cruiser = Ship(3, "cruiser");
  const submarine = Ship(3, "submarine");
  const patrolBoat = Ship(2, "patrolBoat");

  const ships = {
    carrier: carrier,
    battleship: battleship,
    cruiser: cruiser,
    submarine: submarine,
    patrolBoat: patrolBoat,
  };

  return {
    receiveAttack: function (coordinate) {
      // Convert x and y coordinates to numbers for board array
      const regex1 = /[A-J]/i;
      const regex2 = /[1-9]|10/;
      const x = coordinate.match(regex1)[0].charCodeAt(0) - 65;
      const y = coordinate.match(regex2)[0] - 1;
      if (board[x][y] === "empty") board[x][y] = "miss";
      else if (
        board[x][y] !== "empty" ||
        board[x][y] !== "miss" ||
        board[x][y] !== "hit"
      ) {
        // Execute attack on ship
        const shipName = board[x][y];
        ships[shipName].hit();
        // Replace hit ship in board with "hit"
        board[x][y] = "hit";
      }
    },
    areShipsSunk: function () {
      for (let ship in ships) {
        if (ships[ship].isSunk() === false) {
          return false;
        }
      }
      return true;
    },
  };
}

export { Ship, GameBoard };
