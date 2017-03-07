// `data$` is an observable stream of 10 numbers.
const data$ = require('./fixtures/1-data.js');

// TODO: create an observer to subscribe to `data$` and log out all values.


const observer = {
  next(x) { console.log(x) }, // next
  err(err) { console.log(err) }, // err
  complete() { console.log("done") }
}

data$.subscribe(observer);