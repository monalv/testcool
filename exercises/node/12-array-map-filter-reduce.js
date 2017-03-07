const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/** TODO:
  1. Take the odd numbers from the list,
  2. Double them (i.e. 1 -> 2, 3 -> 6, etc)
  3. Sum them
*/

// Helps with garbage collection problem
// since it does not allocate different arrays
// for example if we do the same using arrays then it will create new arrays after
// every map/filter etc 

// using observable,
// it just iterates over data and for each runs diferent function
// 
const result = arr.filter(x => x % 2 === 1)
  .map(y => y * 2)
  .reduce((z, r) => z + r, 0);

console.log(result);

/**
  NOTE: expected output
  50
*/
