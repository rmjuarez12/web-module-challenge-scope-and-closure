// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */

function testCallback(str) {
  return str + str;
}

function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

console.log("Example challenge log:", processFirstItem(["foo", "bar"], testCallback));

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *    A: counter1 function has another function nested inside of it, which uses the variable within the function scope, rather than a variable on the global scope. The
 *       counter2 function does not have another function inside, and does use a variable from the global scope.
 * 2. Which of the two uses a closure? How can you tell?
 *    A: The first one(counterMaker()) is using a closure, because it has a child function within that function. If you return the function by itself, you will see that
 *       the returned value is actually the inner function instead of a set value, that's how I can tell it is using a closure.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *    A: counter1 would be more preferable when we want to have a function run without the use of any variables outside of the function scope. The counter2 function is
 *       better when we need to interact with a variable on the global scope.
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();
console.log("Counter1 code function:", counterMaker());
counter1();
counter1();
console.log("Counter1 closure code function after executing twice:", counter1());

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

counter2();
counter2();
console.log("Counter2 code function after executing twice::", counter2());

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(maxNum) {
  const randomScores = Math.floor(Math.random() * (maxNum + 1));

  return randomScores;
}

console.log("The 'inning' that returns a random number bewteen 0-2:", inning(2));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(callback, inningNum) {
  // Declare the object to return
  let score = {
    Home: 0,
    Away: 0,
  };

  for (let i = 0; i < inningNum; i++) {
    score["Home"] += callback(2);
    score["Away"] += callback(2);
  }

  // Return the new object
  return score;
}

console.log("The object return from finalScore() function:", finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(callback) {
  return callback(2);
}

function scoreboard(callback1, callback2, inningNums) {
  // Declare the variable to return
  let allScores = [];

  // Set the scores to 0 first
  let homeScores = 0;
  let awayScores = 0;
  let currentInning = 0;

  for (let i = 0; i < inningNums; i++) {
    homeScores += callback1(callback2);
    awayScores += callback1(callback2);

    currentInning = i + 1;

    allScores += `Inning ${i + 1}: awayTeam (${awayScores}) - homeTeam (${homeScores})\n`;
  }

  allScores += `Final Score: awayTeam (${awayScores}) - homeTeam (${homeScores})`;

  return allScores;
}

console.log(scoreboard(getInningScore, inning, 9));
