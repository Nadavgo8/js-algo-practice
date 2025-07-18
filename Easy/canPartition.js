/*
Write a function that returns true if you can partition an array into one element and the rest, such that this element is equal to the product of all other elements excluding itself.

Examples
canPartition([2, 8, 4, 1]) ➞ true
// 8 = 2 x 4 x 1

canPartition([-1, -10, 1, -2, 20]) ➞ false

canPartition([-1, -20, 5, -1, -2, 2]) ➞ true
Notes
The array may contain duplicates.
Multiple solutions can exist, any solution is sufficient to return true.
*/

function canPartition(arr) {
  let numOfZeros = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === 0) {
      numOfZeros++;
    }
  }
  if (numOfZeros === 1) {
    return false;
  }
  if (numOfZeros > 1) {
    return true;
  }
  const arrProd = arr.reduce((product, current) => product * current);
  console.log(arrProd);
  for (const item of arr) {
    if (item !== 0 && item === arrProd / item) {
      return true; // found such an item
    }
  }

  return false; // no such item
}
console.log(canPartition([-1, 0, -0]));
exports.solution = canPartition;