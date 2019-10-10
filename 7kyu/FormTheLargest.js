// Task
// Given a number , Return _The Maximum number _ could be formed from the digits of the number given.

function maxNumber(n){
  let number = parseInt(n.toString().split("").sort().reverse().join(""));
  return number;
}
