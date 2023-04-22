import { MultiStats } from "webpack";

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

  const shipCoordinates = [];
  for (let i = 0; i < arguments.length && i < 5; i++) {
    shipCoordinates.push(arguments[i]);
  }
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
      if (board[x][y] === "empty") {
        board[x][y] = "miss";
        return "miss";
      } else if (
        board[x][y] !== "empty" ||
        board[x][y] !== "miss" ||
        board[x][y] !== "hit"
      ) {
        // Execute attack on ship
        const shipName = board[x][y];
        ships[shipName].hit();
        // Replace hit ship in board with "hit"
        board[x][y] = "hit";
        if (ships[shipName].isSunk()) return "sink";
        return "hit";
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

function Player(playerType) {
  let turn = false;

  // AI board access
  const board = [];
  for (let i = 0; i < 10; i++) {
    board[i] = [];
    for (let j = 0; j < 10; j++) {
      const x = String.fromCharCode(i + 65);
      const y = j + 1;
      const coordinate = x + y;
      board[i][j] = coordinate;
    }
  }

  // AI list of legal moves
  const legalMoves = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      legalMoves.push(board[i][j]);
    }
  }

  // AI triangulation array (successful hits are recorded
  // until ship is destroyed. Then they are forgotten)
  const targetedSHip = [];

  let attack;
  if (playerType === "human") {
    attack = function (attackCoordinate) {
      return attackCoordinate;
    };
  }
  // 1. AI should randomly produce a coordinate to attack
  // 2. AI should record all previous hits, and only produce a coordinate to attack based on the
  // .. remaining spaces
  // 3. AI should prioritize attacking spaces adjacent to successful hits
  // NOTE: The AI will maintain a list of legal moves. When a move is made, it is subsequently removed
  // .. from the list of legal moves. If a successful move is made, it should randomly select an adjacent
  // .. move based on a 2D array representing the board that it will have access to. While this is
  // .. happening, it will maintain a list of hit spaces for the currently targeted ship. When a hit is
  // .. made, it will check to see if the ship has sunk. If not, it will add the previously hit
  // .. space to the targetedShip array. Once there are two spaces in the targetedShip array, and the
  // .. ship is still not sunk, the AI will prioritize attacking spaces in one direction. Once the ship
  // .. is confirmed to be destroyed, the targetedShip array will be emptied.
  if (playerType === "computer") {
    attack = function (attackCoordinateOverride) {
      if (attackCoordinateOverride !== undefined) {
      }
    };
  }
  return {
    getTurn: function () {
      return turn;
    },
    setTurn: function (booleanValue) {
      turn = booleanValue;
    },
    attack: attack,
  };
}

export { Ship, GameBoard, Player };
