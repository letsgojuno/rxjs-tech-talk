import Rx from 'rxjs';

Rx.Observable
  .create(o => {
    console.log('Attempting');
    o.error('nope');
  })
  .retry(10)
  .subscribe(console.log);

Rx.Observable
  .create(o => {
    console.log('Attempting');
    o.error('nope');
  })
  .retryWhen(attempt => attempt.delay(1000).take(5))
  .subscribe(console.log);

Rx.Observable
  .create(o => {
    console.log('Attempting');
    o.error('nope');
  })
  .retryWhen(attempts =>
    Rx.Observable
      .range(1, 3)
      .zip(attempts, (rangeValue, attempt) => rangeValue)
      .switchMap(rangeValue => Rx.Observable.timer(rangeValue * 1000))
  )
  .subscribe(console.log);
