const data$ = require('./fixtures/13-data');
const Rx = require('rxjs/Rx');

/** TODO:
  1. Take the odd numbers from the observable `data$`,
  2. Double them (i.e. 1 -> 2, 3 -> 6, etc)
  3. Sum them
  4. Log the result
*/

let x$ = Rx.Observable.of(1,2,3);

let b$ = x$.flatMap((o) => console.log('>',o))
x$.subscribe(
  x => console.log(x),
  err => console.error(err),
  () => console.info('done')
);

/**
  NOTE: expected output
  50
*/

//TODO: try replacing `reduce` with `scan`!
