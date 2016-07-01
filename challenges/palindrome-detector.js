/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom
  - racecar
  - stack cats
  - Pull up if I pull up
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

*/

// YOUR CODE HERE
var shiftedLetter;
var poppedLetter;
var wordArray;                           // only got to racecar :(

function shiftAndPop() {
  shiftedLetter = wordArray.shift();     // ran out of time but had idea to split this into 2 functions and
  poppedLetter = wordArray.pop();        // write if statements to check for " " & punction but i tried and couldn't make it work.
}                                        // also have to use either toUpperCase() or toLowerCase() because p and P were returning false.
                                        
function isPalindrome(word) {
  wordArray = word.split("");
  shiftAndPop();

  while(shiftedLetter === poppedLetter){
    shiftAndPop();

  if(wordArray <= 1) {
    return true;
  }

  }
    return false;
}
