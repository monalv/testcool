const Rx = require('rxjs/Rx');

//TODO: create an observable of 'foo', 'bar' and 'baz' with `Observable.of`
// const source$ = Rx.Observable.of(1,2, 3, Rx.Scheduler.asap);

// console.log('start');
// source$.subscribe(
//   x => console.log(x),
//   err => console.error(err),
//   () => console.info('done')
// );
// console.log('stop');

setTimeout( () => {
  console.log('async'), 0
});

// Event loop does this before the async setTimeout
// this has higher priority over it
// priority : sync stuff, promise asap, asycn
Promise.resolve(true).then(() => console.log(('asap')))

console.log('hi')

/**
  NOTE: expected output
  start
  foo
  bar
  baz
  done
  stop
*/

// Notice the output is _synchronous_!!
