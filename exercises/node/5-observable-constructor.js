const Rx = require('rxjs/Rx');

const { Observable } = Rx;
// TODO: create an observable with the Observable constructor that
// emits the values 1, 2, 3 and completes.
const source$ = new Observable( observer => {
  setTimeout(() => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete()    
  }, 1000);
}); //<-- set me!

console.log('start');
source$.subscribe(
  x => console.log(x),
  err => console.error(err),
  () => console.info('done')
);
console.log('end');
