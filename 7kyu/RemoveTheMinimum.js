/*
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
*/

function removeSmallest(numbers) {
  let newNumbers = [];
  if (numbers.length > 1) {
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
    for (let j = 0; j < numbers.length; j++) {
      if (j === numbers.indexOf(smallest)) {
      } else {
        newNumbers.push(numbers[j]);
      }
    }
  }
  return newNumbers;

  // With mutation of original array :
  /*
SOLUTION #1

  let min = numbers.reduce((prev, curr) => Math.min(prev, curr));
  numbers.splice(numbers.indexOf(min), 1);
  return numbers;

SOLUTION #2

  let min = 0;
  for (let i = 0; i < numbers.length; i++) {
    min = 0;
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] <= numbers[j]) {
        min++;
        if (min === numbers.length) {
          numbers.splice(i, 1);
          return numbers;
        }
      }
    }
  }
  */
}
