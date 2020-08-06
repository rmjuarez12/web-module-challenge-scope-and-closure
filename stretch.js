console.log("============= Stretch Tasks ================");

/* 
 Stretch task 1

  Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions
*/

(function () {
  var a = (b = 3);
})();

console.log(`(function () {
  var a = (b = 3);
})();`);
console.log("a defined? + (typeof a !== 'undefined') = " + (typeof a !== "undefined"));
console.log("b defined? + (typeof b !== 'undefined') = " + (typeof b !== "undefined"));
console.log(
  "A: The console.log output is logging the opposite of defined, which means that, since on 'a' is set as false, then 'a' is defined, while 'b' is the opposite. In the function, once ran, 'a' will be defined, because 'a' was in fact declared an has a value. For 'b' however, it was never defined anywhere, neither inside, nor outside the function scope."
);

console.log("----");

/* 
 Stretch task 2

  Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation here).

  var addSix = createBase(6);
  addSix(10); // returns 16
  addSix(21); // returns 27
*/

function createBase(baseNum) {
  return function (num) {
    console.log(`The sum of ${baseNum}+${num} = `, baseNum + num);
  };
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
