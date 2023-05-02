**Battleship game created using Test Driven Development (TDD)**

The idea of this project was to create a battleship game application using test driven development. I only focussed on unit testing rather than integration testing, and I did not write any tests with regards to the appearance of the application. I used Jest as a testing framework. You can find my tests in the src folder of this project.

The tests were written mainly for the logic of the game, and exclusively for the following game objects: ships, game boards, and players, in that order. This actually worked well, and I very much saw the usefulness of this development technique.

Some problems did arise however. I tried to develop tests for the main game loop initially, after my logic was complete, but this proved difficult, and impractical, as I didn't need to create any more game logic functions that could be testable. I believe an integration test could have proven useful in this case, but I did not go through integration tests at this point unfortunately.

The biggest problems however, were bugs that manifested themselves in my logic after the UI and main game loop were created, and I was manually testing the games. Here isa a list of the main bugs and their corrections:

1. I had to add if conditions to all the sections in the Player attack
   method, because sometimes, possible moves are out of bounds, and
   therefor don't exist in the board array.

2. I had to edit the if statement at line 89 because sometimes the
   condition would accept attacks that were already missed

3. I forgot to add a decrement statement for i line 195, which was
   probably the most insidious of the bugs, and took the longest time to
   locate.

These were bugs that were not filtered through the tests, and could have been caught early if I had created more tests to cover these specific scenarios. This was a good lesson learned.

**Future Potential Improvements**

1. I decided against adding an option for the player to chose ship
   placements through either drag-and-drop or entering coordinates. I did
   this because the main point of this project was to practice Test Driven
   Development, and in order to save time, I chose the randomizing of ship
   positions. The implementation of choosing ship positions can be a
   future, potential improvement, specifically drag and drop, as this was
   suggested to me by the odin project, and seems interesting to implement.

2. I should have added labels over each player board (player 1 and player 2).
   Unfortunately, I had designed the UI, and then implemented it within the
   game application before even thinking of this. I will have to save this
   as a future improvement.

3. Finally, the computer AI. I was actually quite proud of the fact that the
   AI, once it hits a ship block, will know to try and locate the rest of the
   ship. This was achieved with the help of my tests, which is why I definitely
   now see the use of it. However, the AI could be even more sophisticated. As
   of now, the AI simply selects a random block from all the blocks that have not
   been hit yet, but some times these random hits are bunched up in specific places,
   and other times, the random hits obviously don't seem as strategic compared to
   human players. This could obviously be improved upon.
