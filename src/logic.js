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
      const regex2 = /[1-9]\d*/;
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
      const regex2 = /[1-9]\d*/;
      const x = coordinate.match(regex1)[0].charCodeAt(0) - 65;
      const y = coordinate.match(regex2)[0] - 1;

      if (board[x][y] === "empty") {
        if (coordinate === "E7" || coordinate === "E6") board[x][y] = "miss";
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
        if (ships[shipName].isSunk()) {
          return "sink";
        }
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
  const targetedShip = [];

  // AI records attacked coordinate, which will be used if the hit is a success
  let lastAttack;

  let attack;
  let receiveAttackInfo = undefined;

  if (playerType === "human") {
    attack = function (attackCoordinate) {
      return attackCoordinate;
    };
  }
  // 1. AI should randomly produce a coordinate to attack
  // 2. AI should record all previous hits, and only produce a coordinate to attack based on the
  // .. remaining spaces
  // 3. AI should prioritize attacking spaces adjacent to successful hits
  if (playerType === "computer") {
    attack = function (attackCoordinateOverride) {
      if (attackCoordinateOverride === undefined) {
        let attackCoordinate;
        // if targetedShip array length is 1, get a random adjacent coordinate (max 4 choices)
        if (targetedShip.length === 1) {
          const possibleMoves = [];
          const regex1 = /[A-J]/i;
          const regex2 = /[1-9]\d*/;
          const x = targetedShip[0].match(regex1)[0].charCodeAt(0) - 65;
          const y = targetedShip[0].match(regex2)[0] - 1;

          // Record all possible adjacent moves
          possibleMoves.push(board[x + 1][y]);
          possibleMoves.push(board[x - 1][y]);
          possibleMoves.push(board[x][y + 1]);
          possibleMoves.push(board[x][y - 1]);

          // Remove possible adjacent move if not possible
          for (let i = 0; i < possibleMoves.length; i++) {
            if (possibleMoves[i] === undefined) possibleMoves.splice(i, 1);
            let isLegal = false;
            legalMoveCheck: for (let j = 0; j < legalMoves.length; j++) {
              if (possibleMoves[i] === legalMoves[j]) {
                isLegal = true;
                break legalMoveCheck;
              }
            }
            if (isLegal === false) possibleMoves.splice(i, 1);
          }

          // Choose random move from list of possible moves
          attackCoordinate =
            possibleMoves[
              Math.floor(Math.random() * (possibleMoves.length + 1))
            ];
        }
        // if targetedShip array is greater than 1, get a coordinate on the same line as those
        // .. recorded coordinates and is adjacent to either of the recorded coordinates in the
        // .. targetedShip array
        else if (targetedShip.length > 1) {
          const regex1 = /[A-J]/i;
          const regex2 = /[1-9]\d*/;
          // Record all targeted ship coordinates in array form
          const xCoordinates = [];
          const yCoordinates = [];
          for (let i = 0; i < targetedShip.length; i++) {
            xCoordinates.push(
              targetedShip[i].match(regex1)[0].charCodeAt(0) - 65
            );
            yCoordinates.push(targetedShip[i].match(regex2)[0] - 1);
          }
          // Establish line of attack
          const allEqual = (arr) => arr.every((v) => v === arr[0]);
          const xCoordinatesAllEqual = allEqual(xCoordinates); // Either true or false
          const yCoordinatesAllEqual = allEqual(yCoordinates); // Either true or false
          // Record all possible moves
          const possibleMoves = [];
          for (let i = 0; i < targetedShip.length; i++) {
            const x = xCoordinates[i];
            const y = yCoordinates[i];
            if (xCoordinatesAllEqual) {
              possibleMoves.push(board[x][y + 1]);
              possibleMoves.push(board[x][y - 1]);
            } else if (yCoordinatesAllEqual) {
              possibleMoves.push(board[x + 1][y]);
              possibleMoves.push(board[x - 1][y]);
            }
          }
          // Remove possible adjacent move if not possible
          const impossibleMoves = [];
          for (let i = 0; i < possibleMoves.length; i++) {
            if (possibleMoves[i] === undefined) possibleMoves.splice(i, 1);
            let isLegal = false;
            legalMoveCheck: for (let j = 0; j < legalMoves.length; j++) {
              if (possibleMoves[i] === legalMoves[j]) {
                isLegal = true;
                break legalMoveCheck;
              }
            }
            if (isLegal === false) {
              impossibleMoves.push(possibleMoves[i]);
            }
          }

          for (let i = 0; i < possibleMoves.length; i++) {
            if (impossibleMoves.includes(possibleMoves[i])) {
              possibleMoves.splice(i, 1);
              i--;
            }
          }
          // Choose random move from list of possible moves
          attackCoordinate =
            possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        }
        // else, get random block from legalMoves array
        else {
          attackCoordinate =
            legalMoves[Math.floor(Math.random() * legalMoves.length)];
        }
        // Remove that coordinate from legalMoves array
        for (let i = 0; i < legalMoves.length; i++) {
          if (attackCoordinate === legalMoves[i]) legalMoves.splice(i, 1);
        }
        // Assign lastAttack variable the value of the to be attacked coordinate
        lastAttack = attackCoordinate;
        // return attacked coordinate
        return attackCoordinate;
      } else if (attackCoordinateOverride !== undefined) {
        // Remove that coordinate from legalMoves array
        for (let i = 0; i < legalMoves.length; i++) {
          if (attackCoordinateOverride === legalMoves[i])
            legalMoves.splice(i, 1);
        }
        // Assign lastAttack variable the value of the to be attacked coordinate
        lastAttack = attackCoordinateOverride;
        // return attacked coordinate
        return attackCoordinateOverride;
      }
    };
    receiveAttackInfo = function (receivedStatus) {
      if (receivedStatus === "hit") {
        targetedShip.push(lastAttack);
      }
      if (receivedStatus === "sink") {
        targetedShip.length = 0;
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
    receiveAttackInfo: receiveAttackInfo,
  };
}

export { Ship, GameBoard, Player };