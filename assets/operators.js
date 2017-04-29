const runObservable = () => {
  console.clear();

  // single values
  Rx.Observable.of(true)
    .subscribe(console.log);

  // iterable
  Rx.Observable.from('abc')
    .subscribe(console.log);

  // time
  Rx.Observable.interval(500).take(5)
    .subscribe(console.log);

  // Rx.Observable.fromEvent()

  // Rx.Observable.fromPromise()

}

















const Operators = () => (
  <div>
    <h2>Creating Observables</h2>
    <button onClick={runObservable}>Run</button>
  </div>
)
render(<Operators />, mountNode);
