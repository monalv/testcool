// `data$` is an observable stream of 10 numbers.
const data$ = require('./fixtures/1-data.js');

// TODO: Get the subscription and unsubscribe it after 1 second

subs = data$.subscribe(x => console.log(x));
setTimeout(() => {
  subs.unsubscribe();
}, 1000);