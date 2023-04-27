import { Ship, GameBoard, Player } from "./logic.js";
import {
  gameBuilder,
  displayMiss,
  displayHit,
  removeShipLifeBlock,
} from "./dom-manipulation";
import "./style.css";

gameBuilder();

const blockA1Player1 = document.querySelector("#player-1-board > .A1");
displayMiss(blockA1Player1);

const blockA2Player1 = document.querySelector("#player-1-board > .A2");
displayHit(blockA2Player1);

const carrierLifeBlocks = document.querySelector(".carrier");
removeShipLifeBlock(carrierLifeBlocks);
removeShipLifeBlock(carrierLifeBlocks);

// WHAT TO DO:
// Start writing out pseudocode for the functions I would need.
// This will naturally make me subsequently write pseudocode for dom-manipulation
// Then I shall write tests to test for expected values from those future functions
// Then I can start writing out those functions

// Initialize human player and computer player. Make human player start first with the
// setTurn() methods
// Initialize human board and computer board (with predetermined ship positioning for now)
// FUNCTION (DOM MANIPULATION): Blur board opposite player

// Event listener to expect a click on the enemy board
// {

// FUNCTION: Attack block. check if the location hit is an enemy ship or not. The returned result
// should either be a "miss", or an array containing "hit", and type of ship hit. The returned result
// should be stored in a variable for use by the subsequent dom-manipulation function.
// NOTE: the receiveAttack() board method returns either hit or miss, but it needs to also return what type
// of ship was hit so that the appropriate life block can be shown as hit. I would need to change what the
// method is returning into an array containing the result of the attack, and the type of ship hit. This
// would mean I will have to update the logic to access the first element of a returned array, rather than
// just a returned string

// THESE FUNCTIONS ARE CALLED DEPENDING ON THE RETURNED RESULT OF THE receiveAttack() method
// FUNCTION (DOM MANIPULATION): Make appropriate life block red if that ship was indeed hit
// FUNCTION (DOM MANIPULATION): Place X marker or dot marker on hit space, depending on whether hit or not

// FUNCTION: Check for winner.
// NOTE: Check for who's turn it is, then check enemy board .areShipsSunk() method. Player that won should
// be returned for use of subsequent dom-manipulation function
// FUNCTION (DOM MANIPULATION): Display winner message if there is a winner. Do nothing if not.
// FUNCTION: Check if hit or miss. If hit, don't change turns. If miss, change turns.
// NOTE: Again, this function, like the others, is receiving the necessary info from the attack clicked
// space function.
// COMPUTER WHILE LOOP
// STEPS: 1. FUNCTION (DOM MAN) Blur board opposite player 1. computer.attack() 2. Send the
// attack as an argument to humanGameBoard.receiveAttack()
// 3. FUNCTION: ATTACK CLICKED SPACE 4. FUNCTION (DOM MAN): CHANGE LIFE BLOCK COLOR IF HIT
// 5. FUNCTION (DOM MAN): PLACE MARKER ON HIT SPACE 6. FUNCTION: CHECK FOR WINNER
// 7. FUNCTION (DOM MAN): Blur board opposite player if miss 8. EXIT LOOP
// }

// NEXT:
// I WILL NEED TO CHECK FOR TURN, AND USE A DOM MANIPULATION FUNCTION TO BLUR ENEMY BOARD
// WHERE IS THE LOOP? NEED TO ESTABLISH THIS. THE LOOP ISSS THE EVENT LISTENER. THE GAME
//                    CONTINUES, UNTIL SOMEONE WINS, THEN THE WINNER SCREEN IS APPENDED TO
//                    THE DOM. A FUTURE RESET BUTTON WITH ITS OWN EVENT LISTENER WILL BE
//                    ESTABLISHED

// IMPORTANT:
// AS OF NOW, I HAVE THE GAME LOOP STRUCTURED AROUND THE EVENT LISTENER. TO MAKE MY CODE
// MORE LEGIBLE AND EASIER TO DEBUG AND CATCH ERRORS, I CAN USE A PROMISE CHAIN. THE PROMISE
// CHAIN ENTERS ONCE THE EVENT LISTENER IS EXECUTED. THE COMPUTER MOVE LOOP IS ENTERED IF
// THE HUMAN PLAYER MISSES, AND IT IS SKIPPED OVER IF THE HUMAN PLAYER SUCCESSFULLY HITS A
// SHIP.

// FINAL NOTE:
// ALL OF THESE FUNCTIONS HAVE BEEN ESTABLISHED AS CONCEPTS IMPORTANT TO THE FLOW OF THE
// GAME. NOW I CAN DEVELOP TESTS FOR THEM BEFORE I FLESH THEM OUT. DON'T FORGET: I WILL
// BE PERFORMING UNIT TESTS, NOT INTEGRATION TESTS. THIS MEANS I AM TESTING INDIVIDUAL
// FUNCTIONS, AND NOT THE ENTIRETY OF THE GAME LOOP.

// FINAL FINAL ADENDUM:
// THE INSTRUCTIONS EXPLICITLY SAY TO MAKE A MAIN GAME LOOP THAT RUNS USING ONLY OBJECT
// METHODS. DO NOT CREATE ADDITIONAL LOGIC FUNCTIONS, ONLY DOM MANIPULATION FUNCTIONS.
